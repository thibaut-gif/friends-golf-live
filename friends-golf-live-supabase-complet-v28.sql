-- Friends Golf Live (FGL) - schema Supabase complet v28
-- A coller dans Supabase > SQL Editor > New query, puis cliquer Run.
-- Version robuste: comptes, competitions, parcours, trous, scores live et invitations.

-- 1. Tables et fonctions principales


create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_language text not null default 'FR',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.competitions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  competition_type text not null default 'friends',
  starts_on date,
  ends_on date,
  game_formula text not null default 'stableford-net',
  scoring_mode text not null default 'marker',
  putts_enabled boolean not null default false,
  live_leaderboard boolean not null default true,
  card_signature boolean not null default true,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.competition_members (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  role text not null default 'player',
  created_at timestamptz not null default now(),
  unique (competition_id, user_id)
);

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  display_name text not null,
  playing_index numeric(5, 1),
  created_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_course_id text not null,
  club_name text,
  course_name text not null,
  country text,
  city text,
  latitude numeric,
  longitude numeric,
  raw_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, provider_course_id)
);

create table if not exists public.rounds (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  round_number integer not null,
  course_id uuid references public.courses(id),
  tees text,
  played_on date,
  created_at timestamptz not null default now(),
  unique (competition_id, round_number)
);

create table if not exists public.groups (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  round_id uuid references public.rounds(id) on delete cascade,
  name text not null,
  tee_time time,
  created_at timestamptz not null default now()
);

create table if not exists public.group_players (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  position integer,
  created_at timestamptz not null default now(),
  unique (group_id, player_id)
);

