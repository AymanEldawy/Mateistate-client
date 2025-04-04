create table
  public.villa (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    complex_name text not null,
    villa_no text not null,
    emirate text null,
    area text null,
    suburb text null,
    street text null,
    doc_type text null,
    doc_no text null,
    doc_date date null,
    piece_no text null,
    basin_no text null,
    water_meter integer null,
    electricity_meter integer null,
    owner_account_id uuid not null,
    note text null,
    number bigint generated by default as identity,
    tenant_id uuid null,



    villa_account_id uuid null,
    cost_center_id uuid null,
    account_bank_villa_id uuid null,
    cash_account_id uuid null,
    insurance_account_id uuid null,
    lessor_id uuid null,

    assets_id uuid null,
    value double precision null,
    note text null,

     wall text null,
    wall_state text null,
    lighting_count integer null,
    parking_count integer null,
    parking_area text null,
    parking_shaded text null,
    pool_count integer null,
    pool_state text null,
    pool_system text null,
    play_ground_count integer null,
    play_ground_area text null,
    garden_count integer null,
    garden_area text null,
    garden_state text null,

    floor_count integer null,
    balcony_count integer null,
    room_count integer null,
    service_room_count integer null,
    other_room_count integer null,
    bath_room_count integer null,
    stairs_internal text null,
    room_state text null,
    land_area text null,
    land_area_building text null,
    area_unit text null,
    finishing_state text null,
    security_system text null,
    security_type smallint null,

     constraint villa_accounts_account_bank_villa_id_fkey foreign key (account_bank_villa_id) references account (id) on delete cascade,
    constraint villa_accounts_cash_account_id_fkey foreign key (cash_account_id) references account (id) on delete cascade,
    constraint villa_accounts_cost_center_id_fkey foreign key (cost_center_id) references cost_center (id) on delete cascade,
    constraint villa_accounts_insurance_account_id_fkey foreign key (insurance_account_id) references account (id),
    constraint villa_accounts_lessor_id_fkey foreign key (lessor_id) references lessor (id) on delete cascade,
    constraint villa_accounts_villa_account_id_fkey foreign key (villa_account_id) references account (id) on delete cascade,





    constraint villa_pkey primary key (id),
    constraint fk_villa_tenant_id foreign key (tenant_id) references tenants (id) on delete cascade,
    constraint villa_owner_account_id_fkey foreign key (owner_account_id) references account (id) on delete cascade
  ) tablespace pg_default;