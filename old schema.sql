-- DROP SCHEMA public;

-- CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- COMMENT ON SCHEMA public IS 'standard public schema';

-- DROP SEQUENCE public.account_number_seq;

CREATE SEQUENCE public.account_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.accounting_voucher_main_data_number_seq;

CREATE SEQUENCE public.accounting_voucher_main_data_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.accounting_voucher_pattern_code_seq;

CREATE SEQUENCE public.accounting_voucher_pattern_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.accounting_voucher_pattern_number_seq;

CREATE SEQUENCE public.accounting_voucher_pattern_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.apartment_number_seq;

CREATE SEQUENCE public.apartment_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assets_code_seq;

CREATE SEQUENCE public.assets_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assets_group_number_seq;

CREATE SEQUENCE public.assets_group_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.assets_number_seq;

CREATE SEQUENCE public.assets_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.attachments_attachment_id_seq;

CREATE SEQUENCE public.attachments_attachment_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bank_number_seq;

CREATE SEQUENCE public.bank_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.building_building_number_seq;

CREATE SEQUENCE public.building_building_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.building_number_seq;

CREATE SEQUENCE public.building_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.cheque_number_seq1;

CREATE SEQUENCE public.cheque_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.cheque_pattern_code_seq;

CREATE SEQUENCE public.cheque_pattern_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.cheque_pattern_number_seq;

CREATE SEQUENCE public.cheque_pattern_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.contract_number_seq;

CREATE SEQUENCE public.contract_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.contract_pattern_code_seq;

CREATE SEQUENCE public.contract_pattern_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.contract_pattern_number_seq;

CREATE SEQUENCE public.contract_pattern_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.cost_center_number_seq;

CREATE SEQUENCE public.cost_center_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.country_id_seq;

CREATE SEQUENCE public.country_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.country_number_seq;

CREATE SEQUENCE public.country_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.currency_number_seq;

CREATE SEQUENCE public.currency_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.entry_main_data_number_seq;

CREATE SEQUENCE public.entry_main_data_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.land_number_seq;

CREATE SEQUENCE public.land_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.lawsuit_expenses_id_seq;

CREATE SEQUENCE public.lawsuit_expenses_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.lawsuit_number_seq;

CREATE SEQUENCE public.lawsuit_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.lessor_number_seq;

CREATE SEQUENCE public.lessor_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.logs_number_seq;

CREATE SEQUENCE public.logs_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.maintenance_order_number_seq;

CREATE SEQUENCE public.maintenance_order_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.material_group_number_seq;

CREATE SEQUENCE public.material_group_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.materials_number_seq;

CREATE SEQUENCE public.materials_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.owner_number_seq;

CREATE SEQUENCE public.owner_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.parking_number_seq;

CREATE SEQUENCE public.parking_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.reservation_property_number_seq;

CREATE SEQUENCE public.reservation_property_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.seller_number_seq;

CREATE SEQUENCE public.seller_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.service_customer_request_number_seq;

CREATE SEQUENCE public.service_customer_request_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.service_number_seq;

CREATE SEQUENCE public.service_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.shop_number_seq;

CREATE SEQUENCE public.shop_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.store_code_seq;

CREATE SEQUENCE public.store_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.store_number_seq;

CREATE SEQUENCE public.store_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tenants_number_seq;

CREATE SEQUENCE public.tenants_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.user_number_seq;

CREATE SEQUENCE public.user_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.villa_number_seq;

CREATE SEQUENCE public.villa_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.voucher_main_data_number_seq;

CREATE SEQUENCE public.voucher_main_data_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.voucher_pattern_code_seq;

CREATE SEQUENCE public.voucher_pattern_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.voucher_pattern_number_seq;

CREATE SEQUENCE public.voucher_pattern_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.worker_time_number_seq;

CREATE SEQUENCE public.worker_time_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.admins definition

-- Drop table

-- DROP TABLE public.admins;

CREATE TABLE public.admins (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"name" text NOT NULL,
	email text NOT NULL,
	"password" text NOT NULL,
	phone varchar NOT NULL,
	"role" int4 NOT NULL,
	CONSTRAINT admins_pkey PRIMARY KEY (id)
);


-- public.tenants definition

-- Drop table

-- DROP TABLE public.tenants;

CREATE TABLE public.tenants (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	admin_id uuid NOT NULL,
	is_active bool NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	company_name text NOT NULL,
	emirate text NULL,
	addresse text NULL,
	license_start date NULL,
	license_expired date NOT NULL,
	total_units_count int8 NOT NULL,
	package int2 NOT NULL,
	CONSTRAINT tenants_pkey PRIMARY KEY (id),
	CONSTRAINT tenants_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.admins(id) ON DELETE CASCADE
);


-- public.assets_group definition

-- Drop table

-- DROP TABLE public.assets_group;