create table if not exists public.marker_assignments (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  round_id uuid references public.rounds(id) on delete cascade,
  group_id uuid not null references public.groups(id) on delete cascade,
  marker_player_id uuid not null references public.players(id) on delete cascade,
  marked_player_id uuid not null references public.players(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (round_id, marker_player_id)
);

create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  round_id uuid not null references public.rounds(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  marker_player_id uuid references public.players(id) on delete set null,
  hole_number integer not null check (hole_number between 1 and 18),
  gross_score integer check (gross_score between 1 and 20),
  putts integer check (putts between 0 and 10),
  status text not null default 'draft',
  source text not null default 'marker',
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (round_id, player_id, hole_number, source)
);

create table if not exists public.score_events (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  score_id uuid references public.scores(id) on delete cascade,
  player_id uuid references public.players(id) on delete set null,
  hole_number integer check (hole_number between 1 and 18),
  event_type text not null,
  previous_value jsonb,
  next_value jsonb,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.card_signatures (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  round_id uuid not null references public.rounds(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  signer_player_id uuid not null references public.players(id) on delete cascade,
  signature_role text not null check (signature_role in ('player', 'marker', 'organizer')),
  signed_at timestamptz not null default now(),
  signature_payload jsonb not null default '{}'::jsonb,
  unique (round_id, player_id, signer_player_id, signature_role)
);


-- Compatibilite avec les anciennes maquettes deja lancees dans Supabase.
-- create table if not exists ne modifie pas une table existante, donc on ajoute ici les colonnes manquantes.
alter table public.profiles
  add column if not exists display_name text,
  add column if not exists preferred_language text not null default 'FR',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

alter table public.competitions
  add column if not exists competition_type text not null default 'friends',
  add column if not exists starts_on date,
  add column if not exists ends_on date,
  add column if not exists game_formula text not null default 'stableford-net',
  add column if not exists scoring_mode text not null default 'marker',
  add column if not exists putts_enabled boolean not null default false,
  add column if not exists live_leaderboard boolean not null default true,
  add column if not exists card_signature boolean not null default true,
  add column if not exists created_by uuid references auth.users(id),
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

alter table public.competition_members
  add column if not exists competition_id uuid references public.competitions(id) on delete cascade,
  add column if not exists user_id uuid references auth.users(id) on delete set null,
  add column if not exists role text not null default 'player',
  add column if not exists created_at timestamptz not null default now();

alter table public.players
  add column if not exists competition_id uuid references public.competitions(id) on delete cascade,
  add column if not exists user_id uuid references auth.users(id) on delete set null,
  add column if not exists display_name text,
  add column if not exists playing_index numeric(5, 1),
  add column if not exists created_at timestamptz not null default now();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists competitions_set_updated_at on public.competitions;
create trigger competitions_set_updated_at
before update on public.competitions
for each row execute function public.set_updated_at();

drop trigger if exists courses_set_updated_at on public.courses;
create trigger courses_set_updated_at
before update on public.courses
for each row execute function public.set_updated_at();

drop trigger if exists scores_set_updated_at on public.scores;
create trigger scores_set_updated_at
before update on public.scores
for each row execute function public.set_updated_at();

create or replace function public.can_access_competition(target_competition_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.competitions c
    where c.id = target_competition_id
      and c.created_by = auth.uid()
  )
  or exists (
    select 1
    from public.competition_members cm
    where cm.competition_id = target_competition_id
      and cm.user_id = auth.uid()
  );
$$;

create or replace function public.can_manage_competition(target_competition_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.competitions c
    where c.id = target_competition_id
      and c.created_by = auth.uid()
  )
  or exists (
    select 1
    from public.competition_members cm
    where cm.competition_id = target_competition_id
      and cm.user_id = auth.uid()
      and cm.role in ('organizer', 'admin')
  );
$$;

-- 2. Parcours, tees et trous

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  provider text not null default 'manual',
  provider_course_id text not null default gen_random_uuid()::text,
  club_name text,
  course_name text not null,
  country text,
  city text,
  latitude numeric,
  longitude numeric,
  par integer,
  rating numeric(4, 1),
  slope integer,
  tees jsonb not null default '[]'::jsonb,
  raw_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, provider_course_id)
);

alter table public.courses add column if not exists par integer;
alter table public.courses add column if not exists rating numeric(4, 1);
alter table public.courses add column if not exists slope integer;
alter table public.courses add column if not exists tees jsonb not null default '[]'::jsonb;

create table if not exists public.course_holes (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  hole_number integer not null check (hole_number between 1 and 18),
  par integer not null check (par between 3 and 6),
  stroke_index integer not null check (stroke_index between 1 and 18),
  created_at timestamptz not null default now(),
  unique (course_id, hole_number)
);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.courses to anon, authenticated;
grant select, insert, update, delete on public.course_holes to anon, authenticated;

alter table public.courses enable row level security;
alter table public.course_holes enable row level security;

drop policy if exists "prototype courses access" on public.courses;
create policy "prototype courses access"
on public.courses
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "prototype course holes access" on public.course_holes;
create policy "prototype course holes access"
on public.course_holes
for all
to anon, authenticated
using (true)
with check (true);

-- 3. Regles de securite

alter table public.profiles enable row level security;
alter table public.competitions enable row level security;
alter table public.competition_members enable row level security;
alter table public.players enable row level security;
alter table public.courses enable row level security;
alter table public.rounds enable row level security;
alter table public.groups enable row level security;
alter table public.group_players enable row level security;
alter table public.marker_assignments enable row level security;
alter table public.scores enable row level security;
alter table public.score_events enable row level security;
alter table public.card_signatures enable row level security;

drop policy if exists "profiles own rows" on public.profiles;
create policy "profiles own rows" on public.profiles
for all to authenticated
using (id = auth.uid())
with check (id = auth.uid());

drop policy if exists "competitions visible to members" on public.competitions;
create policy "competitions visible to members" on public.competitions
for select to authenticated
using (public.can_access_competition(id));

drop policy if exists "competitions created by user" on public.competitions;
create policy "competitions created by user" on public.competitions
for insert to authenticated
with check (created_by = auth.uid());

drop policy if exists "competitions managed by organizers" on public.competitions;
create policy "competitions managed by organizers" on public.competitions
for update to authenticated
using (public.can_manage_competition(id))
with check (public.can_manage_competition(id));

drop policy if exists "members visible to competition users" on public.competition_members;
create policy "members visible to competition users" on public.competition_members
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "members managed by organizers" on public.competition_members;
create policy "members managed by organizers" on public.competition_members
for all to authenticated
using (public.can_manage_competition(competition_id))
with check (public.can_manage_competition(competition_id));

drop policy if exists "players visible to competition users" on public.players;
create policy "players visible to competition users" on public.players
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "players managed by organizers" on public.players;
create policy "players managed by organizers" on public.players
for all to authenticated
using (public.can_manage_competition(competition_id))
with check (public.can_manage_competition(competition_id));

drop policy if exists "courses readable to authenticated" on public.courses;
create policy "courses readable to authenticated" on public.courses
for select to authenticated
using (true);

drop policy if exists "courses cached by authenticated" on public.courses;
create policy "courses cached by authenticated" on public.courses
for insert to authenticated
with check (true);

drop policy if exists "rounds visible to competition users" on public.rounds;
create policy "rounds visible to competition users" on public.rounds
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "rounds managed by organizers" on public.rounds;
create policy "rounds managed by organizers" on public.rounds
for all to authenticated
using (public.can_manage_competition(competition_id))
with check (public.can_manage_competition(competition_id));

drop policy if exists "groups visible to competition users" on public.groups;
create policy "groups visible to competition users" on public.groups
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "groups managed by organizers" on public.groups;
create policy "groups managed by organizers" on public.groups
for all to authenticated
using (public.can_manage_competition(competition_id))
with check (public.can_manage_competition(competition_id));

drop policy if exists "group players visible through group" on public.group_players;
create policy "group players visible through group" on public.group_players
for select to authenticated
using (
  exists (
    select 1 from public.groups g
    where g.id = group_id
      and public.can_access_competition(g.competition_id)
  )
);

drop policy if exists "group players managed through group" on public.group_players;
create policy "group players managed through group" on public.group_players
for all to authenticated
using (
  exists (
    select 1 from public.groups g
    where g.id = group_id
      and public.can_manage_competition(g.competition_id)
  )
)
with check (
  exists (
    select 1 from public.groups g
    where g.id = group_id
      and public.can_manage_competition(g.competition_id)
  )
);

drop policy if exists "marker assignments visible to competition users" on public.marker_assignments;
create policy "marker assignments visible to competition users" on public.marker_assignments
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "marker assignments managed by organizers" on public.marker_assignments;
create policy "marker assignments managed by organizers" on public.marker_assignments
for all to authenticated
using (public.can_manage_competition(competition_id))
with check (public.can_manage_competition(competition_id));

drop policy if exists "scores visible to competition users" on public.scores;
create policy "scores visible to competition users" on public.scores
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "scores writable to competition users" on public.scores;
create policy "scores writable to competition users" on public.scores
for all to authenticated
using (public.can_access_competition(competition_id))
with check (public.can_access_competition(competition_id));

drop policy if exists "score events visible to competition users" on public.score_events;
create policy "score events visible to competition users" on public.score_events
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "score events writable to competition users" on public.score_events;
create policy "score events writable to competition users" on public.score_events
for insert to authenticated
with check (public.can_access_competition(competition_id));

drop policy if exists "signatures visible to competition users" on public.card_signatures;
create policy "signatures visible to competition users" on public.card_signatures
for select to authenticated
using (public.can_access_competition(competition_id));

drop policy if exists "signatures writable to competition users" on public.card_signatures;
create policy "signatures writable to competition users" on public.card_signatures
for insert to authenticated
with check (public.can_access_competition(competition_id));

-- 4. Temps reel scores/signatures

do $$
begin
  alter publication supabase_realtime add table public.scores;
exception
  when duplicate_object then null;
end;
$$;

do $$
begin
  alter publication supabase_realtime add table public.score_events;
exception
  when duplicate_object then null;
end;
$$;

do $$
begin
  alter publication supabase_realtime add table public.card_signatures;
exception
  when duplicate_object then null;
end;
$$;

-- 5. Comptes, profils complets et invitations email

create extension if not exists pgcrypto;

alter table public.profiles
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists country text,
  add column if not exists handicap numeric(5,1),
  add column if not exists license_number text;

alter table public.players
  add column if not exists email text,
  add column if not exists account_status text not null default 'guest',
  add column if not exists invited_by_player_id uuid references public.players(id) on delete set null,
  add column if not exists user_id uuid references auth.users(id) on delete set null;

alter table public.competition_members
  add column if not exists member_role text not null default 'player',
  add column if not exists can_admin boolean not null default false;

create table if not exists public.competition_invitations (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions(id) on delete cascade,
  player_id uuid not null references public.players(id) on delete cascade,
  invited_by_player_id uuid not null references public.players(id) on delete cascade,
  email text not null,
  token_hash text not null unique,
  status text not null default 'pending',
  sent_at timestamptz,
  opened_at timestamptz,
  accepted_at timestamptz,
  expires_at timestamptz not null default now() + interval '14 days',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint invitation_status_check check (status in ('pending', 'sent', 'opened', 'accepted', 'expired', 'revoked'))
);

create index if not exists competition_invitations_competition_idx
  on public.competition_invitations(competition_id);

create index if not exists competition_invitations_player_idx
  on public.competition_invitations(player_id);

create or replace function public.count_active_guest_invites(inviter uuid)
returns integer
language sql
stable
as $$
  select count(*)::integer
  from public.competition_invitations
  where invited_by_player_id = inviter
    and status in ('pending', 'sent', 'opened', 'accepted');
$$;

create or replace function public.prevent_invite_quota_overflow()
returns trigger
language plpgsql
as $$
begin
  if public.count_active_guest_invites(new.invited_by_player_id) >= 12 then
    raise exception 'Chaque compte nomme peut inviter 12 joueurs maximum.';
  end if;
  return new;
end;
$$;

drop trigger if exists competition_invitation_quota on public.competition_invitations;
create trigger competition_invitation_quota
before insert on public.competition_invitations
for each row
execute function public.prevent_invite_quota_overflow();

drop trigger if exists competition_invitations_set_updated_at on public.competition_invitations;
create trigger competition_invitations_set_updated_at
before update on public.competition_invitations
for each row
execute function public.set_updated_at();

alter table public.competition_invitations enable row level security;

drop policy if exists "competition invitations readable by members" on public.competition_invitations;
create policy "competition invitations readable by members" on public.competition_invitations
for select using (
  exists (
    select 1
    from public.competition_members cm
    where cm.competition_id = competition_invitations.competition_id
      and cm.user_id = auth.uid()
  )
);

drop policy if exists "competition invitations admin insert" on public.competition_invitations;
create policy "competition invitations admin insert" on public.competition_invitations
for insert with check (
  exists (
    select 1
    from public.competition_members cm
    where cm.competition_id = competition_invitations.competition_id
      and cm.user_id = auth.uid()
      and (cm.can_admin = true or cm.member_role in ('owner', 'organizer'))
  )
);
