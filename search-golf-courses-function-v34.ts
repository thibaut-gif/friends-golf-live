const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type GolfCourseApiCourse = {
  id?: string | number;
  course_id?: string | number;
  club_name?: string;
  course_name?: string;
  name?: string;
  location?: string;
  city?: string;
  state?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  par?: number;
  rating?: number;
  slope?: number;
  distance?: string;
  tees?: unknown[];
  tee_boxes?: unknown[];
  teeBoxes?: unknown[];
  scorecard?: unknown;
  holes?: unknown[];
};

function pickCourseId(course: GolfCourseApiCourse) {
  return String(course.id ?? course.course_id ?? course.course_name ?? course.name ?? crypto.randomUUID());
}

function normalizeCourse(course: GolfCourseApiCourse) {
  const city = course.city || "";
  const region = course.state || "";
  const country = course.country || "";
  const location = course.location || [city, region, country].filter(Boolean).join(", ");
  const tees = Array.isArray(course.tees)
    ? course.tees
    : Array.isArray(course.tee_boxes)
      ? course.tee_boxes
      : Array.isArray(course.teeBoxes)
        ? course.teeBoxes
        : [];

  return {
    id: `api-${pickCourseId(course)}`,
    providerId: pickCourseId(course),
    name: course.course_name || course.name || course.club_name || "Golf",
    clubName: course.club_name || "",
    location: location || "GolfCourseAPI",
    par: course.par || null,
    rating: course.rating || null,
    slope: course.slope || null,
    latitude: course.latitude || null,
    longitude: course.longitude || null,
    distance: course.distance || "API",
    tees,
    holes: Array.isArray(course.holes) ? course.holes : [],
    scorecard: course.scorecard || null,
    rawData: course,
  };
}

async function fetchCourseDetails(baseUrl: string, apiKey: string, course: GolfCourseApiCourse) {
  const id = pickCourseId(course);
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/courses/${encodeURIComponent(id)}`, {
    headers: {
      Authorization: `Key ${apiKey}`,
      "X-API-Key": apiKey,
      Accept: "application/json",
    },
  });
  if (!response.ok) return course;
  const detail = await response.json();
  return { ...course, ...(detail.course || detail) };
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const apiKey = Deno.env.get("GOLFCOURSEAPI_KEY");
  const baseUrl = Deno.env.get("GOLFCOURSEAPI_BASE_URL") || "https://api.golfcourseapi.com/v1";

  if (!apiKey) {
    return Response.json({ error: "Missing GOLFCOURSEAPI_KEY secret" }, { status: 500, headers: corsHeaders });
  }

  const url = new URL(request.url);
  const query = url.searchParams.get("query")?.trim() || "";
  const lat = url.searchParams.get("lat");
  const lng = url.searchParams.get("lng");
  const radius = url.searchParams.get("radius") || "50";

  if (query.length < 2 && (!lat || !lng)) {
    return Response.json({ courses: [] }, { headers: corsHeaders });
  }

  const apiUrl = new URL(`${baseUrl.replace(/\/$/, "")}/search`);
  if (query.length >= 2) apiUrl.searchParams.set("search_query", query);
  if (lat && lng) {
    apiUrl.searchParams.set("lat", lat);
    apiUrl.searchParams.set("lng", lng);
    apiUrl.searchParams.set("radius", radius);
  }

  const upstream = await fetch(apiUrl, {
    headers: {
      Authorization: `Key ${apiKey}`,
      "X-API-Key": apiKey,
      Accept: "application/json",
    },
  });

  if (!upstream.ok) {
    const detail = await upstream.text();
    return Response.json({ error: "GolfCourseAPI request failed", detail }, { status: upstream.status, headers: corsHeaders });
  }

  const payload = await upstream.json();
  const rawCourses = Array.isArray(payload)
    ? payload
    : Array.isArray(payload.courses)
      ? payload.courses
      : Array.isArray(payload.results)
        ? payload.results
        : [];
  const detailedCourses = await Promise.all(rawCourses.slice(0, 8).map((course) => fetchCourseDetails(baseUrl, apiKey, course)));

  return Response.json({ courses: detailedCourses.map(normalizeCourse) }, { headers: corsHeaders });
});