CREATE TABLE public.assets_group (
	created_at timestamptz NOT NULL DEFAULT now(),
	"type" int4 NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	last_name text NULL,
	note text NULL,
	parent_id uuid NULL,
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	tenant_id uuid NULL,
	CONSTRAINT assetsg_pkey PRIMARY KEY (id),
	CONSTRAINT fk_assets_group_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.attachments definition

-- Drop table

-- DROP TABLE public.attachments;

CREATE TABLE public.attachments (
	attachment_id serial4 NOT NULL,
	entity_type text NOT NULL,
	entity_id int4 NOT NULL,
	attachment_type text NOT NULL,
	file_name text NOT NULL,
	upload_timestamp timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	tenant_id uuid NULL,
	CONSTRAINT attachments_pkey PRIMARY KEY (attachment_id),
	CONSTRAINT fk_attachments_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.bank definition

-- Drop table

-- DROP TABLE public.bank;

CREATE TABLE public.bank (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"name" varchar NOT NULL,
	address text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT bank_number_key UNIQUE (number),
	CONSTRAINT bank_pkey PRIMARY KEY (id),
	CONSTRAINT fk_bank_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.category definition

-- Drop table

-- DROP TABLE public.category;

CREATE TABLE public.category (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"name" text NOT NULL,
	description text NULL,
	parent_id uuid NULL,
	image text NULL,
	tenant_id uuid NULL,
	CONSTRAINT category_pkey PRIMARY KEY (id),
	CONSTRAINT category_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT fk_category_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.category_problem definition

-- Drop table

-- DROP TABLE public.category_problem;

CREATE TABLE public.category_problem (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	description text NULL,
	category_id uuid NOT NULL,
	is_available bool NULL DEFAULT true,
	tenant_id uuid NULL,
	CONSTRAINT category_problem_pkey PRIMARY KEY (id),
	CONSTRAINT category_problem_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT fk_category_problem_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.cost_center definition

-- Drop table

-- DROP TABLE public.cost_center;

CREATE TABLE public.cost_center (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	parent_id uuid NULL,
	note text NULL,
	internal_number int8 NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT cost_center_internal_number_key UNIQUE (internal_number),
	CONSTRAINT cost_center_pkey PRIMARY KEY (id),
	CONSTRAINT fk_cost_center_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_cost_center_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.cost_center(id) ON DELETE CASCADE
);


-- public.country definition

-- Drop table

-- DROP TABLE public.country;

CREATE TABLE public.country (
	id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	created_at timestamptz NOT NULL DEFAULT now(),
	"name" varchar NOT NULL,
	code varchar NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT country_number_key UNIQUE (number),
	CONSTRAINT country_pkey PRIMARY KEY (id),
	CONSTRAINT fk_country_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.currency definition

-- Drop table

-- DROP TABLE public.currency;

CREATE TABLE public.currency (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	code varchar NOT NULL,
	rate float4 NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT currency_code_key UNIQUE (code),
	CONSTRAINT currency_name_key UNIQUE (name),
	CONSTRAINT currency_number_key UNIQUE (number),
	CONSTRAINT currency_pkey PRIMARY KEY (id),
	CONSTRAINT fk_currency_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);

-- public.entry_main_data definition

-- Drop table

-- DROP TABLE public.entry_main_data;

CREATE TABLE public.entry_main_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	currency_id uuid NULL,
	note text NULL,
	debit float4 NOT NULL DEFAULT '0'::real,
	credit float4 NOT NULL DEFAULT '0'::real,
	difference int2 NOT NULL DEFAULT '0'::smallint,
	currency_val float4 NULL,
	created_from int4 NULL,
	created_from_id uuid NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	is_deleted bool NULL,
	is_first_batch bool NULL,
	created_from_code int4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT entry_main_data_number_key UNIQUE (number),
	CONSTRAINT journal_voucher_pkey PRIMARY KEY (id),
	CONSTRAINT entry_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_entry_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.lessor definition

-- Drop table

-- DROP TABLE public.lessor;

CREATE TABLE public.lessor (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	passport numeric NULL,
	passport_expiry_date date NULL,
	id_card numeric NULL,
	lessor_card numeric NULL,
	cell_phone numeric NULL,
	address text NULL,
	nationality text NULL,
	mobile numeric NULL,
	fax text NULL,
	mailbox text NULL,
	email text NULL,
	note text NULL,
	"role" text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT lessor_full_name_key UNIQUE (name),
	CONSTRAINT lessor_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lessor_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_group definition

-- Drop table

-- DROP TABLE public.material_group;

CREATE TABLE public.material_group (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	note text NULL,
	parent_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT material_group_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_group_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT material_group_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.material_group(id) ON DELETE CASCADE
);


-- public.materials definition

-- Drop table

-- DROP TABLE public.materials;

CREATE TABLE public.materials (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	barcode varchar NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	selling_price float4 NOT NULL DEFAULT '0'::real,
	material_group_id uuid NOT NULL,
	is_available bool NULL,
	description text NULL,
	purchasing_price float4 NOT NULL,
	note text NULL,
	category_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT materials_pkey PRIMARY KEY (id),
	CONSTRAINT fk_materials_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT materials_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT materials_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT materials_material_group_id_fkey FOREIGN KEY (material_group_id) REFERENCES public.material_group(id) ON DELETE SET NULL
);


-- public.seller definition

-- Drop table

-- DROP TABLE public.seller;

CREATE TABLE public.seller (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"name" text NOT NULL,
	nationality text NULL,
	id_card numeric NULL,
	passport numeric NULL,
	work_card_number numeric NULL,
	mobile varchar NULL,
	"cellPhone" varchar NULL,
	fax text NULL,
	mailbox text NULL,
	email text NULL,
	address text NULL,
	minimum_commission float4 NOT NULL,
	maximum_discount float4 NOT NULL,
	"statement" text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT seller_full_name_key UNIQUE (name),
	CONSTRAINT seller_pkey PRIMARY KEY (id),
	CONSTRAINT fk_seller_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.store definition

-- Drop table

-- DROP TABLE public.store;

CREATE TABLE public.store (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"type" int4 NOT NULL,
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	last_name text NULL,
	address text NULL,
	warehouseman text NULL,
	note text NULL,
	parent_id uuid NULL,
	store_final_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT store_pkey PRIMARY KEY (id),
	CONSTRAINT fk_store_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT store_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.store(id) ON DELETE CASCADE,
	CONSTRAINT store_store_final_id_fkey FOREIGN KEY (store_final_id) REFERENCES public.store(id) ON DELETE CASCADE
);


-- public.account definition

-- Drop table

-- DROP TABLE public.account;

CREATE TABLE public.account (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"type" int4 NOT NULL DEFAULT 1,
	parent_id uuid NULL,
	final_id uuid NULL,
	note text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" varchar NOT NULL,
	internal_number int8 NOT NULL,
	"level" int4 NULL,
	status text NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT account_internal_number_key UNIQUE (internal_number),
	CONSTRAINT account_name_key UNIQUE (name),
	CONSTRAINT account_number_key UNIQUE (number),
	CONSTRAINT account_pkey PRIMARY KEY (id),
	CONSTRAINT fk_account_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_account_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT public_account_final_id_fkey FOREIGN KEY (final_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_account_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.account_assembly definition

-- Drop table

-- DROP TABLE public.account_assembly;

CREATE TABLE public.account_assembly (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	account_id uuid NOT NULL,
	main_account_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT account_assembly_pkey PRIMARY KEY (id),
	CONSTRAINT fk_account_assembly_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_account_assembly_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_account_assembly_main_account_id_fkey FOREIGN KEY (main_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.account_distributive definition

-- Drop table

-- DROP TABLE public.account_distributive;

CREATE TABLE public.account_distributive (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	percentage float4 NOT NULL,
	main_account_id uuid NOT NULL,
	account_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT account_distributive_pkey PRIMARY KEY (id),
	CONSTRAINT fk_account_distributive_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_account_distributive_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_account_distributive_main_account_id_fkey FOREIGN KEY (main_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.accounting_voucher_main_data definition

-- Drop table

-- DROP TABLE public.accounting_voucher_main_data;

CREATE TABLE public.accounting_voucher_main_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	currency_id uuid NOT NULL,
	note text NULL,
	debit float4 NOT NULL DEFAULT '0'::real,
	credit float4 NOT NULL DEFAULT '0'::real,
	feedback bool NOT NULL,
	seller_id uuid NOT NULL,
	connect_with int4 NOT NULL,
	debit_amount float4 NOT NULL DEFAULT '0'::real,
	debit_total float8 NOT NULL DEFAULT '0'::double precision,
	credit_total float8 NOT NULL DEFAULT '0'::double precision,
	credit_amount float8 NOT NULL DEFAULT '0'::double precision,
	account_id uuid NOT NULL,
	sms text NULL,
	currency_val float4 NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	gen_entires bool NOT NULL DEFAULT false,
	connect_with_id uuid NULL,
	is_archived bool NULL,
	is_deleted bool NULL,
	tenant_id uuid NULL,
	CONSTRAINT accounting_voucher_main_data_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_main_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT accounting_voucher_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_accounting_voucher_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_accounting_voucher_main_data_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.seller(id)
);


-- public.accounting_voucher_pattern definition

-- Drop table

-- DROP TABLE public.accounting_voucher_pattern;

CREATE TABLE public.accounting_voucher_pattern (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	auto_transfer_entry bool NOT NULL DEFAULT false,
	move_account_cost_center bool NOT NULL DEFAULT false,
	required_cost_center bool NOT NULL DEFAULT false,
	required_statement bool NOT NULL DEFAULT false,
	default_print_folder_path text NULL,
	show_debit_field bool NOT NULL DEFAULT false,
	show_credit_field bool NOT NULL DEFAULT false,
	debit_field_label text NOT NULL DEFAULT 'debit'::text,
	credit_field_label text NOT NULL DEFAULT 'credit'::text,
	show_currency bool NOT NULL DEFAULT false,
	show_cost_center bool NOT NULL DEFAULT false,
	show_note bool NOT NULL DEFAULT false,
	odd_table_color text NULL,
	even_table_color text NULL,
	sms text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT accounting_voucher_pattern_number_key UNIQUE (number),
	CONSTRAINT accounting_voucher_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id),
	CONSTRAINT fk_accounting_voucher_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.accounting_voucher_pictures definition

-- Drop table

-- DROP TABLE public.accounting_voucher_pictures;

CREATE TABLE public.accounting_voucher_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	picture text NOT NULL,
	accounting_voucher_main_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT accounting_voucher_images_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_pictures_accounting_voucher_main_id_fkey FOREIGN KEY (accounting_voucher_main_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT fk_accounting_voucher_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets definition

-- Drop table

-- DROP TABLE public.assets;

CREATE TABLE public.assets (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_group_id uuid NOT NULL,
	"name" text NOT NULL,
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	barcode text NULL,
	note text NULL,
	is_active bool NULL DEFAULT false,
	assets_area_id uuid NULL,
	current_assets_area_id uuid NULL,
	state text NULL,
	origin text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT assets_pkey PRIMARY KEY (id),
	CONSTRAINT assets_assets_area_id_fkey FOREIGN KEY (assets_area_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT assets_assets_group_id_fkey FOREIGN KEY (assets_group_id) REFERENCES public.assets_group(id) ON DELETE CASCADE,
	CONSTRAINT assets_current_assets_area_id_fkey FOREIGN KEY (current_assets_area_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_accounts definition

-- Drop table

-- DROP TABLE public.assets_accounts;

CREATE TABLE public.assets_accounts (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	assets_account_id uuid NULL,
	expense_account_id uuid NULL,
	depreciation_account_id uuid NULL,
	"depreciation_Total_account_id" uuid NULL,
	profit_account_id uuid NULL,
	losses_account_id uuid NULL,
	evaluation_account_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_accounts_pkey PRIMARY KEY (id),
	CONSTRAINT assets_accounts_assets_account_id_fkey FOREIGN KEY (assets_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT "assets_accounts_depreciation_Total_account_id_fkey" FOREIGN KEY ("depreciation_Total_account_id") REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_depreciation_account_id_fkey FOREIGN KEY (depreciation_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_evaluation_account_id_fkey FOREIGN KEY (evaluation_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_expense_account_id_fkey FOREIGN KEY (expense_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_losses_account_id_fkey FOREIGN KEY (losses_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_accounts_profit_account_id_fkey FOREIGN KEY (profit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_accounts_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_depreciation definition

-- Drop table

-- DROP TABLE public.assets_depreciation;

CREATE TABLE public.assets_depreciation (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	depreciation_mode int4 NULL,
	is_depreciation_monthly bool NULL,
	depreciation_begin_date date NULL,
	age int8 NULL,
	depreciation_avg text NULL,
	scrap_value text NULL,
	old_year_extra int4 NULL,
	old_year_decrease int4 NULL,
	old_year_depreciation int4 NULL,
	old_year_maintenance int4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_depreciation_pkey PRIMARY KEY (id),
	CONSTRAINT assets_depreciation_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_depreciation_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_input definition

-- Drop table

-- DROP TABLE public.assets_input;

CREATE TABLE public.assets_input (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	importer text NULL,
	enter_account_id uuid NULL,
	enter_date date NULL,
	enter_value float4 NULL,
	currency_id uuid NULL,
	enter_cost_center_id uuid NULL,
	"enter_credit_Cost_center_id" uuid NULL,
	enter_note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_input_pkey PRIMARY KEY (id),
	CONSTRAINT assets_input_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT assets_input_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT assets_input_enter_account_id_fkey FOREIGN KEY (enter_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT assets_input_enter_cost_center_id_fkey FOREIGN KEY (enter_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT "assets_input_enter_credit_Cost_center_id_fkey" FOREIGN KEY ("enter_credit_Cost_center_id") REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_input_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_maintenance definition

-- Drop table

-- DROP TABLE public.assets_maintenance;

CREATE TABLE public.assets_maintenance (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	maintenance_contract text NULL,
	maintenance_begin_date date NULL,
	maintenance_end_date date NULL,
	guaranty text NULL,
	guaranty_begin_date date NULL,
	guaranty_end_date date NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_maintenance_pkey PRIMARY KEY (id),
	CONSTRAINT assets_maintenance_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_maintenance_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_sale definition

-- Drop table

-- DROP TABLE public.assets_sale;

CREATE TABLE public.assets_sale (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	is_sale bool NULL,
	sale_date date NULL,
	sale_customer text NULL,
	sales_account_id uuid NULL,
	sale_value float4 NULL,
	currency_sale_id uuid NULL,
	currency_sale_val float4 NULL,
	sale_note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_sale_pkey PRIMARY KEY (id),
	CONSTRAINT assets_sale_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT assets_sale_currency_sale_id_fkey FOREIGN KEY (currency_sale_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT assets_sale_sales_account_id_fkey FOREIGN KEY (sales_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_sale_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.assets_shipping definition

-- Drop table

-- DROP TABLE public.assets_shipping;

CREATE TABLE public.assets_shipping (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	assets_id uuid NOT NULL,
	shipping text NULL,
	shipping_no text NULL,
	shipping_date date NULL,
	arrive_date date NULL,
	arrive_place text NULL,
	import_permit text NULL,
	custom_note text NULL,
	custom_date date NULL,
	custom_expense text NULL,
	shipping_note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT assets_shipping_pkey PRIMARY KEY (id),
	CONSTRAINT assets_shipping_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT fk_assets_shipping_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.cheque_pattern definition

-- Drop table

-- DROP TABLE public.cheque_pattern;

CREATE TABLE public.cheque_pattern (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	paper_type int2 NOT NULL DEFAULT '1'::smallint,
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	gen_entries bool NULL DEFAULT false,
	auto_gen_entries bool NULL DEFAULT false,
	auto_transfer_entry bool NULL DEFAULT false,
	default_print_folder text NULL,
	deportable bool NULL DEFAULT false,
	deportable_gen_entries bool NULL DEFAULT false,
	deportable_auto_gen_entries bool NULL DEFAULT false,
	deportable_auto_transfer_entry bool NULL DEFAULT false,
	deportable_default_date int2 NULL,
	deportable_default_account_is_owner bool NULL DEFAULT false,
	deportable_default_observe_account_is_client bool NULL DEFAULT false,
	deportable_move_cost_center_debit bool NULL DEFAULT false,
	deportable_move_cost_center_credit bool NULL DEFAULT false,
	deportable_debit_account_id uuid NULL,
	deportable_credit_account_id uuid NULL,
	collection bool NULL DEFAULT false,
	collection_gen_entries bool NULL DEFAULT false,
	collection_auto_gen_entries bool NULL DEFAULT false,
	collection_auto_transfer_entry bool NULL DEFAULT false,
	collection_default_date int2 NULL,
	collection_default_account_is_building_bank bool NULL,
	collection_default_observe_account_is_client bool NULL,
	collection_move_cost_center_debit bool NULL,
	collection_move_cost_center_credit bool NULL,
	collection_credit_account_id uuid NULL,
	collection_debit_account_id uuid NULL,
	commission_type int2 NULL,
	commission_amount_from_building bool NULL DEFAULT false,
	commission_default_account_is_building_owner bool NULL DEFAULT false,
	commission_default_observe_is_revenue_account bool NULL DEFAULT false,
	commission_move_cost_center_debit bool NULL DEFAULT false,
	commission_move_cost_center_credit bool NULL DEFAULT false,
	commission_debit_account_id uuid NULL,
	commission_credit_account_id uuid NULL,
	partial_collection bool NULL DEFAULT false,
	partial_gen_entries bool NULL DEFAULT false,
	partial_auto_gen_entries bool NULL DEFAULT false,
	partial_auto_transfer_entry bool NULL DEFAULT false,
	partial_default_account_is_building_bank bool NULL DEFAULT false,
	partial_default_observe_account_is_client bool NULL DEFAULT false,
	partial_move_cost_center_debit bool NULL DEFAULT false,
	partial_move_cost_center_credit bool NULL DEFAULT false,
	partial_debit_account_id uuid NULL,
	partial_credit_account_id uuid NULL,
	endorsable bool NULL DEFAULT false,
	endorsement_gen_entries bool NULL DEFAULT false,
	endorsement_auto_gen_entries bool NULL DEFAULT false,
	endorsement_auto_transfer_entry bool NULL DEFAULT false,
	endorsement_default_date int2 NULL,
	endorsement_move_cost_center_debit bool NULL DEFAULT false,
	endorsement_move_cost_center_credit bool NULL DEFAULT false,
	endorsement_debit_account_id uuid NULL,
	endorsement_credit_account_id uuid NULL,
	returnable bool NULL DEFAULT false,
	returnable_gen_entries bool NULL DEFAULT false,
	returnable_auto_gen_entries bool NULL DEFAULT false,
	returnable_auto_transfer_entry bool NULL DEFAULT false,
	returnable_default_date int2 NULL,
	returnable_default_account_is_client bool NULL DEFAULT false,
	returnable_default_observe_account_is_building_bank bool NULL DEFAULT false,
	returnable_active_operations bool NULL DEFAULT false,
	returnable_move_cost_center_debit bool NULL DEFAULT false,
	returnable_move_cost_center_credit bool NULL DEFAULT false,
	returnable_debit_account_id uuid NULL,
	returnable_credit_account_id uuid NULL,
	return_fee_default_account_is_client bool NULL DEFAULT false,
	return_fee_debit_account_id uuid NULL,
	return_fee_credit_account_id uuid NULL,
	statement_account text NULL,
	statement_observe_account text NULL,
	statement_leaving text NULL,
	statement_endorsement text NULL,
	statement_collection text NULL,
	statement_return text NULL,
	statement_partial text NULL,
	sms text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT cheque_pattern_number_key UNIQUE (number),
	CONSTRAINT cheque_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT fk_cheque_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_collection_credit_account_id_fkey FOREIGN KEY (collection_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_collection_debit_account_id_fkey FOREIGN KEY (collection_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_commission_credit_account_id_fkey FOREIGN KEY (commission_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_commission_debit_account_id_fkey FOREIGN KEY (commission_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_deportable_credit_account_id_fkey FOREIGN KEY (deportable_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_deportable_debit_account_id_fkey FOREIGN KEY (deportable_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_endorsement_credit_account_id_fkey FOREIGN KEY (endorsement_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_endorsement_debit_account_id_fkey FOREIGN KEY (endorsement_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_partial_credit_account_id_fkey FOREIGN KEY (partial_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_partial_debit_account_id_fkey FOREIGN KEY (partial_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_return_fee_credit_account_id_fkey FOREIGN KEY (return_fee_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_return_fee_debit_account_id_fkey FOREIGN KEY (return_fee_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_returnable_credit_account_id_fkey FOREIGN KEY (returnable_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_returnable_debit_account_id_fkey FOREIGN KEY (returnable_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.contract_pattern definition

-- Drop table

-- DROP TABLE public.contract_pattern;

CREATE TABLE public.contract_pattern (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_type int2 NOT NULL,
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	list_name text NULL,
	shortcut_key text NULL DEFAULT ''::text,
	gen_entries bool NOT NULL DEFAULT false,
	auto_gen_entries bool NOT NULL DEFAULT false,
	auto_transfer_entry bool NOT NULL DEFAULT false,
	record_date_created int2 NOT NULL,
	new_contract_without_terminating bool NOT NULL DEFAULT false,
	insurance_required bool NOT NULL DEFAULT false,
	default_revenue_account_id uuid NULL,
	default_commission_from_client_account_id uuid NULL,
	default_commission_from_owner_account_id uuid NULL,
	default_contract_price_revenue_account_id uuid NULL,
	default_contract_ratification_revenue_account_id uuid NULL,
	default_fines_revenue_account_id uuid NULL,
	default_fee_revenue_account_id uuid NULL,
	default_discount_account_id uuid NULL,
	"default_commission_From_client_Percentage" float4 NULL,
	default_insurance_account_id uuid NULL,
	move_cost_center_with_revenue jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_tenant jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_insurance_revenue jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_price_revenue jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_intention_ratifying jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_other_fee jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_commission_client jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_commission_owner jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_contract_fines_terminating jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	move_cost_center_with_decisiveness_granted jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	contract_terms text NULL,
	folder_default_printing text NULL,
	folder_print_communications text NULL,
	folder_print_clearance text NULL,
	move_cost_center_with_contract_proceeds_rerminating jsonb NOT NULL DEFAULT '{"debit": false, "credit": false}'::jsonb,
	sms text NULL,
	assets_type int4 NOT NULL,
	default_fees_account_1 uuid NULL,
	default_fees_account_2 uuid NULL,
	default_fees_account_3 uuid NULL,
	default_fees_account_4 uuid NULL,
	default_fees_account_5 uuid NULL,
	default_fees_account_6 uuid NULL,
	default_fees_account_7 uuid NULL,
	default_fees_account_8 uuid NULL,
	default_fees_account_9 uuid NULL,
	default_fees_account_10 uuid NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT contract_pattern_number_key UNIQUE (number),
	CONSTRAINT contracts_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT contract_pattern_default_commission_from_client_account_id_fkey FOREIGN KEY (default_commission_from_client_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_commission_from_owner_account_id_fkey FOREIGN KEY (default_commission_from_owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_contract_price_revenue_account_id_fkey FOREIGN KEY (default_contract_price_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_contract_ratification_revenue_account_ FOREIGN KEY (default_contract_ratification_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_discount_account_id_fkey FOREIGN KEY (default_discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_fee_revenue_account_id_fkey FOREIGN KEY (default_fee_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_fees_account_10_fkey FOREIGN KEY (default_fees_account_10) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_1_fkey FOREIGN KEY (default_fees_account_1) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_2_fkey FOREIGN KEY (default_fees_account_2) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_3_fkey FOREIGN KEY (default_fees_account_3) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_4_fkey FOREIGN KEY (default_fees_account_4) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_5_fkey FOREIGN KEY (default_fees_account_5) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_6_fkey FOREIGN KEY (default_fees_account_6) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_7_fkey FOREIGN KEY (default_fees_account_7) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_8_fkey FOREIGN KEY (default_fees_account_8) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fees_account_9_fkey FOREIGN KEY (default_fees_account_9) REFERENCES public.account(id),
	CONSTRAINT contract_pattern_default_fines_revenue_account_id_fkey FOREIGN KEY (default_fines_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_insurance_account_id_fkey FOREIGN KEY (default_insurance_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_default_revenue_account_id_fkey FOREIGN KEY (default_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.entry_grid_data definition

-- Drop table

-- DROP TABLE public.entry_grid_data;

CREATE TABLE public.entry_grid_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	account_id uuid NOT NULL,
	debit float4 NULL DEFAULT '0'::real,
	credit float4 NULL DEFAULT '0'::real,
	currency_id uuid NULL,
	cost_center_id uuid NULL,
	observe_account_id uuid NULL,
	note text NULL,
	entry_main_data_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT journal_voucher_grid_pkey PRIMARY KEY (id),
	CONSTRAINT entry_grid_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT entry_grid_data_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT entry_grid_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT entry_grid_data_entry_main_data_id_fkey FOREIGN KEY (entry_main_data_id) REFERENCES public.entry_main_data(id) ON DELETE CASCADE,
	CONSTRAINT entry_grid_data_observe_account_id_fkey FOREIGN KEY (observe_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_entry_grid_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.lawsuit_expenses definition

-- Drop table

-- DROP TABLE public.lawsuit_expenses;

CREATE TABLE public.lawsuit_expenses (
	id int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	created_at timestamptz NOT NULL DEFAULT now(),
	registration_date date NOT NULL,
	recovered_from_client bool NULL,
	receipt_number int8 NULL,
	receipt_date date NULL,
	receipt_value float4 NOT NULL,
	issuing_entity text NULL,
	receipt_statement text NULL,
	statement_unification bool NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	debit_cost_center_id uuid NULL,
	credit_cost_center_id uuid NULL,
	debit_statement text NULL,
	credit_statement text NULL,
	gen_entries bool NULL,
	"user" text NULL,
	refunded_from_customer bool NULL,
	"statement" text NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_expenses_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_expenses_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_expenses_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_expenses_credit_cost_center_id_fkey FOREIGN KEY (credit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_expenses_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT public_lawsuit_expenses_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_expenses_debit_cost_center_id_fkey FOREIGN KEY (debit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE
);


-- public.lawsuit_expenses_pictures definition

-- Drop table

-- DROP TABLE public.lawsuit_expenses_pictures;

CREATE TABLE public.lawsuit_expenses_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	picture text NOT NULL,
	lawsuit_expenses_id int8 NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_expenses_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_expenses_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_expenses_pictures_lawsuit_expenses_id_fkey FOREIGN KEY (lawsuit_expenses_id) REFERENCES public.lawsuit_expenses(id) ON DELETE CASCADE
);


-- public.logs definition

-- Drop table

-- DROP TABLE public.logs;

CREATE TABLE public.logs (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	seller_id uuid NOT NULL,
	note text NOT NULL,
	operation text NOT NULL,
	table_name text NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT logs_pkey PRIMARY KEY (id),
	CONSTRAINT fk_logs_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT logs_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.seller(id) ON DELETE CASCADE
);


-- public.maintenance_order definition

-- Drop table

-- DROP TABLE public.maintenance_order;

CREATE TABLE public.maintenance_order (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"type" int2 NOT NULL,
	maintenance_order_no text NULL,
	complaint_id uuid NULL,
	maintenance_worker_id uuid NULL,
	work_kind varchar NULL,
	start_date date NULL,
	end_expected_date date NULL,
	close_date date NULL,
	order_state varchar NULL,
	reason_not_realized varchar NULL,
	convert_to varchar NULL,
	convert_note varchar NULL,
	realized bool NULL,
	mat varchar NULL,
	reason varchar NULL,
	repetition int4 NULL,
	delay int4 NULL,
	delay_reason varchar NULL,
	create_entry bool NULL,
	entry_date date NULL,
	entry_value float4 NULL,
	entry_currency_id uuid NULL,
	entry_currency_val float4 NULL,
	debit_account_id uuid NULL,
	credit_account_id uuid NULL,
	debit_cost_center_id uuid NULL,
	credit_cost_center_id uuid NULL,
	entry_note text NULL,
	note2 text NULL,
	tenant_id uuid NULL,
	CONSTRAINT maintenance_order_pkey PRIMARY KEY (id),
	CONSTRAINT fk_maintenance_order_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT maintenance_order_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT maintenance_order_credit_cost_center_id_fkey FOREIGN KEY (credit_cost_center_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT maintenance_order_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT maintenance_order_debit_cost_center_id_fkey FOREIGN KEY (debit_cost_center_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT maintenance_order_entry_currency_id_fkey FOREIGN KEY (entry_currency_id) REFERENCES public.currency(id) ON DELETE CASCADE
);


-- public."owner" definition

-- Drop table

-- DROP TABLE public."owner";

CREATE TABLE public."owner" (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	id_card text NULL,
	phone text NULL,
	cell_phone text NULL,
	fax text NULL,
	mailbox text NULL,
	email text NULL,
	address text NULL,
	nationality text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	account_id uuid NOT NULL,
	"name" text NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT owner_name_key UNIQUE (name),
	CONSTRAINT owner_pkey PRIMARY KEY (id),
	CONSTRAINT fk_owner_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT owner_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	created_at timestamptz NOT NULL DEFAULT now(),
	card_type int4 NOT NULL DEFAULT 1,
	date_of_birth date NULL,
	passport_number text NULL,
	passport_expiry date NULL,
	national_id int8 NULL,
	national_id_expiry date NULL,
	address text NULL,
	user_type int4 NULL,
	commercial_register text NULL,
	barcode numeric NULL,
	profession numeric NULL,
	work_phone varchar NULL,
	phone varchar NOT NULL,
	fax text NULL,
	mailbox text NULL,
	email text NULL,
	sponsor int4 NULL,
	sponsor_data text NULL,
	"statement" text NULL,
	account_id uuid NULL,
	insurance_account_id uuid NULL,
	bank_id uuid NULL,
	bank_account text NULL,
	files json NULL,
	nationality text NULL,
	"name" text NOT NULL,
	trn_number int4 NULL,
	"password" text NULL,
	avatar text NULL,
	"token" text NULL,
	is_verified bool NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT user_name_key UNIQUE (name),
	CONSTRAINT user_pkey PRIMARY KEY (id),
	CONSTRAINT user_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT user_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id),
	CONSTRAINT user_insurance_account_id_fkey FOREIGN KEY (insurance_account_id) REFERENCES public.account(id),
	CONSTRAINT user_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.villa definition

-- Drop table

-- DROP TABLE public.villa;

CREATE TABLE public.villa (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	complex_name text NOT NULL,
	villa_no text NOT NULL,
	emirate text NULL,
	area text NULL,
	suburb text NULL,
	street text NULL,
	doc_type text NULL,
	doc_no text NULL,
	doc_date date NULL,
	piece_no text NULL,
	basin_no text NULL,
	water_meter int4 NULL,
	electricity_meter int4 NULL,
	customer_owner_id uuid NULL,
	note text NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT villa_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_customer_owner_id_fkey FOREIGN KEY (customer_owner_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.villa_accounts definition

-- Drop table

-- DROP TABLE public.villa_accounts;

CREATE TABLE public.villa_accounts (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	villa_account_id uuid NULL,
	cost_center_id uuid NULL,
	account_bank_villa_id uuid NULL,
	cash_account_id uuid NULL,
	insurance_account_id uuid NULL,
	lessor_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_accounts_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_accounts_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_account_bank_villa_id_fkey FOREIGN KEY (account_bank_villa_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_cash_account_id_fkey FOREIGN KEY (cash_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_insurance_account_id_fkey FOREIGN KEY (insurance_account_id) REFERENCES public.account(id),
	CONSTRAINT villa_accounts_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_villa_account_id_fkey FOREIGN KEY (villa_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa_accounts_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_assets definition

-- Drop table

-- DROP TABLE public.villa_assets;

CREATE TABLE public.villa_assets (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	assets_id uuid NULL,
	value float8 NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_assets_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_assets_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_assets_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_exterior_details definition

-- Drop table

-- DROP TABLE public.villa_exterior_details;

CREATE TABLE public.villa_exterior_details (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	wall text NULL,
	wall_state text NULL,
	lighting_count int4 NULL,
	parking_count int4 NULL,
	parking_area text NULL,
	parking_shaded text NULL,
	pool_count int4 NULL,
	pool_state text NULL,
	pool_system text NULL,
	play_ground_count int4 NULL,
	play_ground_area text NULL,
	garden_count int4 NULL,
	garden_area text NULL,
	garden_state text NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_exterior_details_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_exterior_details_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_exterior_details_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_interior_details definition

-- Drop table

-- DROP TABLE public.villa_interior_details;

CREATE TABLE public.villa_interior_details (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	floor_count int4 NULL,
	balcony_count int4 NULL,
	room_count int4 NULL,
	service_room_count int4 NULL,
	other_room_count int4 NULL,
	bath_room_count int4 NULL,
	stairs_internal text NULL,
	room_state text NULL,
	land_area text NULL,
	land_area_building text NULL,
	area_unit text NULL,
	finishing_state text NULL,
	security_system text NULL,
	security_type int2 NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_interior_details_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_interior_details_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_interior_details_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_pictures definition

-- Drop table

-- DROP TABLE public.villa_pictures;

CREATE TABLE public.villa_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	picture text NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_pictures_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_rental_price definition

-- Drop table

-- DROP TABLE public.villa_rental_price;

CREATE TABLE public.villa_rental_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	villa_id uuid NOT NULL,
	"date" date NULL,
	price float8 NULL,
	currency_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_rent_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_rent_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT villa_rent_price_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_selling_price definition

-- Drop table

-- DROP TABLE public.villa_selling_price;

CREATE TABLE public.villa_selling_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	villa_id uuid NOT NULL,
	"date" date NULL,
	price float8 NULL,
	currency_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT villa_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT villa_selling_price_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.voucher_main_data definition

-- Drop table

-- DROP TABLE public.voucher_main_data;

CREATE TABLE public.voucher_main_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	currency_id uuid NULL,
	note text NULL,
	feedback bool NOT NULL DEFAULT false,
	seller_id uuid NULL,
	connect_with int4 NULL,
	debit_amount float4 NOT NULL DEFAULT '0'::real,
	debit_total float8 NOT NULL DEFAULT '0'::double precision,
	credit_total float8 NOT NULL DEFAULT '0'::double precision,
	credit_amount float8 NOT NULL DEFAULT '0'::double precision,
	account_id uuid NOT NULL,
	connect_with_id uuid NULL,
	currency_val float4 NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	voucher_type int4 NOT NULL,
	gen_entires bool NOT NULL DEFAULT false,
	is_deleted bool NULL DEFAULT false,
	is_first_batch bool NULL,
	tenant_id uuid NULL,
	CONSTRAINT voucher_main_data_number_key UNIQUE (number),
	CONSTRAINT voucher_main_data_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.voucher_pattern definition

-- Drop table

-- DROP TABLE public.voucher_pattern;

CREATE TABLE public.voucher_pattern (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	code int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	auto_transfer_entry bool NOT NULL DEFAULT false,
	move_account_cost_center bool NOT NULL DEFAULT false,
	required_cost_center bool NOT NULL DEFAULT false,
	required_statement bool NOT NULL DEFAULT false,
	default_print_folder_path text NULL,
	show_debit_field bool NOT NULL DEFAULT false,
	show_credit_field bool NOT NULL DEFAULT false,
	debit_field_label text NOT NULL DEFAULT 'debit'::text,
	credit_field_label text NOT NULL DEFAULT 'credit'::text,
	show_currency bool NOT NULL DEFAULT false,
	show_cost_center bool NOT NULL DEFAULT false,
	show_note bool NOT NULL DEFAULT false,
	odd_table_color text NULL,
	even_table_color text NULL,
	sms text NULL,
	gen_entries bool NOT NULL DEFAULT false,
	auto_gen_entries bool NOT NULL DEFAULT false,
	show_contract_field bool NOT NULL DEFAULT false,
	show_contract_cost_center bool NOT NULL DEFAULT false,
	generate_records bool NOT NULL DEFAULT false,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	tenant_id uuid NULL,
	CONSTRAINT voucher_pattern_number_key UNIQUE (number),
	CONSTRAINT voucher_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT voucher_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id)
);


-- public.voucher_pictures definition

-- Drop table

-- DROP TABLE public.voucher_pictures;

CREATE TABLE public.voucher_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	voucher_main_data_id uuid NOT NULL,
	picture text NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT voucher_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT voucher_pictures_voucher_main_data_id_fkey FOREIGN KEY (voucher_main_data_id) REFERENCES public.voucher_main_data(id) ON DELETE CASCADE
);


-- public.accounting_voucher_grid_data definition

-- Drop table

-- DROP TABLE public.accounting_voucher_grid_data;

CREATE TABLE public.accounting_voucher_grid_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	account_id uuid NULL,
	debit float4 NULL DEFAULT '0'::real,
	credit float4 NULL DEFAULT '0'::real,
	currency_id uuid NOT NULL,
	cost_center_id uuid NULL,
	voucher_main_data_id uuid NOT NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT accounting_voucher_grid_data_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_grid_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT accounting_voucher_grid_data_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT accounting_voucher_grid_data_voucher_main_data_id_fkey FOREIGN KEY (voucher_main_data_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT fk_accounting_voucher_grid_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.building definition

-- Drop table

-- DROP TABLE public.building;

CREATE TABLE public.building (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	emirate text NULL,
	suburb text NULL,
	area text NULL,
	street text NULL,
	building_number int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	part_number text NULL,
	basin_number text NULL,
	bond_number text NULL,
	bond_type text NULL,
	bond_date date NULL,
	owner_id uuid NULL,
	display bool NULL,
	"statement" text NULL,
	lessor_id uuid NULL,
	bank_id uuid NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	purchase_date date NULL,
	amount float8 NULL,
	gen_entries bool NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	apartment_count int4 NULL,
	penthouse_count int4 NULL,
	parking_count int4 NULL,
	mezzanine_count int4 NULL,
	office_count int4 NULL,
	warehouse_count int4 NULL,
	service_apartments int4 NULL,
	drivers_apartments int4 NULL,
	store_count int4 NULL,
	apartment_floor int4 NULL,
	penthouse_floor int4 NULL,
	parking_floor int4 NULL,
	mezzanine_floor int4 NULL,
	office_floor int4 NULL,
	underground_parking int4 NULL,
	created_at timestamptz NULL DEFAULT now(),
	building_account_id uuid NULL,
	main_cost_center_id uuid NULL,
	create_into_account bool NULL DEFAULT true,
	create_into_cost_center bool NULL DEFAULT true,
	create_into_account_id uuid NULL,
	create_into_cost_center_id uuid NULL,
	building_bank_account_id uuid NULL,
	building_cash_account_id uuid NULL,
	building_deposit_account_id uuid NULL,
	building_cheque_account_id uuid NULL,
	vat_account_id uuid NULL,
	deferred_vat_account_id uuid NULL,
	owner_balance uuid NULL,
	owner_tax_account_id uuid NULL,
	commission_expense_account_id uuid NULL,
	realestate_company_account_id uuid NULL,
	customers_main_account_id uuid NULL,
	shop_count int4 NULL,
	building_insurance_account_id uuid NULL,
	building_discount_account_id uuid NULL,
	city text NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_name_key UNIQUE (name),
	CONSTRAINT property_pkey PRIMARY KEY (id),
	CONSTRAINT building_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id),
	CONSTRAINT building_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT building_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id),
	CONSTRAINT building_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public."owner"(id),
	CONSTRAINT fk_building_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_building_building_account_id_fkey FOREIGN KEY (building_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_building_bank_account_id_fkey FOREIGN KEY (building_bank_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_building_cash_account_id_fkey FOREIGN KEY (building_cash_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_building_cheque_account_id_fkey FOREIGN KEY (building_cheque_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_building_deposit_account_id_fkey FOREIGN KEY (building_deposit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_commission_expense_account_id_fkey FOREIGN KEY (commission_expense_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_create_into_account_id_fkey FOREIGN KEY (create_into_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_create_into_cost_center_id_fkey FOREIGN KEY (create_into_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_building_customers_main_account_id_fkey FOREIGN KEY (customers_main_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_deferred_vat_account_id_fkey FOREIGN KEY (deferred_vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_discount_account_id_fkey FOREIGN KEY (building_discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_insurance_account_id_fkey FOREIGN KEY (building_insurance_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_building_owner_balance_fkey FOREIGN KEY (owner_balance) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_owner_tax_account_id_fkey FOREIGN KEY (owner_tax_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_realestate_company_account_id_fkey FOREIGN KEY (realestate_company_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_vat_account_id_fkey FOREIGN KEY (vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.building_buying definition

-- Drop table

-- DROP TABLE public.building_buying;

CREATE TABLE public.building_buying (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	amount float8 NULL,
	gen_entries bool NULL DEFAULT false,
	currency_id uuid NULL,
	building_id uuid NOT NULL,
	supplier_account_id uuid NULL,
	"statement" text NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_buying_building_id_key UNIQUE (building_id),
	CONSTRAINT building_buying_pkey PRIMARY KEY (id),
	CONSTRAINT building_buying_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT building_buying_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT building_buying_supplier_account_id_fkey FOREIGN KEY (supplier_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_building_buying_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.building_editorial_entry definition

-- Drop table

-- DROP TABLE public.building_editorial_entry;

CREATE TABLE public.building_editorial_entry (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	building_id uuid NOT NULL,
	building_cost float8 NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_editorial_entry_building_id_key UNIQUE (building_id),
	CONSTRAINT building_editorial_entry_pkey PRIMARY KEY (id),
	CONSTRAINT building_editorial_entry_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT fk_building_editorial_entry_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.building_investment definition

-- Drop table

-- DROP TABLE public.building_investment;

CREATE TABLE public.building_investment (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	owner_id uuid NULL,
	investment_start_date date NULL,
	investment_end_date date NULL,
	terminating_tenancies bool NULL,
	investment_value float4 NULL,
	gen_entries bool NULL DEFAULT false,
	currency_id uuid NULL,
	currency_val float4 NULL,
	tenants uuid NULL,
	renters_insurance uuid NULL,
	building_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_investment_building_id_key UNIQUE (building_id),
	CONSTRAINT investment_pkey PRIMARY KEY (id),
	CONSTRAINT building_investment_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT building_investment_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT building_investment_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.account(id),
	CONSTRAINT building_investment_renters_insurance_fkey FOREIGN KEY (renters_insurance) REFERENCES public.account(id),
	CONSTRAINT building_investment_tenants_fkey FOREIGN KEY (tenants) REFERENCES public.account(id),
	CONSTRAINT fk_building_investment_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.building_pictures definition

-- Drop table

-- DROP TABLE public.building_pictures;

CREATE TABLE public.building_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NULL DEFAULT now(),
	picture text NULL,
	building_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_building_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_building_pictures_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE
);


-- public.building_real_estate_development definition

-- Drop table

-- DROP TABLE public.building_real_estate_development;

CREATE TABLE public.building_real_estate_development (
	id uuid NOT NULL,
	account_id uuid NULL,
	building_receipt bool NULL,
	received_date date NULL,
	amount float4 NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	note text NULL,
	building_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_real_estate_development_building_id_key UNIQUE (building_id),
	CONSTRAINT project_pkey PRIMARY KEY (id),
	CONSTRAINT building_real_estate_development_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id),
	CONSTRAINT building_real_estate_development_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT building_real_estate_development_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT fk_building_real_estate_development_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.building_real_estate_management definition

-- Drop table

-- DROP TABLE public.building_real_estate_management;

CREATE TABLE public.building_real_estate_management (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	owner_account_id uuid NULL,
	commission_rate float4 NULL,
	revenue_id uuid NULL,
	building_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT building_real_estate_management_building_id_key UNIQUE (building_id),
	CONSTRAINT management_pkey PRIMARY KEY (id),
	CONSTRAINT building_real_estate_management_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT fk_building_real_estate_management_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_building_real_estate_management_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_building_real_estate_management_revenue_id_fkey FOREIGN KEY (revenue_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.land definition

-- Drop table

-- DROP TABLE public.land;

CREATE TABLE public.land (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"type" int2 NOT NULL,
	ban bool NOT NULL DEFAULT false,
	land_no text NULL,
	"name" varchar NULL,
	last_name varchar NULL,
	customer_id uuid NULL,
	"date" date NULL,
	city varchar NULL,
	region varchar NULL,
	"space" varchar NULL,
	area float4 NULL,
	area_unit varchar NULL,
	price float4 NULL,
	license_no varchar NULL,
	license varchar NULL,
	license_date date NULL,
	details text NULL,
	land_type int4 NULL,
	side varchar NULL,
	street_name varchar NULL,
	street_count int4 NULL,
	buildble bool NULL,
	landowner int4 NULL,
	begin_land_value float4 NULL,
	currency_begin_land_id uuid NULL,
	currency_val_begin_land float4 NULL,
	begin_land_cost_center_id uuid NULL,
	currency_purchase_id uuid NULL,
	currency_val_purchase float4 NULL,
	purchase_note text NULL,
	account_id uuid NULL,
	cuowner_id uuid NULL,
	cost_center_id uuid NULL,
	bank_account_id uuid NULL,
	commission_percent float4 NULL,
	account_comm_income_id uuid NULL,
	used_end_date date NULL,
	customer_owner_id uuid NULL,
	owner_account_id uuid NULL,
	identity_value float4 NULL,
	currency_identity_id uuid NULL,
	currency_valid_entity float4 NULL,
	identity_begin_date date NULL,
	identity_end_date date NULL,
	create_entry_investment bool NULL,
	identity_entry_id uuid NULL,
	identity_note text NULL,
	ltn_land_type text NULL,
	ltn_city varchar NULL,
	ltn_region varchar NULL,
	ltn_space varchar NULL,
	ltn_license varchar NULL,
	ltn_side varchar NULL,
	rent float4 NULL,
	rent_currency_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT land_pkey PRIMARY KEY (id),
	CONSTRAINT fk_land_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT land_account_comm_income_id_fkey FOREIGN KEY (account_comm_income_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_bank_account_id_fkey FOREIGN KEY (bank_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_begin_land_cost_center_id_fkey FOREIGN KEY (begin_land_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT land_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT land_cuowner_id_fkey FOREIGN KEY (cuowner_id) REFERENCES public."owner"(id),
	CONSTRAINT land_currency_begin_land_id_fkey FOREIGN KEY (currency_begin_land_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT land_currency_identity_id_fkey FOREIGN KEY (currency_identity_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT land_currency_purchase_id_fkey FOREIGN KEY (currency_purchase_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT land_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_customer_owner_id_fkey FOREIGN KEY (customer_owner_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_identity_entry_id_fkey FOREIGN KEY (identity_entry_id) REFERENCES public.accounting_voucher_pattern(id),
	CONSTRAINT land_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public."owner"(id) ON DELETE CASCADE,
	CONSTRAINT land_rent_currency_id_fkey FOREIGN KEY (rent_currency_id) REFERENCES public.currency(id) ON DELETE CASCADE
);


-- public.notification definition

-- Drop table

-- DROP TABLE public.notification;

CREATE TABLE public.notification (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	title text NULL,
	description text NOT NULL,
	url text NULL,
	status bool NULL DEFAULT false,
	user_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT notification_pkey PRIMARY KEY (id),
	CONSTRAINT fk_notification_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT notification_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.property_values definition

-- Drop table

-- DROP TABLE public.property_values;

CREATE TABLE public.property_values (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	area numeric NULL,
	area_unit varchar NULL DEFAULT ''::character varying,
	"view" text NULL,
	property_type int2 NULL,
	room_count numeric NOT NULL,
	hex varchar NOT NULL,
	row_index int8 NOT NULL,
	description text NULL,
	building_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT property_values_pkey PRIMARY KEY (id),
	CONSTRAINT fk_property_values_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_property_values_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE
);


-- public.reservation_property definition

-- Drop table

-- DROP TABLE public.reservation_property;

CREATE TABLE public.reservation_property (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	account_id uuid NOT NULL,
	property_type int4 NOT NULL,
	building_id uuid NOT NULL,
	property_id uuid NOT NULL,
	book_date date NOT NULL,
	end_book_date date NULL,
	note text NULL,
	has_payment bool NULL,
	reservation_expired bool NULL,
	payment_amount float4 NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	credit_account_id uuid NULL,
	debit_account_id uuid NULL,
	credit_cost_center_id uuid NULL,
	debit_cost_center_id uuid NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	payment_method int4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT reservation_property_number_key UNIQUE (number),
	CONSTRAINT reservation_property_pkey PRIMARY KEY (id),
	CONSTRAINT fk_reservation_property_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_credit_cost_center_fkey FOREIGN KEY (credit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_debit_cost_center_fkey FOREIGN KEY (debit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE
);


-- public.service definition

-- Drop table

-- DROP TABLE public.service;

CREATE TABLE public.service (
	id uuid NOT NULL,
	"number" serial4 NOT NULL,
	created_at timestamp NOT NULL,
	start_date timestamp NOT NULL,
	end_date timestamp NULL,
	building_id uuid NOT NULL,
	unit_id uuid NOT NULL,
	unit_type int4 NOT NULL,
	is_default bool NOT NULL,
	is_paid bool NOT NULL,
	total float8 NOT NULL,
	code int4 NOT NULL,
	status int4 NOT NULL,
	supervisor_user_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT service_code_check CHECK ((code = ANY (ARRAY[1, 2]))),
	CONSTRAINT service_pkey PRIMARY KEY (id),
	CONSTRAINT service_status_check CHECK ((status = ANY (ARRAY[1, 2, 3, 4]))),
	CONSTRAINT service_unit_type_check CHECK ((unit_type = ANY (ARRAY[1, 2, 3, 4, 5]))),
	CONSTRAINT fk_service_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id),
	CONSTRAINT service_supervisor_user_id_fkey FOREIGN KEY (supervisor_user_id) REFERENCES public."user"(id)
);


-- public.service_lack_reason definition

-- Drop table

-- DROP TABLE public.service_lack_reason;

CREATE TABLE public.service_lack_reason (
	id uuid NOT NULL,
	created_at timestamp NOT NULL,
	reason text NOT NULL,
	paused_date date NOT NULL,
	continue_date date NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT service_lack_reason_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_lack_reason_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_lack_reason_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id)
);


-- public.service_material definition

-- Drop table

-- DROP TABLE public.service_material;

CREATE TABLE public.service_material (
	id uuid NOT NULL,
	created_at timestamp NOT NULL,
	service_id uuid NOT NULL,
	material_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT service_material_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_material_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_material_material_id_fkey FOREIGN KEY (material_id) REFERENCES public.materials(id),
	CONSTRAINT service_material_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id)
);


-- public.service_worker definition

-- Drop table

-- DROP TABLE public.service_worker;

CREATE TABLE public.service_worker (
	id uuid NOT NULL,
	title text NOT NULL,
	description text NULL,
	category_id uuid NOT NULL,
	worker_user_id uuid NOT NULL,
	status int4 NOT NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT service_worker_pkey PRIMARY KEY (id),
	CONSTRAINT service_worker_status_check CHECK ((status = ANY (ARRAY[1, 2, 3]))),
	CONSTRAINT fk_service_worker_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_worker_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id),
	CONSTRAINT service_worker_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT service_worker_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id)
);


-- public.shop definition

-- Drop table

-- DROP TABLE public.shop;

CREATE TABLE public.shop (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	building_id uuid NOT NULL,
	shop_no text NOT NULL,
	description text NULL,
	x_index int8 NOT NULL,
	y_index int8 NOT NULL,
	cost_center_id uuid NULL,
	"class" text NULL,
	area numeric NULL,
	area_unit text NULL,
	"view" text NULL,
	license1 text NULL,
	license2 text NULL,
	unified_num text NULL,
	has_lawsuit bool NULL DEFAULT false,
	customer_id uuid NULL,
	customer_owner_id uuid NULL,
	water_meter int4 NULL,
	electricity_meter int4 NULL,
	bond_type text NULL,
	bond_no text NULL,
	bond_date date NULL,
	note text NULL,
	property_values_id uuid NOT NULL,
	hex varchar NOT NULL,
	floort_no int4 NULL,
	property_type int4 NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	row_index int8 NULL,
	asset_hash varchar NOT NULL,
	main_cost_center_id uuid NULL,
	shop_kind int4 NULL,
	internal_number int8 NULL,
	"blocked" bool NULL,
	floor_no int8 NULL,
	tenant_id uuid NULL,
	CONSTRAINT shop_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT shop_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT shop_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT shop_customer_owner_id_fkey FOREIGN KEY (customer_owner_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT shop_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT shop_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.shop_fixed_assets definition

-- Drop table

-- DROP TABLE public.shop_fixed_assets;

CREATE TABLE public.shop_fixed_assets (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	shop_id uuid NOT NULL,
	assets_id uuid NULL,
	value float4 NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT shop_fixed_assets_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_fixed_assets_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_fixed_assets_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.shop_pictures definition

-- Drop table

-- DROP TABLE public.shop_pictures;

CREATE TABLE public.shop_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	shop_id uuid NOT NULL,
	picture text NULL,
	tenant_id uuid NULL,
	CONSTRAINT shop_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_pictures_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.shop_rental_price definition

-- Drop table

-- DROP TABLE public.shop_rental_price;

CREATE TABLE public.shop_rental_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	shop_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	cost_price float4 NULL,
	cost_currency_id uuid NULL,
	rent float4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT shop_rent_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_rent_price_cost_currency_id_fkey FOREIGN KEY (cost_currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT shop_rent_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT shop_rent_price_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.shop_selling_price definition

-- Drop table

-- DROP TABLE public.shop_selling_price;

CREATE TABLE public.shop_selling_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"date" date NOT NULL,
	shop_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT shop_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT shop_selling_price_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.voucher_grid_data definition

-- Drop table

-- DROP TABLE public.voucher_grid_data;

CREATE TABLE public.voucher_grid_data (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	account_id uuid NULL,
	debit float4 NOT NULL DEFAULT '0'::real,
	credit float4 NOT NULL DEFAULT '0'::real,
	cost_center_id uuid NULL,
	voucher_main_data_id uuid NOT NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT voucher_grid_data_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_grid_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_grid_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_grid_data_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT voucher_grid_data_voucher_main_data_id_fkey FOREIGN KEY (voucher_main_data_id) REFERENCES public.voucher_main_data(id) ON DELETE CASCADE
);


-- public.worker_rate definition

-- Drop table

-- DROP TABLE public.worker_rate;

CREATE TABLE public.worker_rate (
	id uuid NOT NULL,
	created_at timestamp NOT NULL,
	description text NULL,
	rating int4 NOT NULL,
	service_id uuid NOT NULL,
	customer_user_id uuid NOT NULL,
	worker_user_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT worker_rate_pkey PRIMARY KEY (id),
	CONSTRAINT worker_rate_rating_check CHECK (((rating >= 1) AND (rating <= 5))),
	CONSTRAINT fk_worker_rate_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT worker_rate_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public."user"(id),
	CONSTRAINT worker_rate_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT worker_rate_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id)
);


-- public.worker_time definition

-- Drop table

-- DROP TABLE public.worker_time;

CREATE TABLE public.worker_time (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	booking_date date NOT NULL,
	worker_user_id uuid NOT NULL,
	service_id uuid NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	CONSTRAINT worker_time_pkey PRIMARY KEY (id),
	CONSTRAINT worker_time_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id) ON DELETE CASCADE,
	CONSTRAINT worker_time_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.apartment definition

-- Drop table

-- DROP TABLE public.apartment;

CREATE TABLE public.apartment (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	building_id uuid NOT NULL,
	apartment_no varchar NULL,
	floor_no int4 NULL,
	description text NULL,
	category text NULL,
	area numeric NULL,
	area_unit varchar NULL DEFAULT ''::character varying,
	"view" text NULL,
	bathroom_count int8 NULL,
	balcony_count int8 NULL,
	has_lawsuit bool NULL DEFAULT false,
	main_cost_center_id uuid NULL,
	cost_center_id uuid NULL,
	property_type int4 NULL,
	water_meter int8 NULL,
	electricity_meter int8 NULL,
	"statement" text NULL,
	x_index int8 NOT NULL,
	y_index int8 NOT NULL,
	room_count numeric NULL,
	property_values_id uuid NOT NULL,
	hex varchar NULL,
	cost_price float8 NULL,
	amount_paid float8 NULL,
	cost_currency_id uuid NULL,
	note text NULL,
	apartment_kind int8 NOT NULL,
	row_index int8 NOT NULL,
	asset_hash varchar NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	internal_number int8 NULL,
	"blocked" bool NULL,
	"class" text NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_pkey PRIMARY KEY (id),
	CONSTRAINT fk_apartment_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_cost_currency_id_fkey FOREIGN KEY (cost_currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT public_apartment_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.apartment_pictures definition

-- Drop table

-- DROP TABLE public.apartment_pictures;

CREATE TABLE public.apartment_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	apartment_id uuid NULL,
	picture bytea NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT apartment_pictures_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT fk_apartment_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.apartment_rental_price definition

-- Drop table

-- DROP TABLE public.apartment_rental_price;

CREATE TABLE public.apartment_rental_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	apartment_id uuid NULL,
	"date" date NULL,
	price numeric NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_rental_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_apartment_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_rental_price_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_rental_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL
);


-- public.apartment_selling_price definition

-- Drop table

-- DROP TABLE public.apartment_selling_price;

CREATE TABLE public.apartment_selling_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	apartment_id uuid NULL,
	"date" date NULL,
	price numeric NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT apartment_selling_price_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT fk_apartment_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL
);


-- public.parking definition

-- Drop table

-- DROP TABLE public.parking;

CREATE TABLE public.parking (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	building_id uuid NOT NULL,
	parking_no text NOT NULL,
	floor_no int4 NULL,
	area numeric NULL,
	area_unit text NULL,
	parking_kind int2 NOT NULL,
	description text NULL,
	"view" text NULL,
	customer_id uuid NULL,
	has_lawsuit bool NULL DEFAULT false,
	cost_center_id uuid NULL,
	purchase_date date NULL,
	note text NULL,
	flat_owner_id uuid NULL,
	y_index int8 NULL,
	x_index int8 NULL,
	hex varchar NOT NULL,
	property_values_id uuid NOT NULL,
	property_type int4 NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	row_index int8 NULL,
	asset_hash varchar NOT NULL,
	main_cost_center_id uuid NULL,
	internal_number int8 NULL,
	"blocked" bool NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT parking_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT parking_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT parking_flat_owner_id_fkey FOREIGN KEY (flat_owner_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT parking_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT parking_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.parking_pictures definition

-- Drop table

-- DROP TABLE public.parking_pictures;

CREATE TABLE public.parking_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	parking_id uuid NOT NULL,
	picture text NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_pictures_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.parking_price definition

-- Drop table

-- DROP TABLE public.parking_price;

CREATE TABLE public.parking_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	parking_id uuid NOT NULL,
	date1 date NULL,
	print1 float4 NULL,
	currency1_id uuid NULL,
	date2 date NULL,
	print2 float4 NULL,
	currency2_id uuid NULL,
	cost_price float4 NULL,
	sale float4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_price_currency1_id_fkey FOREIGN KEY (currency1_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT parking_price_currency2_id_fkey FOREIGN KEY (currency2_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT parking_price_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.parking_rental_price definition

-- Drop table

-- DROP TABLE public.parking_rental_price;

CREATE TABLE public.parking_rental_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	parking_id uuid NOT NULL,
	"date" date NULL,
	price numeric NOT NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_rental_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_rental_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT public_parking_rental_price_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.parking_selling_price definition

-- Drop table

-- DROP TABLE public.parking_selling_price;

CREATE TABLE public.parking_selling_price (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"date" date NOT NULL,
	parking_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_selling_price_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.contract definition

-- Drop table

-- DROP TABLE public.contract;

CREATE TABLE public.contract (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_type int4 NOT NULL,
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	flat_type int4 NOT NULL,
	is_archived bool NULL DEFAULT false,
	is_deleted bool NULL DEFAULT false,
	status int4 NOT NULL DEFAULT 1,
	code int4 NOT NULL,
	contracts_number_prev int4 NULL,
	contracts_number_current int4 NULL,
	lawsuit bool NULL DEFAULT false,
	feedback bool NULL DEFAULT false,
	building_id uuid NULL,
	insurance_account_id uuid NULL,
	gen_entries bool NULL,
	gov_number int8 NULL,
	previous_securing float4 NULL,
	current_securing_percentage float4 NULL,
	current_securing_value float4 NULL,
	final_price float4 NOT NULL,
	discount_rate float4 NULL,
	discount_value float4 NULL,
	revenue_account_id uuid NOT NULL,
	discount_account_id uuid NULL,
	client_id uuid NOT NULL,
	paid_type int4 NOT NULL,
	contract_value float4 NOT NULL,
	apartment_id uuid NULL,
	land_id uuid NULL,
	shop_id uuid NULL,
	parking_id uuid NULL,
	lessor_id uuid NULL,
	start_duration_date date NULL,
	end_duration_date date NULL,
	contract_duration int4 NULL,
	cost_center_id uuid NULL,
	description text NULL,
	issue_date date NULL,
	internal_number int8 NOT NULL,
	note text NULL,
	property_delivery_date date NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_pkey PRIMARY KEY (id),
	CONSTRAINT fk_contract_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_discount_account_id_fkey FOREIGN KEY (discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_revenue_account_id_fkey FOREIGN KEY (revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE RESTRICT
);


-- public.contract_commission definition

-- Drop table

-- DROP TABLE public.contract_commission;

CREATE TABLE public.contract_commission (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_id uuid NOT NULL,
	commission_percentage float4 NULL,
	commission_value float4 NULL,
	commission_account_id uuid NULL,
	commission_note text NULL,
	commission_from_owner_percentage float4 NULL,
	"commission_from_owner_value double precision null," float4 NULL,
	commission_from_owner_account_id uuid NULL,
	commission_from_owner_note text NULL,
	commission_from_lessor_percentage float4 NULL,
	commission_from_lessor_value float4 NULL,
	commission_from_lessor_account_id uuid NULL,
	commission_from_lessor_note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_commission_pkey PRIMARY KEY (id),
	CONSTRAINT contract_commission_commission_account_id_fkey FOREIGN KEY (commission_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_commission_commission_from_owner_account_id_fkey FOREIGN KEY (commission_from_owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_commission_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_commission_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_cycle definition

-- Drop table

-- DROP TABLE public.contract_cycle;

CREATE TABLE public.contract_cycle (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	contract_id uuid NOT NULL,
	contract_documented bool NULL,
	contract_certifying bool NULL,
	contract_certifying_body text NULL,
	contract_received bool NULL,
	contract_delivered bool NULL,
	contract_signed bool NULL,
	municipal_license_num int4 NULL,
	municipal_license_from date NULL,
	municipal_license_to date NULL,
	license_num int4 NULL,
	license_from date NULL,
	license_to date NULL,
	civil_license_num int4 NULL,
	civil_license_from date NULL,
	civil_license_to date NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_cycle_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_cycle_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_fee definition

-- Drop table

-- DROP TABLE public.contract_fee;

CREATE TABLE public.contract_fee (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"number" numeric NULL,
	entrynumber int8 NULL,
	contract_id uuid NOT NULL,
	"date" timestamp NULL,
	account_id uuid NULL,
	value float8 NULL,
	create_entry bool NULL DEFAULT true,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_fee_pkey PRIMARY KEY (id),
	CONSTRAINT contract_fee_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id),
	CONSTRAINT contract_fee_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_fee_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_fixed_assets definition

-- Drop table

-- DROP TABLE public.contract_fixed_assets;

CREATE TABLE public.contract_fixed_assets (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_id uuid NOT NULL,
	assets_id uuid NULL,
	value float4 NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_fixed_assets_pkey PRIMARY KEY (id),
	CONSTRAINT contract_fixed_assets_assets_id_fkey FOREIGN KEY (assets_id) REFERENCES public.assets(id) ON DELETE CASCADE,
	CONSTRAINT contract_fixed_assets_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_fixed_assets_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_linked_parking definition

-- Drop table

-- DROP TABLE public.contract_linked_parking;

CREATE TABLE public.contract_linked_parking (
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_id uuid NOT NULL,
	building_id uuid NULL,
	account_id uuid NULL,
	main_contract_id uuid NULL,
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	tenant_id uuid NULL,
	CONSTRAINT contract_linked_parking_pkey PRIMARY KEY (id),
	CONSTRAINT contract_linked_parking_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_linked_parking_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT contract_linked_parking_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT contract_linked_parking_main_contract_id_fkey FOREIGN KEY (main_contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_linked_parking_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_other_fees definition

-- Drop table

-- DROP TABLE public.contract_other_fees;

CREATE TABLE public.contract_other_fees (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"date" timestamp NULL DEFAULT now(),
	fee_amount float4 NULL,
	account_id uuid NULL,
	notes text NULL,
	contract_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_other_fees_pkey PRIMARY KEY (id),
	CONSTRAINT contract_other_fees_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_other_fees_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_other_fees_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_pictures definition

-- Drop table

-- DROP TABLE public.contract_pictures;

CREATE TABLE public.contract_pictures (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	contract_id uuid NOT NULL,
	picture text NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_pictures_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_receipt_number definition

-- Drop table

-- DROP TABLE public.contract_receipt_number;

CREATE TABLE public.contract_receipt_number (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	contract_id uuid NOT NULL,
	receipt_number int4 NULL,
	receipt_date date NULL,
	receipt_statement text NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_receipt_number_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_receipt_number_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_termination definition

-- Drop table

-- DROP TABLE public.contract_termination;

CREATE TABLE public.contract_termination (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	termination_date date NULL,
	owner_total_amount float4 NULL DEFAULT '0'::real,
	owner_rest_amount float4 NULL,
	round_to int4 NULL,
	revenue_note text NULL,
	fines text NULL,
	fines_revenue_account_id uuid NULL,
	fine_note text NULL,
	evacuation_request bool NULL,
	evacuation_date date NULL,
	clearance_printed bool NULL,
	clearance_printed_date date NULL,
	contract_id uuid NOT NULL,
	terminated bool NOT NULL DEFAULT false,
	gen_entries bool NULL,
	revenue_account_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_termination_pkey PRIMARY KEY (id),
	CONSTRAINT contract_termination_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT contract_termination_fines_revenue_account_id_fkey FOREIGN KEY (fines_revenue_account_id) REFERENCES public.account(id),
	CONSTRAINT fk_contract_termination_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_termination_revenue_account_id_fkey FOREIGN KEY (revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.contract_terms definition

-- Drop table

-- DROP TABLE public.contract_terms;

CREATE TABLE public.contract_terms (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	contract_id uuid NOT NULL,
	contract_terms text NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_terms_pkey PRIMARY KEY (id),
	CONSTRAINT contract_terms_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_terms_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.evacuation_request definition

-- Drop table

-- DROP TABLE public.evacuation_request;

CREATE TABLE public.evacuation_request (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	description text NOT NULL,
	evacuation_date date NOT NULL,
	contract_id uuid NOT NULL,
	user_account_id uuid NOT NULL,
	approved bool NULL,
	tenant_id uuid NULL,
	CONSTRAINT evacuation_request_pkey PRIMARY KEY (id),
	CONSTRAINT evacuation_request_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT evacuation_request_user_account_id_fkey FOREIGN KEY (user_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_evacuation_request_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.installment definition

-- Drop table

-- DROP TABLE public.installment;

CREATE TABLE public.installment (
	contract_id uuid NOT NULL,
	total_amount float4 NOT NULL,
	gen_entries_type int2 NOT NULL DEFAULT '1'::smallint,
	first_batch float4 NOT NULL,
	payment_date date NULL,
	currency_id uuid NOT NULL,
	currency_val float4 NULL,
	rest_amount float4 NOT NULL,
	bank_id uuid NULL,
	installments_numbers float4 NOT NULL,
	each_number int4 NOT NULL,
	each_duration int2 NOT NULL,
	first_installment_date date NOT NULL,
	begin_number float4 NULL,
	beneficiary_name text NULL,
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	tenant_id uuid NULL,
	CONSTRAINT installment_contract_id_key UNIQUE (contract_id),
	CONSTRAINT installment_pkey PRIMARY KEY (id),
	CONSTRAINT fk_installment_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT installment_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id) ON DELETE CASCADE,
	CONSTRAINT installment_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT installment_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE
);


-- public.land_wallet definition

-- Drop table

-- DROP TABLE public.land_wallet;

CREATE TABLE public.land_wallet (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" text NOT NULL,
	land_id uuid NOT NULL,
	main_cost float8 NULL,
	expense float8 NULL,
	begin_date date NULL,
	sale_date date NULL,
	sale_value float8 NULL,
	contract_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT land_wallet_pkey PRIMARY KEY (id),
	CONSTRAINT fk_land_wallet_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT land_wallet_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT land_wallet_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE CASCADE
);


-- public.lawsuit definition

-- Drop table

-- DROP TABLE public.lawsuit;

CREATE TABLE public.lawsuit (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	contract_id uuid NOT NULL,
	lawsuit_no text NULL,
	opened_lawsuit_date date NULL,
	building_id uuid NULL,
	unit_id uuid NULL DEFAULT gen_random_uuid(),
	client_id uuid NULL,
	status bool NULL,
	legal_department_date date NULL,
	refrain_date date NULL,
	municipality_clearance_date date NULL,
	electricity_clearance_date date NULL,
	latest_rent_certified_contract float4 NULL,
	implementation_number int8 NULL,
	implementation_date date NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_number_key UNIQUE (number),
	CONSTRAINT lawsuit_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT lawsuit_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.lawsuit_internal_expenses definition

-- Drop table

-- DROP TABLE public.lawsuit_internal_expenses;

CREATE TABLE public.lawsuit_internal_expenses (
	created_at timestamptz NOT NULL DEFAULT now(),
	lawsuit_id uuid NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	lawyer_gen_entries bool NULL,
	lawyer_amount float4 NULL,
	lawyer_debit_account_id uuid NULL,
	lawyer_credit_account_id uuid NULL,
	lawyer_statement text NULL,
	maintenance_gen_entries bool NULL,
	maintenance_amount float4 NULL,
	maintenance_debit_account_id uuid NULL,
	maintenance_credit_account_id uuid NULL,
	maintenance_statement text NULL,
	furniture_gen_entries bool NULL,
	furniture_amount float4 NULL,
	furniture_debit_account_id uuid NULL,
	furniture_credit_account_id uuid NULL,
	furniture_statement text NULL,
	id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_internal_expenses_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_internal_expenses_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_furniture_credit_account_id_fk FOREIGN KEY (furniture_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_furniture_debit_account_id_fke FOREIGN KEY (furniture_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_lawsuit_id_fkey FOREIGN KEY (lawsuit_id) REFERENCES public.lawsuit(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_lawyer_credit_account_id_fkey FOREIGN KEY (lawyer_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_lawyer_debit_account_id_fkey FOREIGN KEY (lawyer_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_maintenance_credit_account_id_ FOREIGN KEY (maintenance_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_internal_expenses_maintenance_debit_account_id_f FOREIGN KEY (maintenance_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.lawsuit_status definition

-- Drop table

-- DROP TABLE public.lawsuit_status;

CREATE TABLE public.lawsuit_status (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"date" date NOT NULL,
	lawsuit_id uuid NOT NULL,
	status text NOT NULL,
	"statement" text NULL,
	printed bool NULL,
	"user" text NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_status_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_status_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_status_lawsuit_id_fkey FOREIGN KEY (lawsuit_id) REFERENCES public.lawsuit(id) ON DELETE CASCADE
);


-- public.lawsuit_termination definition

-- Drop table

-- DROP TABLE public.lawsuit_termination;

CREATE TABLE public.lawsuit_termination (
	implementation_suspended bool NOT NULL,
	implementation_suspended_date date NOT NULL,
	"statement" text NULL,
	lawsuit_terminated bool NULL,
	lawsuit_terminated_date date NULL,
	lawsuit_id uuid NOT NULL,
	id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT lawsuit_termination_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lawsuit_termination_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_termination_lawsuit_id_fkey FOREIGN KEY (lawsuit_id) REFERENCES public.lawsuit(id) ON DELETE CASCADE
);


-- public.parking_wallet definition

-- Drop table

-- DROP TABLE public.parking_wallet;

CREATE TABLE public.parking_wallet (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" text NOT NULL,
	contract_id uuid NOT NULL,
	building_id uuid NOT NULL,
	parking_id uuid NOT NULL,
	main_cost float8 NOT NULL,
	expense float4 NULL,
	begin_date date NULL,
	sale_date date NULL,
	sale_value float8 NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_wallet_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_wallet_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_wallet_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT parking_wallet_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id),
	CONSTRAINT parking_wallet_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.service_customer_request definition

-- Drop table

-- DROP TABLE public.service_customer_request;

CREATE TABLE public.service_customer_request (
	id uuid NOT NULL,
	"number" serial4 NOT NULL,
	contract_id uuid NOT NULL,
	payment_method int4 NOT NULL,
	customer_user_id uuid NOT NULL,
	phone text NOT NULL,
	approved bool NOT NULL,
	returned bool NOT NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT service_customer_request_payment_method_check CHECK ((payment_method = ANY (ARRAY[1, 2]))),
	CONSTRAINT service_customer_request_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_customer_request_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_customer_request_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id),
	CONSTRAINT service_customer_request_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public."user"(id),
	CONSTRAINT service_customer_request_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id)
);


-- public.termination_fines_grid definition

-- Drop table

-- DROP TABLE public.termination_fines_grid;

CREATE TABLE public.termination_fines_grid (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	contract_termination_fines_id uuid NULL,
	contract_id uuid NULL,
	account_id uuid NULL,
	fee_amount float4 NULL,
	notes text NULL,
	tenant_id uuid NULL,
	CONSTRAINT termination_fines_grid_pkey PRIMARY KEY (id),
	CONSTRAINT fk_termination_fines_grid_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_contract_termination_fines_id_fkey FOREIGN KEY (contract_termination_fines_id) REFERENCES public.contract_termination(id) ON DELETE CASCADE
);


-- public.cheque definition

-- Drop table

-- DROP TABLE public.cheque;

CREATE TABLE public.cheque (
	created_at timestamptz NOT NULL DEFAULT now(),
	"number" int8 NOT NULL GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE),
	"type" int4 NOT NULL,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	seller_id uuid NULL,
	account_id uuid NOT NULL,
	beneficiary_name text NULL,
	cost_center_id uuid NULL,
	note text NULL,
	due_date date NULL,
	end_due_date date NULL,
	without_due_date bool NULL DEFAULT false,
	bank_id uuid NULL,
	observe_account_id uuid NULL,
	observe_cost_center_id uuid NULL,
	note1 text NULL,
	note2 text NULL,
	deport_status bool NOT NULL DEFAULT false,
	collection_status bool NOT NULL DEFAULT false,
	partial_collection_status bool NOT NULL DEFAULT false,
	return_status bool NOT NULL DEFAULT false,
	deposit_status bool NULL DEFAULT false,
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	connect_with int4 NULL DEFAULT 1,
	connect_with_id uuid NULL,
	feedback bool NOT NULL DEFAULT false,
	gen_entries bool NULL,
	currency_val float4 NOT NULL DEFAULT '0'::real,
	obverse_account_note text NULL,
	installment_id uuid NULL,
	is_deleted bool NULL DEFAULT false,
	is_archived bool NULL DEFAULT false,
	internal_number int8 NOT NULL,
	apartment_id uuid NULL,
	shop_id uuid NULL,
	parking_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT cheque_pkey1 PRIMARY KEY (id),
	CONSTRAINT fk_cheque_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_installment_id_fkey FOREIGN KEY (installment_id) REFERENCES public.installment(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_observe_account_id_fkey FOREIGN KEY (observe_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_observe_cost_center_id_fkey FOREIGN KEY (observe_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.seller(id),
	CONSTRAINT public_cheque_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.op_collection definition

-- Drop table

-- DROP TABLE public.op_collection;

CREATE TABLE public.op_collection (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	feedback bool NOT NULL DEFAULT false,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NOT NULL,
	note text NULL,
	commission_value float4 NOT NULL DEFAULT '0'::real,
	commission_percentage float4 NOT NULL DEFAULT '0'::real,
	commission_debit_id uuid NULL,
	commission_credit_id uuid NULL,
	commission_cost_center_id uuid NULL,
	commission_note text NULL,
	accounting_voucher_main_data_id uuid NULL,
	cheque_id uuid NOT NULL,
	gen_entries bool NULL,
	currency_val float4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT op_collection_pkey PRIMARY KEY (id),
	CONSTRAINT fk_op_collection_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_accounting_voucher_main_data_id_fkey FOREIGN KEY (accounting_voucher_main_data_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_commission_cost_center_id_fkey FOREIGN KEY (commission_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_commission_credit_id_fkey FOREIGN KEY (commission_credit_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_commission_debit_id_fkey FOREIGN KEY (commission_debit_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT op_collection_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_op_collection_cheque_id_fkey FOREIGN KEY (cheque_id) REFERENCES public.cheque(id)
);


-- public.op_deportation definition

-- Drop table

-- DROP TABLE public.op_deportation;

CREATE TABLE public.op_deportation (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	feedback bool NOT NULL DEFAULT false,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NOT NULL,
	note text NULL,
	accounting_voucher_main_data_id uuid NULL,
	gen_entries bool NULL,
	cheque_id uuid NOT NULL,
	currency_val float4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT op_deportation_pkey PRIMARY KEY (id),
	CONSTRAINT fk_op_deportation_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT op_deportation_accounting_voucher_main_data_id_fkey FOREIGN KEY (accounting_voucher_main_data_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT op_deportation_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id),
	CONSTRAINT op_deportation_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id),
	CONSTRAINT op_deportation_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT op_deportation_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id),
	CONSTRAINT public_op_deportation_cheque_id_fkey FOREIGN KEY (cheque_id) REFERENCES public.cheque(id)
);


-- public.op_partial_collection definition

-- Drop table

-- DROP TABLE public.op_partial_collection;

CREATE TABLE public.op_partial_collection (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	feedback bool NOT NULL DEFAULT false,
	amount float4 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NOT NULL,
	note text NULL,
	commission_value float4 NOT NULL DEFAULT '0'::real,
	commission_percentage float4 NOT NULL DEFAULT '0'::real,
	commission_debit_id uuid NULL,
	commission_credit_id uuid NULL,
	commission_cost_center_id uuid NULL,
	commission_note text NULL,
	accounting_voucher_main_data_id uuid NULL,
	total_value float8 NOT NULL DEFAULT '0'::double precision,
	total_sum float8 NOT NULL DEFAULT '0'::double precision,
	rest float8 NOT NULL DEFAULT '0'::double precision,
	total_sum_prev float8 NOT NULL DEFAULT '0'::double precision,
	gen_entries bool NULL,
	cheque_id uuid NOT NULL,
	currency_val float4 NULL,
	"number" int4 NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT op_partial_collection_pkey PRIMARY KEY (id),
	CONSTRAINT fk_op_partial_collection_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT op_partial_collection_accounting_voucher_main_data_id_fkey FOREIGN KEY (accounting_voucher_main_data_id) REFERENCES public.accounting_voucher_main_data(id),
	CONSTRAINT op_partial_collection_commission_cost_center_id_fkey FOREIGN KEY (commission_cost_center_id) REFERENCES public.cost_center(id),
	CONSTRAINT op_partial_collection_commission_credit_id_fkey FOREIGN KEY (commission_credit_id) REFERENCES public.account(id),
	CONSTRAINT op_partial_collection_commission_debit_id_fkey FOREIGN KEY (commission_debit_id) REFERENCES public.account(id),
	CONSTRAINT op_partial_collection_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id),
	CONSTRAINT op_partial_collection_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id),
	CONSTRAINT op_partial_collection_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT op_partial_collection_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id),
	CONSTRAINT public_op_partial_collection_cheque_id_fkey FOREIGN KEY (cheque_id) REFERENCES public.cheque(id)
);


-- public.op_return definition

-- Drop table

-- DROP TABLE public.op_return;

CREATE TABLE public.op_return (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	created_at timestamptz NOT NULL DEFAULT now(),
	feedback bool NOT NULL DEFAULT false,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NOT NULL,
	note text NULL,
	reason text NOT NULL,
	accounting_voucher_main_data_id uuid NULL,
	gen_entries bool NULL,
	cheque_id uuid NOT NULL,
	currency_val float4 NULL,
	connect_with_chq bool NULL,
	connect_with_chq_id uuid NULL,
	tenant_id uuid NULL,
	CONSTRAINT op_return_pkey PRIMARY KEY (id),
	CONSTRAINT fk_op_return_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT op_return_accounting_voucher_main_data_id_fkey FOREIGN KEY (accounting_voucher_main_data_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT op_return_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id),
	CONSTRAINT op_return_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id),
	CONSTRAINT op_return_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id),
	CONSTRAINT op_return_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id),
	CONSTRAINT public_op_return_cheque_id_fkey FOREIGN KEY (cheque_id) REFERENCES public.cheque(id),
	CONSTRAINT public_op_return_connect_with_chq_id_fkey FOREIGN KEY (connect_with_chq_id) REFERENCES public.cheque(id)
);

