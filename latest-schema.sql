-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.account_number_seq;

CREATE SEQUENCE public.account_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.account_number_seq1;

CREATE SEQUENCE public.account_number_seq1
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
-- DROP SEQUENCE public.accounting_voucher_main_data_number_seq1;

CREATE SEQUENCE public.accounting_voucher_main_data_number_seq1
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
-- DROP SEQUENCE public.accounting_voucher_pattern_code_seq1;

CREATE SEQUENCE public.accounting_voucher_pattern_code_seq1
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
-- DROP SEQUENCE public.accounting_voucher_pattern_number_seq1;

CREATE SEQUENCE public.accounting_voucher_pattern_number_seq1
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
-- DROP SEQUENCE public.apartment_number_seq1;

CREATE SEQUENCE public.apartment_number_seq1
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
-- DROP SEQUENCE public.attachments_attachment_id_seq1;

CREATE SEQUENCE public.attachments_attachment_id_seq1
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
-- DROP SEQUENCE public.bank_number_seq1;

CREATE SEQUENCE public.bank_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_material_details_number_seq;

CREATE SEQUENCE public.bill_material_details_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_material_details_number_seq1;

CREATE SEQUENCE public.bill_material_details_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_number_seq;

CREATE SEQUENCE public.bill_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_number_seq1;

CREATE SEQUENCE public.bill_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_pattern_code_seq;

CREATE SEQUENCE public.bill_pattern_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.bill_pattern_code_seq1;

CREATE SEQUENCE public.bill_pattern_code_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.building2_building_number_seq;

CREATE SEQUENCE public.building2_building_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.building2_number_seq;

CREATE SEQUENCE public.building2_number_seq
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
-- DROP SEQUENCE public.category_number_seq;

CREATE SEQUENCE public.category_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.category_number_seq1;

CREATE SEQUENCE public.category_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.category_problem_number_seq;

CREATE SEQUENCE public.category_problem_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.category_problem_number_seq1;

CREATE SEQUENCE public.category_problem_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.cheque_number_seq;

CREATE SEQUENCE public.cheque_number_seq
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
-- DROP SEQUENCE public.cheque_pattern_code_seq1;

CREATE SEQUENCE public.cheque_pattern_code_seq1
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
-- DROP SEQUENCE public.cheque_pattern_number_seq1;

CREATE SEQUENCE public.cheque_pattern_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.companies_number_seq;

CREATE SEQUENCE public.companies_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.company_number_seq;

CREATE SEQUENCE public.company_number_seq
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
-- DROP SEQUENCE public.contract_number_seq1;

CREATE SEQUENCE public.contract_number_seq1
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
-- DROP SEQUENCE public.contract_pattern_code_seq1;

CREATE SEQUENCE public.contract_pattern_code_seq1
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
-- DROP SEQUENCE public.contract_pattern_number_seq1;

CREATE SEQUENCE public.contract_pattern_number_seq1
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
-- DROP SEQUENCE public.cost_center_number_seq1;

CREATE SEQUENCE public.cost_center_number_seq1
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
-- DROP SEQUENCE public.country_id_seq1;

CREATE SEQUENCE public.country_id_seq1
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
-- DROP SEQUENCE public.country_number_seq1;

CREATE SEQUENCE public.country_number_seq1
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
-- DROP SEQUENCE public.currency_number_seq1;

CREATE SEQUENCE public.currency_number_seq1
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
-- DROP SEQUENCE public.entry_main_data_number_seq1;

CREATE SEQUENCE public.entry_main_data_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.evacuation_request_request_id_seq;

CREATE SEQUENCE public.evacuation_request_request_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.evacuation_request_request_id_seq1;

CREATE SEQUENCE public.evacuation_request_request_id_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.expenses_types_number_seq;

CREATE SEQUENCE public.expenses_types_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.expenses_types_number_seq1;

CREATE SEQUENCE public.expenses_types_number_seq1
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
-- DROP SEQUENCE public.land_number_seq1;

CREATE SEQUENCE public.land_number_seq1
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
-- DROP SEQUENCE public.lawsuit_expenses_id_seq1;

CREATE SEQUENCE public.lawsuit_expenses_id_seq1
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
-- DROP SEQUENCE public.lawsuit_number_seq1;

CREATE SEQUENCE public.lawsuit_number_seq1
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
-- DROP SEQUENCE public.lessor_number_seq1;

CREATE SEQUENCE public.lessor_number_seq1
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
-- DROP SEQUENCE public.logs_number_seq1;

CREATE SEQUENCE public.logs_number_seq1
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
-- DROP SEQUENCE public.material_group_number_seq1;

CREATE SEQUENCE public.material_group_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.material_number_seq;

CREATE SEQUENCE public.material_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.members_number_seq;

CREATE SEQUENCE public.members_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.members_number_seq1;

CREATE SEQUENCE public.members_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.owner_expenses_number_seq;

CREATE SEQUENCE public.owner_expenses_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.owner_expenses_types_number_seq;

CREATE SEQUENCE public.owner_expenses_types_number_seq
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
-- DROP SEQUENCE public.owner_number_seq1;

CREATE SEQUENCE public.owner_number_seq1
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
-- DROP SEQUENCE public.parking_number_seq1;

CREATE SEQUENCE public.parking_number_seq1
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
-- DROP SEQUENCE public.reservation_property_number_seq1;

CREATE SEQUENCE public.reservation_property_number_seq1
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
-- DROP SEQUENCE public.seller_number_seq1;

CREATE SEQUENCE public.seller_number_seq1
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
-- DROP SEQUENCE public.service_customer_request_number_seq1;

CREATE SEQUENCE public.service_customer_request_number_seq1
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
-- DROP SEQUENCE public.service_number_seq1;

CREATE SEQUENCE public.service_number_seq1
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
-- DROP SEQUENCE public.shop_number_seq1;

CREATE SEQUENCE public.shop_number_seq1
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
-- DROP SEQUENCE public.store_code_seq1;

CREATE SEQUENCE public.store_code_seq1
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
-- DROP SEQUENCE public.store_number_seq1;

CREATE SEQUENCE public.store_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tenants_details_number_seq;

CREATE SEQUENCE public.tenants_details_number_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tenants_details_number_seq1;

CREATE SEQUENCE public.tenants_details_number_seq1
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
-- DROP SEQUENCE public.tenants_number_seq1;

CREATE SEQUENCE public.tenants_number_seq1
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
-- DROP SEQUENCE public.user_number_seq1;

CREATE SEQUENCE public.user_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.villa1_number_seq;

CREATE SEQUENCE public.villa1_number_seq
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
-- DROP SEQUENCE public.voucher_main_data_number_seq1;

CREATE SEQUENCE public.voucher_main_data_number_seq1
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
-- DROP SEQUENCE public.voucher_pattern_code_seq1;

CREATE SEQUENCE public.voucher_pattern_code_seq1
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
-- DROP SEQUENCE public.voucher_pattern_number_seq1;

CREATE SEQUENCE public.voucher_pattern_number_seq1
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.companies definition

-- Drop table

-- DROP TABLE public.companies;

CREATE TABLE public.companies (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	customer_phone text NOT NULL,
	customer_name text NOT NULL,
	company_name text NOT NULL,
	company_email text NOT NULL,
	company_phone text NOT NULL,
	status int2 DEFAULT '1'::smallint NOT NULL,
	CONSTRAINT company_pkey PRIMARY KEY (id)
);


-- public.members definition

-- Drop table

-- DROP TABLE public.members;

CREATE TABLE public.members (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	user_type int4 NULL,
	phone varchar NOT NULL,
	email text NULL,
	"name" text NOT NULL,
	"password" text NULL,
	"token" text NULL,
	is_verified bool NULL,
	CONSTRAINT members_pkey PRIMARY KEY (id)
);


-- public.packages definition

-- Drop table

-- DROP TABLE public.packages;

CREATE TABLE public.packages (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	total_units_count int4 NOT NULL,
	unit_price float4 NOT NULL,
	available bool DEFAULT true NOT NULL,
	package int2 NOT NULL,
	package_name text NOT NULL,
	CONSTRAINT package_pkey PRIMARY KEY (id)
);


-- public.managers definition

-- Drop table

-- DROP TABLE public.managers;

CREATE TABLE public.managers (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	member_id uuid NOT NULL,
	"role" int2 DEFAULT '1'::smallint NOT NULL,
	CONSTRAINT managers_pkey PRIMARY KEY (id),
	CONSTRAINT managers_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id) ON DELETE CASCADE
);


-- public.tenants definition

-- Drop table

-- DROP TABLE public.tenants;

CREATE TABLE public.tenants (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	emirate text NOT NULL,
	address text NOT NULL,
	status int2 DEFAULT '1'::smallint NOT NULL,
	company_id uuid NOT NULL,
	CONSTRAINT tenants_pkey PRIMARY KEY (id),
	CONSTRAINT tenants_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.companies(id) ON DELETE CASCADE
);


-- public.tenants_details definition

-- Drop table

-- DROP TABLE public.tenants_details;

CREATE TABLE public.tenants_details (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	license_start date NOT NULL,
	license_expired date NOT NULL,
	months int2 NOT NULL,
	total_price float4 DEFAULT '0'::real NOT NULL,
	is_active bool DEFAULT false NOT NULL,
	package_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT tenants_details_pkey PRIMARY KEY (id),
	CONSTRAINT tenants_details_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT tenants_package_units_id_fkey FOREIGN KEY (package_id) REFERENCES public.packages(id) ON DELETE CASCADE
);


-- public.admins definition

-- Drop table

-- DROP TABLE public.admins;

CREATE TABLE public.admins (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	member_id uuid NOT NULL,
	"role" int2 DEFAULT '1'::smallint NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT admins_pkey PRIMARY KEY (id),
	CONSTRAINT admins_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id) ON DELETE CASCADE,
	CONSTRAINT admins_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.attachments definition

-- Drop table

-- DROP TABLE public.attachments;

CREATE TABLE public.attachments (
	attachment_id serial4 NOT NULL,
	entity_type text NOT NULL,
	attachment_type text NOT NULL,
	file_name text NOT NULL,
	upload_timestamp timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	tenant_id uuid NULL,
	entity_id uuid NOT NULL,
	CONSTRAINT attachments_pkey PRIMARY KEY (attachment_id),
	CONSTRAINT fk_attachments_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.bank definition

-- Drop table

-- DROP TABLE public.bank;

CREATE TABLE public.bank (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"name" varchar NOT NULL,
	address text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT bank_number_key UNIQUE (number),
	CONSTRAINT bank_pkey PRIMARY KEY (id),
	CONSTRAINT fk_bank_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.category definition

-- Drop table

-- DROP TABLE public.category;

CREATE TABLE public.category (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	description text NULL,
	parent_id uuid NULL,
	image text NULL,
	tenant_id uuid NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	hex text DEFAULT '#EEEEEE'::text NULL,
	ltnname text NULL,
	CONSTRAINT category_pkey PRIMARY KEY (id),
	CONSTRAINT category_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT fk_category_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.category_problem definition

-- Drop table

-- DROP TABLE public.category_problem;

CREATE TABLE public.category_problem (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	description text NULL,
	category_id uuid NOT NULL,
	is_available bool DEFAULT true NULL,
	tenant_id uuid NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	minutes int8 DEFAULT '30'::bigint NOT NULL,
	ltndescription text NULL,
	price int4 DEFAULT 0 NOT NULL,
	CONSTRAINT category_problem_pkey PRIMARY KEY (id),
	CONSTRAINT category_problem_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT fk_category_problem_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.cost_center definition

-- Drop table

-- DROP TABLE public.cost_center;

CREATE TABLE public.cost_center (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	parent_id uuid NULL,
	note text NULL,
	code int8 NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT cost_center_pkey PRIMARY KEY (id),
	CONSTRAINT fk_cost_center_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_cost_center_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.cost_center(id) ON DELETE CASCADE
);


-- public.country definition

-- Drop table

-- DROP TABLE public.country;

CREATE TABLE public.country (
	id int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"name" varchar NOT NULL,
	code varchar NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT country_number_key UNIQUE (number),
	CONSTRAINT country_pkey PRIMARY KEY (id),
	CONSTRAINT fk_country_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.currency definition

-- Drop table

-- DROP TABLE public.currency;

CREATE TABLE public.currency (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	code varchar NOT NULL,
	rate float4 NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT currency_code_key UNIQUE (code),
	CONSTRAINT currency_name_key UNIQUE (name),
	CONSTRAINT currency_number_key UNIQUE (number),
	CONSTRAINT currency_pkey PRIMARY KEY (id),
	CONSTRAINT fk_currency_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.default_service definition

-- Drop table

-- DROP TABLE public.default_service;

CREATE TABLE public.default_service (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int4 DEFAULT nextval('service_number_seq'::regclass) NOT NULL,
	created_at timestamp DEFAULT now() NOT NULL,
	price float8 DEFAULT '0'::double precision NOT NULL,
	tenant_id uuid NOT NULL,
	picture text NULL,
	display bool DEFAULT true NOT NULL,
	"name" text NOT NULL,
	description text NOT NULL,
	category_id uuid NOT NULL,
	available bool DEFAULT true NOT NULL,
	service_type int4 DEFAULT 0 NOT NULL,
	ltnname text NULL,
	ltndescription text NULL,
	CONSTRAINT default_service_pkey PRIMARY KEY (id),
	CONSTRAINT default_service_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT default_service_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.entry_main_data definition

-- Drop table

-- DROP TABLE public.entry_main_data;

CREATE TABLE public.entry_main_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	currency_id uuid NULL,
	note text NULL,
	debit float4 DEFAULT '0'::real NOT NULL,
	credit float4 DEFAULT '0'::real NOT NULL,
	difference int2 DEFAULT '0'::smallint NOT NULL,
	currency_val float4 NULL,
	created_from text NULL,
	created_from_id uuid NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	is_deleted bool NULL,
	is_first_batch bool NULL,
	created_from_code int4 NULL,
	tenant_id uuid NULL,
	internal_number int4 NULL,
	CONSTRAINT entry_main_data_number_key UNIQUE (number),
	CONSTRAINT journal_voucher_pkey PRIMARY KEY (id),
	CONSTRAINT entry_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_entry_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.lack_reason definition

-- Drop table

-- DROP TABLE public.lack_reason;

CREATE TABLE public.lack_reason (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	reason text NOT NULL,
	available bool DEFAULT true NOT NULL,
	code int4 NOT NULL,
	tenant_id uuid NOT NULL,
	ltnreason text NULL,
	CONSTRAINT lack_reason_pkey PRIMARY KEY (id),
	CONSTRAINT lack_reason_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.lessor definition

-- Drop table

-- DROP TABLE public.lessor;

CREATE TABLE public.lessor (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT lessor_full_name_key UNIQUE (name),
	CONSTRAINT lessor_pkey PRIMARY KEY (id),
	CONSTRAINT fk_lessor_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.maintenance_setting definition

-- Drop table

-- DROP TABLE public.maintenance_setting;

CREATE TABLE public.maintenance_setting (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	tenant_id uuid NULL,
	hours_count int2 NULL,
	start_hours int2 NULL,
	each_time int2 NULL,
	CONSTRAINT maintenance_setting_pkey PRIMARY KEY (id),
	CONSTRAINT maintenance_setting_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.owner_expenses_types definition

-- Drop table

-- DROP TABLE public.owner_expenses_types;

CREATE TABLE public.owner_expenses_types (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	code varchar NULL,
	ltnname text NULL,
	CONSTRAINT expenses_types_pkey1 PRIMARY KEY (id),
	CONSTRAINT expenses_types_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.property_values definition

-- Drop table

-- DROP TABLE public.property_values;

CREATE TABLE public.property_values (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	area numeric NULL,
	area_unit varchar DEFAULT ''::character varying NULL,
	"view" text NULL,
	property_type int2 NULL,
	room_count numeric NOT NULL,
	hex varchar NOT NULL,
	row_index int8 NOT NULL,
	description text NULL,
	building_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT property_values_pkey PRIMARY KEY (id),
	CONSTRAINT fk_property_values_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.seller definition

-- Drop table

-- DROP TABLE public.seller;

CREATE TABLE public.seller (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT seller_full_name_key UNIQUE (name),
	CONSTRAINT seller_pkey PRIMARY KEY (id),
	CONSTRAINT fk_seller_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.store definition

-- Drop table

-- DROP TABLE public.store;

CREATE TABLE public.store (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	address text NULL,
	warehouseman text NULL,
	note text NULL,
	parent_id uuid NULL,
	final_id uuid NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT store_pkey PRIMARY KEY (id),
	CONSTRAINT fk_store_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT store_final_id_fkey FOREIGN KEY (final_id) REFERENCES public.store(id) ON DELETE CASCADE,
	CONSTRAINT store_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.store(id) ON DELETE CASCADE
);


-- public.account definition

-- Drop table

-- DROP TABLE public.account;

CREATE TABLE public.account (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"type" int4 DEFAULT 1 NOT NULL,
	parent_id uuid NULL,
	final_id uuid NULL,
	note text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" varchar NOT NULL,
	code int8 NOT NULL,
	"level" int4 NULL,
	status text NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT account_internal_number_key UNIQUE (code),
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	account_id uuid NOT NULL,
	main_account_id uuid NOT NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT account_assembly_pkey PRIMARY KEY (id),
	CONSTRAINT fk_account_assembly_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_account_assembly_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_account_assembly_main_account_id_fkey FOREIGN KEY (main_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.account_distributive definition

-- Drop table

-- DROP TABLE public.account_distributive;

CREATE TABLE public.account_distributive (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	percentage float4 NOT NULL,
	main_account_id uuid NOT NULL,
	account_id uuid NOT NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT account_distributive_pkey PRIMARY KEY (id),
	CONSTRAINT fk_account_distributive_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_account_distributive_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_account_distributive_main_account_id_fkey FOREIGN KEY (main_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.accounting_voucher_pattern definition

-- Drop table

-- DROP TABLE public.accounting_voucher_pattern;

CREATE TABLE public.accounting_voucher_pattern (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	auto_transfer_entry bool DEFAULT false NOT NULL,
	move_account_cost_center bool DEFAULT false NOT NULL,
	required_cost_center bool DEFAULT false NOT NULL,
	required_statement bool DEFAULT false NOT NULL,
	default_print_folder_path text NULL,
	show_debit_field bool DEFAULT false NOT NULL,
	show_credit_field bool DEFAULT false NOT NULL,
	debit_field_label text DEFAULT 'debit'::text NOT NULL,
	credit_field_label text DEFAULT 'credit'::text NOT NULL,
	show_currency bool DEFAULT false NOT NULL,
	show_cost_center bool DEFAULT false NOT NULL,
	show_note bool DEFAULT false NOT NULL,
	odd_table_color text NULL,
	even_table_color text NULL,
	sms text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	list_ltnname text NULL,
	CONSTRAINT accounting_voucher_pattern_number_key UNIQUE (number),
	CONSTRAINT accounting_voucher_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id),
	CONSTRAINT fk_accounting_voucher_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.bill_pattern definition

-- Drop table

-- DROP TABLE public.bill_pattern;

CREATE TABLE public.bill_pattern (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	bill_type int4 NOT NULL,
	note text NULL,
	barcode_bill bool NULL,
	list_name varchar NULL,
	default_store_id uuid NULL,
	cost_center_id uuid NULL,
	material_account_id uuid NULL,
	cash_account_id uuid NULL,
	discount_account_id uuid NULL,
	extra_account_id uuid NULL,
	vat_account_id uuid NULL,
	currency_id uuid NOT NULL,
	use_vat_account_from_customer_card bool DEFAULT false NOT NULL,
	payment_method int4 DEFAULT 1 NOT NULL,
	bill_affected_the_pricing_of_materials bool DEFAULT false NOT NULL,
	pricing_of_materials int4 DEFAULT 1 NOT NULL,
	active_perpetual_inventory bool DEFAULT false NOT NULL,
	stock_account_id uuid NULL,
	calculate_sale_cost_center_id uuid NULL,
	table_color1 varchar NULL,
	table_color2 varchar NULL,
	post_to_store bool DEFAULT false NOT NULL,
	post_to_store_auto bool DEFAULT false NOT NULL,
	generate_entries bool DEFAULT false NOT NULL,
	auto_generate_entries bool DEFAULT false NOT NULL,
	post_generate_entries_auto bool DEFAULT false NOT NULL,
	deleting_entry_depending_on_materials bool DEFAULT false NOT NULL,
	possibility_of_changing_materials_account bool DEFAULT false NOT NULL,
	calculate_vat_after_discount_and_extra_value_to_the_invoice bool DEFAULT false NOT NULL,
	merge_repeated_materials bool DEFAULT false NOT NULL,
	required_customer_entry bool DEFAULT false NOT NULL,
	required_cost_center_entry bool DEFAULT false NOT NULL,
	required_category_entry bool DEFAULT false NOT NULL,
	show_alert_on_navigate_output bool DEFAULT false NOT NULL,
	dont_save_when_navigate_output bool DEFAULT false NOT NULL,
	show_average_price_check_message_after_adding_modifying bool DEFAULT false NOT NULL,
	show_references_field bool DEFAULT false NOT NULL,
	required_reference_field bool DEFAULT false NOT NULL,
	dont_show_expired_field bool DEFAULT false NOT NULL,
	lock_bill_when_loading_references bool DEFAULT false NOT NULL,
	allow_partial_load bool DEFAULT false NOT NULL,
	"references" _jsonb NULL,
	tenant_id uuid NOT NULL,
	linked_material_group jsonb NULL,
	ltnname text NULL,
	list_ltnname text NULL,
	vat_percentage float4 NULL,
	CONSTRAINT bill_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT bill_pattern_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_calculate_sale_cost_center_id FOREIGN KEY (calculate_sale_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_cash_account_id FOREIGN KEY (cash_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_cost_center_id FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_currency_id FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_default_store_id FOREIGN KEY (default_store_id) REFERENCES public.store(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_discount_account_id FOREIGN KEY (discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_extra_account_id FOREIGN KEY (extra_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_material_account_id FOREIGN KEY (material_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_stock_account_id FOREIGN KEY (stock_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_pattern_vat_account_id FOREIGN KEY (vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.cheque_pattern definition

-- Drop table

-- DROP TABLE public.cheque_pattern;

CREATE TABLE public.cheque_pattern (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	paper_type int2 DEFAULT '1'::smallint NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	gen_entries bool DEFAULT false NULL,
	auto_gen_entries bool DEFAULT false NULL,
	auto_transfer_entry bool DEFAULT false NULL,
	default_print_folder text NULL,
	collection bool DEFAULT false NULL,
	collection_gen_entries bool DEFAULT false NULL,
	collection_auto_gen_entries bool DEFAULT false NULL,
	collection_auto_transfer_entry bool DEFAULT false NULL,
	collection_default_date int2 NULL,
	collection_default_account_is_building_bank bool NULL,
	collection_default_observe_account_is_client bool NULL,
	collection_move_cost_center_debit bool NULL,
	collection_move_cost_center_credit bool NULL,
	collection_credit_account_id uuid NULL,
	collection_debit_account_id uuid NULL,
	commission_type int2 NULL,
	commission_amount_from_building bool DEFAULT false NULL,
	commission_default_account_is_building_owner bool DEFAULT false NULL,
	commission_default_observe_is_revenue_account bool DEFAULT false NULL,
	commission_move_cost_center_debit bool DEFAULT false NULL,
	commission_move_cost_center_credit bool DEFAULT false NULL,
	commission_debit_account_id uuid NULL,
	commission_credit_account_id uuid NULL,
	partial_collection bool DEFAULT false NULL,
	partial_gen_entries bool DEFAULT false NULL,
	partial_auto_gen_entries bool DEFAULT false NULL,
	partial_auto_transfer_entry bool DEFAULT false NULL,
	partial_default_account_is_building_bank bool DEFAULT false NULL,
	partial_default_observe_account_is_client bool DEFAULT false NULL,
	partial_move_cost_center_debit bool DEFAULT false NULL,
	partial_move_cost_center_credit bool DEFAULT false NULL,
	partial_debit_account_id uuid NULL,
	partial_credit_account_id uuid NULL,
	returnable bool DEFAULT false NULL,
	returnable_gen_entries bool DEFAULT false NULL,
	returnable_auto_gen_entries bool DEFAULT false NULL,
	returnable_auto_transfer_entry bool DEFAULT false NULL,
	returnable_default_date int2 NULL,
	returnable_default_account_is_client bool DEFAULT false NULL,
	returnable_default_observe_account_is_building_bank bool DEFAULT false NULL,
	returnable_active_operations bool DEFAULT false NULL,
	returnable_move_cost_center_debit bool DEFAULT false NULL,
	returnable_move_cost_center_credit bool DEFAULT false NULL,
	returnable_debit_account_id uuid NULL,
	returnable_credit_account_id uuid NULL,
	return_fee_default_account_is_client bool DEFAULT false NULL,
	return_fee_debit_account_id uuid NULL,
	return_fee_credit_account_id uuid NULL,
	statement_account text NULL,
	statement_observe_account text NULL,
	statement_collection text NULL,
	statement_return text NULL,
	statement_partial text NULL,
	sms text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	list_ltnname text NULL,
	CONSTRAINT cheque_pattern_number_key UNIQUE (number),
	CONSTRAINT cheque_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT fk_cheque_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_collection_credit_account_id_fkey FOREIGN KEY (collection_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_collection_debit_account_id_fkey FOREIGN KEY (collection_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_commission_credit_account_id_fkey FOREIGN KEY (commission_credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_commission_debit_account_id_fkey FOREIGN KEY (commission_debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_cheque_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	contract_type int2 NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	list_name text NULL,
	shortcut_key text DEFAULT ''::text NULL,
	gen_entries bool DEFAULT false NOT NULL,
	auto_gen_entries bool DEFAULT false NOT NULL,
	auto_transfer_entry bool DEFAULT false NOT NULL,
	record_date_created int2 NOT NULL,
	new_contract_without_terminating bool DEFAULT false NOT NULL,
	insurance_required bool DEFAULT false NOT NULL,
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
	move_cost_center_with_revenue jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_tenant jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_insurance_revenue jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_price_revenue jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_intention_ratifying jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_other_fee jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_commission_client jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_commission_owner jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_contract_fines_terminating jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	move_cost_center_with_decisiveness_granted jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
	contract_terms text NULL,
	folder_default_printing text NULL,
	folder_print_communications text NULL,
	folder_print_clearance text NULL,
	move_cost_center_with_contract_proceeds_rerminating jsonb DEFAULT '{"debit": false, "credit": false}'::jsonb NOT NULL,
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
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	list_ltnname text NULL,
	default_vat_account_id uuid NULL,
	vat_rate float4 NULL,
	vat_required bool NULL,
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
	CONSTRAINT contract_pattern_default_vat_account_id_fkey FOREIGN KEY (default_vat_account_id) REFERENCES public.account(id),
	CONSTRAINT fk_contract_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.entry_grid_data definition

-- Drop table

-- DROP TABLE public.entry_grid_data;

CREATE TABLE public.entry_grid_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	account_id uuid NOT NULL,
	debit float4 DEFAULT '0'::real NULL,
	credit float4 DEFAULT '0'::real NULL,
	currency_id uuid NULL,
	cost_center_id uuid NULL,
	observe_account_id uuid NULL,
	note text NULL,
	entry_main_data_id uuid NOT NULL,
	tenant_id uuid NULL,
	currency_val float4 NULL,
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
	id int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	seller_id uuid NOT NULL,
	note text NOT NULL,
	operation text NOT NULL,
	table_name text NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT logs_pkey PRIMARY KEY (id),
	CONSTRAINT fk_logs_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT logs_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.seller(id) ON DELETE CASCADE
);


-- public.material_group definition

-- Drop table

-- DROP TABLE public.material_group;

CREATE TABLE public.material_group (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	note text NULL,
	parent_id uuid NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	store_id uuid NULL,
	code int4 NULL,
	CONSTRAINT material_group_code_key UNIQUE (code),
	CONSTRAINT material_group_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_group_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT material_group_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.material_group(id) ON DELETE CASCADE,
	CONSTRAINT material_group_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.store(id) ON DELETE CASCADE
);


-- public."owner" definition

-- Drop table

-- DROP TABLE public."owner";

CREATE TABLE public."owner" (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	id_card text NULL,
	phone text NULL,
	cell_phone text NULL,
	fax text NULL,
	mailbox text NULL,
	email text NULL,
	address text NULL,
	nationality text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	account_id uuid NULL,
	"name" text NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	CONSTRAINT owner_name_key UNIQUE (name),
	CONSTRAINT owner_pkey PRIMARY KEY (id),
	CONSTRAINT fk_owner_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT owner_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	card_type int4 DEFAULT 1 NOT NULL,
	date_of_birth date NULL,
	passport_number text NULL,
	passport_expiry date NULL,
	national_id text NULL,
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
	fcm_token text NULL,
	is_verified bool NULL,
	tenant_id uuid NOT NULL,
	category_id uuid NULL,
	phone_code varchar DEFAULT '+971'::character varying NULL,
	"ltnName" text NULL,
	member_id uuid NOT NULL,
	CONSTRAINT user_name_key UNIQUE (name),
	CONSTRAINT user_pkey PRIMARY KEY (id),
	CONSTRAINT user_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT user_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id),
	CONSTRAINT user_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE SET NULL,
	CONSTRAINT user_insurance_account_id_fkey FOREIGN KEY (insurance_account_id) REFERENCES public.account(id),
	CONSTRAINT user_member_id_fkey FOREIGN KEY (member_id) REFERENCES public.members(id) ON DELETE CASCADE,
	CONSTRAINT user_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.user_work_times definition

-- Drop table

-- DROP TABLE public.user_work_times;

CREATE TABLE public.user_work_times (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	user_id uuid NOT NULL,
	work_time_start timestamptz NOT NULL,
	work_time_end timestamptz NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT user_work_times_pkey PRIMARY KEY (id),
	CONSTRAINT user_work_times_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT user_work_times_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.villa definition

-- Drop table

-- DROP TABLE public.villa;

CREATE TABLE public.villa (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	owner_account_id uuid NULL,
	note text NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	villa_account_id uuid NULL,
	cost_center_id uuid NULL,
	account_bank_villa_id uuid NULL,
	cash_account_id uuid NULL,
	insurance_account_id uuid NULL,
	lessor_id uuid NULL,
	assets_id uuid NULL,
	value float8 NULL,
	"statement" text NULL,
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
	ban bool NULL,
	CONSTRAINT villa1_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa1_accounts_account_bank_villa_id_fkey FOREIGN KEY (account_bank_villa_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa1_accounts_cash_account_id_fkey FOREIGN KEY (cash_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa1_accounts_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT villa1_accounts_insurance_account_id_fkey FOREIGN KEY (insurance_account_id) REFERENCES public.account(id),
	CONSTRAINT villa1_accounts_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id) ON DELETE CASCADE,
	CONSTRAINT villa1_accounts_villa_account_id_fkey FOREIGN KEY (villa_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT villa1_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.villa_rental_price definition

-- Drop table

-- DROP TABLE public.villa_rental_price;

CREATE TABLE public.villa_rental_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	villa_id uuid NOT NULL,
	"date" date NULL,
	price float8 NULL,
	currency_id uuid NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT villa_rent_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_rent_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT villa_rental_price_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.villa_selling_price definition

-- Drop table

-- DROP TABLE public.villa_selling_price;

CREATE TABLE public.villa_selling_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	villa_id uuid NOT NULL,
	"date" date NULL,
	price float8 NULL,
	currency_id uuid NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT villa_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_villa_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT villa_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT villa_selling_price_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE
);


-- public.voucher_pattern definition

-- Drop table

-- DROP TABLE public.voucher_pattern;

CREATE TABLE public.voucher_pattern (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	code int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"name" text NOT NULL,
	list_name text NULL,
	default_account_id uuid NULL,
	shortcut_key text NULL,
	auto_transfer_entry bool DEFAULT false NOT NULL,
	move_account_cost_center bool DEFAULT false NOT NULL,
	required_cost_center bool DEFAULT false NOT NULL,
	required_statement bool DEFAULT false NOT NULL,
	default_print_folder_path text NULL,
	show_debit_field bool DEFAULT false NOT NULL,
	show_credit_field bool DEFAULT false NOT NULL,
	debit_field_label text DEFAULT 'debit'::text NOT NULL,
	credit_field_label text DEFAULT 'credit'::text NOT NULL,
	show_currency bool DEFAULT false NOT NULL,
	show_cost_center bool DEFAULT false NOT NULL,
	show_note bool DEFAULT false NOT NULL,
	odd_table_color text NULL,
	even_table_color text NULL,
	sms text NULL,
	gen_entries bool DEFAULT false NOT NULL,
	auto_gen_entries bool DEFAULT false NOT NULL,
	show_contract_field bool DEFAULT false NOT NULL,
	show_contract_cost_center bool DEFAULT false NOT NULL,
	generate_records bool DEFAULT false NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	tenant_id uuid NULL,
	ltnname text NULL,
	list_ltnname text NULL,
	CONSTRAINT voucher_pattern_number_key UNIQUE (number),
	CONSTRAINT voucher_pattern_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_pattern_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT voucher_pattern_default_account_id_fkey FOREIGN KEY (default_account_id) REFERENCES public.account(id)
);


-- public.worker_category definition

-- Drop table

-- DROP TABLE public.worker_category;

CREATE TABLE public.worker_category (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	user_id uuid NOT NULL,
	category_id uuid NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT worker_category_pkey PRIMARY KEY (id),
	CONSTRAINT worker_category_user_id_category_id_key UNIQUE (user_id, category_id),
	CONSTRAINT worker_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE CASCADE,
	CONSTRAINT worker_category_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT worker_category_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.accounting_voucher_main_data definition

-- Drop table

-- DROP TABLE public.accounting_voucher_main_data;

CREATE TABLE public.accounting_voucher_main_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	currency_id uuid NOT NULL,
	note text NULL,
	debit float4 DEFAULT '0'::real NOT NULL,
	credit float4 DEFAULT '0'::real NOT NULL,
	feedback bool NOT NULL,
	seller_id uuid NOT NULL,
	connect_with int4 NOT NULL,
	debit_amount float4 DEFAULT '0'::real NOT NULL,
	debit_total float8 DEFAULT '0'::double precision NOT NULL,
	credit_total float8 DEFAULT '0'::double precision NOT NULL,
	credit_amount float8 DEFAULT '0'::double precision NOT NULL,
	account_id uuid NOT NULL,
	sms text NULL,
	currency_val float4 NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	gen_entires bool DEFAULT false NOT NULL,
	connect_with_id uuid NULL,
	is_archived bool NULL,
	is_deleted bool NULL,
	tenant_id uuid NULL,
	accounting_voucher_pattern_id uuid NOT NULL,
	CONSTRAINT accounting_voucher_main_data_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_main_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT accounting_voucher_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT accounting_voucher_pattern_id_fkey FOREIGN KEY (accounting_voucher_pattern_id) REFERENCES public.accounting_voucher_pattern(id) ON DELETE CASCADE,
	CONSTRAINT fk_accounting_voucher_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_accounting_voucher_main_data_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.seller(id)
);


-- public.accounting_voucher_pictures definition

-- Drop table

-- DROP TABLE public.accounting_voucher_pictures;

CREATE TABLE public.accounting_voucher_pictures (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	picture text NOT NULL,
	accounting_voucher_main_id uuid NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT accounting_voucher_images_pkey PRIMARY KEY (id),
	CONSTRAINT accounting_voucher_pictures_accounting_voucher_main_id_fkey FOREIGN KEY (accounting_voucher_main_id) REFERENCES public.accounting_voucher_main_data(id) ON DELETE CASCADE,
	CONSTRAINT fk_accounting_voucher_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.bill definition

-- Drop table

-- DROP TABLE public.bill;

CREATE TABLE public.bill (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	issue_date date NOT NULL,
	bill_date date NOT NULL,
	code int4 NOT NULL,
	currency_id uuid NOT NULL,
	currency_val float4 DEFAULT 1 NOT NULL,
	payment_method int4 DEFAULT 1 NOT NULL,
	note text NULL,
	receipt_number int8 NULL,
	cost_center_id uuid NULL,
	connect_with int4 NULL,
	connect_with_id uuid NULL,
	store_id uuid NOT NULL,
	customer_account_id uuid NOT NULL,
	material_account_id uuid NOT NULL,
	kind text NULL,
	total_quantities float4 NOT NULL,
	taxable float4 NULL,
	total float4 NOT NULL,
	discounts float4 NULL,
	extras float4 NULL,
	vat_amount float4 NULL,
	subtotal float4 NOT NULL,
	net float4 NULL,
	bill_total_text text NOT NULL,
	tenant_id uuid NOT NULL,
	customer_id uuid NULL,
	vat_account_id uuid NULL,
	bill_pattern_id uuid NULL,
	CONSTRAINT bill_pkey PRIMARY KEY (id),
	CONSTRAINT bill_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public."user"(id),
	CONSTRAINT bill_pattern_id_fkey FOREIGN KEY (bill_pattern_id) REFERENCES public.bill_pattern(id) ON DELETE CASCADE,
	CONSTRAINT bill_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT bill_vat_account_id_fkey FOREIGN KEY (vat_account_id) REFERENCES public.account(id),
	CONSTRAINT fk_bill_cost_center_id FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_currency_id FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_customer_account_id FOREIGN KEY (customer_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_material_account_id FOREIGN KEY (material_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_store_id FOREIGN KEY (store_id) REFERENCES public.store(id) ON DELETE CASCADE
);


-- public.bill_discounts_details definition

-- Drop table

-- DROP TABLE public.bill_discounts_details;

CREATE TABLE public.bill_discounts_details (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 NULL,
	bill_id uuid NOT NULL,
	account_id uuid NOT NULL,
	discount float4 NULL,
	extra float4 NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	cost_center_id uuid NULL,
	obverse_account_id uuid NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT bill_discounts_details_pkey PRIMARY KEY (id),
	CONSTRAINT bill_discounts_details_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_discounts_details_account_id FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_discounts_details_bill_id FOREIGN KEY (bill_id) REFERENCES public.bill(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_discounts_details_cost_center_id FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_discounts_details_currency_id FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_discounts_details_obverse_account_id FOREIGN KEY (obverse_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.building definition

-- Drop table

-- DROP TABLE public.building;

CREATE TABLE public.building (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	purchase_amount float8 NULL,
	purchase_gen_entries bool DEFAULT false NULL,
	purchase_currency_id uuid NULL,
	supplier_account_id uuid NULL,
	purchase_statement text NULL,
	building_cost float8 NULL,
	purchase_date date NULL,
	investment_owner_account_id uuid NULL,
	investment_start_date date NULL,
	investment_end_date date NULL,
	terminating_tenancies bool NULL,
	investment_value float4 NULL,
	investment_gen_entries bool DEFAULT false NULL,
	investment_currency_id uuid NULL,
	investment_currency_val float4 NULL,
	renters_insurance uuid NULL,
	building_receipt text NULL,
	received_date date NULL,
	received_account_id uuid NULL,
	received_amount float4 NULL,
	received_currency_id uuid NULL,
	received_currency_val float4 NULL,
	received_note text NULL,
	owner_account_id uuid NULL,
	commission_rate float4 NULL,
	revenue_id uuid NULL,
	tenant_id uuid NULL,
	entry_commission_rate float4 NULL,
	entry_vat_rate float4 NULL,
	entry_vat_account_id uuid NULL,
	entry_landlord_account_id uuid NULL,
	entry_commission_from_owner_account_id uuid NULL,
	entry_revenue_account_id uuid NULL,
	"name" text NOT NULL,
	emirate text NULL,
	suburb text NULL,
	area text NULL,
	street text NULL,
	building_number int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
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
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	building_purchase_date date NULL,
	building_amount float8 NULL,
	building_gen_entries bool NULL,
	building_currency_id uuid NULL,
	building_currency_val float4 NULL,
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
	building_account_id uuid NULL,
	main_cost_center_id uuid NULL,
	create_into_account bool DEFAULT true NULL,
	create_into_cost_center bool DEFAULT true NULL,
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
	ltnname text NULL,
	CONSTRAINT building_pkey PRIMARY KEY (id),
	CONSTRAINT building_bank_id_fkey FOREIGN KEY (bank_id) REFERENCES public.bank(id),
	CONSTRAINT building_currency_id_fkey FOREIGN KEY (purchase_currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT building_investment_currency_id_fkey FOREIGN KEY (investment_currency_id) REFERENCES public.currency(id),
	CONSTRAINT building_investment_owner_id_fkey FOREIGN KEY (investment_owner_account_id) REFERENCES public.account(id),
	CONSTRAINT building_investment_renters_insurance_fkey FOREIGN KEY (renters_insurance) REFERENCES public.account(id),
	CONSTRAINT building_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id),
	CONSTRAINT building_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public."owner"(id),
	CONSTRAINT building_real_estate_development_account_id_fkey FOREIGN KEY (received_account_id) REFERENCES public.account(id),
	CONSTRAINT building_real_estate_development_currency_id_fkey FOREIGN KEY (received_currency_id) REFERENCES public.currency(id),
	CONSTRAINT building_supplier_account_id_fkey FOREIGN KEY (supplier_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT fk_building_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_build_building_account_id_fkey FOREIGN KEY (building_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_building_bank_account_id_fkey FOREIGN KEY (building_bank_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_building_cash_account_id_fkey FOREIGN KEY (building_cash_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_building_cheque_account_id_fkey FOREIGN KEY (building_cheque_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_building_currency_id_fkey FOREIGN KEY (building_currency_id) REFERENCES public.currency(id),
	CONSTRAINT public_build_building_deposit_account_id_fkey FOREIGN KEY (building_deposit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_commission_expense_account_id_fkey FOREIGN KEY (commission_expense_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_create_into_account_id_fkey FOREIGN KEY (create_into_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_create_into_cost_center_id_fkey FOREIGN KEY (create_into_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_build_customers_main_account_id_fkey FOREIGN KEY (customers_main_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_deferred_vat_account_id_fkey FOREIGN KEY (deferred_vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_discount_account_id_fkey FOREIGN KEY (building_discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_entry_commission_from_owner_account_id_fkey FOREIGN KEY (entry_commission_from_owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_entry_landlord_account_id_fkey FOREIGN KEY (entry_landlord_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_entry_revenue_account_id_fkey FOREIGN KEY (entry_revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_entry_vat_account_id_fkey FOREIGN KEY (entry_vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_insurance_account_id_fkey FOREIGN KEY (building_insurance_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_build_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_owner_balance_fkey FOREIGN KEY (owner_balance) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_owner_tax_account_id_fkey FOREIGN KEY (owner_tax_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_realestate_company_account_id_fkey FOREIGN KEY (realestate_company_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_revenue_id_fkey FOREIGN KEY (revenue_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_build_vat_account_id_fkey FOREIGN KEY (vat_account_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.land definition

-- Drop table

-- DROP TABLE public.land;

CREATE TABLE public.land (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	"type" int2 NOT NULL,
	ban bool DEFAULT false NOT NULL,
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
	land_type text NULL,
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
	used_end_date bool NULL,
	ltnname text NULL,
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
	CONSTRAINT land_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT land_rent_currency_id_fkey FOREIGN KEY (rent_currency_id) REFERENCES public.currency(id) ON DELETE CASCADE
);


-- public.land_accumulate definition

-- Drop table

-- DROP TABLE public.land_accumulate;

CREATE TABLE public.land_accumulate (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int4 NULL,
	main_land_id uuid NOT NULL,
	land_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT land_accumulate_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE CASCADE,
	CONSTRAINT land_accumulate_main_land_id_fkey FOREIGN KEY (main_land_id) REFERENCES public.land(id) ON DELETE CASCADE,
	CONSTRAINT land_accumulate_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.land_rental_price definition

-- Drop table

-- DROP TABLE public.land_rental_price;

CREATE TABLE public.land_rental_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	land_id uuid NOT NULL,
	"date" date NULL,
	price numeric NOT NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT land_rental_price_pkey PRIMARY KEY (id),
	CONSTRAINT land_rental_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT land_rental_price_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE CASCADE,
	CONSTRAINT land_rental_price_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.land_selling_price definition

-- Drop table

-- DROP TABLE public.land_selling_price;

CREATE TABLE public.land_selling_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" date NOT NULL,
	land_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT land_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT land_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT land_selling_price_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE CASCADE,
	CONSTRAINT land_selling_price_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material definition

-- Drop table

-- DROP TABLE public.material;

CREATE TABLE public.material (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	defaults1 bool DEFAULT false NOT NULL,
	unit1 varchar NULL,
	barcode1 varchar NULL,
	unit2 varchar NULL,
	exchange2 int4 NULL,
	barcode2 varchar NULL,
	defaults2 bool DEFAULT false NOT NULL,
	unit3 varchar NULL,
	exchange3 int4 NULL,
	barcode3 varchar NULL,
	defaults3 bool DEFAULT false NOT NULL,
	code int8 NOT NULL,
	"name" varchar NOT NULL,
	material_group_id uuid NOT NULL,
	note varchar NULL,
	material_type int4 NOT NULL,
	tenant_id uuid NOT NULL,
	category_id uuid NULL,
	ltnname text NULL,
	"number" serial4 NOT NULL,
	CONSTRAINT material_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_material_group_id FOREIGN KEY (material_group_id) REFERENCES public.material_group(id) ON DELETE CASCADE,
	CONSTRAINT material_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON DELETE SET NULL,
	CONSTRAINT material_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_balance definition

-- Drop table

-- DROP TABLE public.material_balance;

CREATE TABLE public.material_balance (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	material_id uuid NOT NULL,
	store_id uuid NOT NULL,
	unit1 varchar NULL,
	quality1 int8 NULL,
	unit2 varchar NULL,
	quality2 int8 NULL,
	unit3 varchar NULL,
	quality3 int8 NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT material_balance_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_balance_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT fk_material_balance_store_id FOREIGN KEY (store_id) REFERENCES public.store(id) ON DELETE CASCADE,
	CONSTRAINT material_balance_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_minimum definition

-- Drop table

-- DROP TABLE public.material_minimum;

CREATE TABLE public.material_minimum (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	material_id uuid NOT NULL,
	store_id uuid NOT NULL,
	minimum float4 NOT NULL,
	maximum float4 NOT NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT material_minimum_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_minimum_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT fk_material_minimum_store_id FOREIGN KEY (store_id) REFERENCES public.store(id) ON DELETE CASCADE,
	CONSTRAINT material_minimum_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_prices definition

-- Drop table

-- DROP TABLE public.material_prices;

CREATE TABLE public.material_prices (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	material_id uuid NOT NULL,
	currency_id uuid NULL,
	currency_val float4 NULL,
	vat_rate float4 NOT NULL,
	average_purchase float4 NULL,
	biggest_purchase float4 NULL,
	pricing_policy float4 NULL,
	purchase_date date NULL,
	average_sales float4 NULL,
	largest_sales float4 NULL,
	last_price float4 NULL,
	sales_date date NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT material_prices_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_prices_currency_id FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT fk_material_prices_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT material_prices_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_prices_details definition

-- Drop table

-- DROP TABLE public.material_prices_details;

CREATE TABLE public.material_prices_details (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	material_id uuid NOT NULL,
	price_type int4 NOT NULL,
	unit1 float4 NULL,
	unit2 float4 NULL,
	unit3 float4 NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT material_prices_details_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_prices_details_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT material_prices_details_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.material_specifications definition

-- Drop table

-- DROP TABLE public.material_specifications;

CREATE TABLE public.material_specifications (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	material_id uuid NOT NULL,
	specification text NOT NULL,
	value float4 NOT NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT material_specifications_pkey PRIMARY KEY (id),
	CONSTRAINT fk_material_specifications_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT material_specifications_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.notification definition

-- Drop table

-- DROP TABLE public.notification;

CREATE TABLE public.notification (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	title text NULL,
	body text NOT NULL,
	url text NULL,
	status bool DEFAULT false NULL,
	user_id uuid NOT NULL,
	tenant_id uuid NULL,
	entity text NULL,
	"target" text NULL,
	CONSTRAINT notification_pkey PRIMARY KEY (id),
	CONSTRAINT fk_notification_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT notification_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.owner_expenses definition

-- Drop table

-- DROP TABLE public.owner_expenses;

CREATE TABLE public.owner_expenses (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" date NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	receipt_number text NULL,
	building_id uuid NOT NULL,
	owner_id uuid NOT NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT expenses_types_pkey PRIMARY KEY (id),
	CONSTRAINT expenses_types_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public."owner"(id) ON DELETE CASCADE,
	CONSTRAINT owner_expenses_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT owner_expenses_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.owner_expenses_details definition

-- Drop table

-- DROP TABLE public.owner_expenses_details;

CREATE TABLE public.owner_expenses_details (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" date NULL,
	amount float4 NOT NULL,
	note text NULL,
	tenant_id uuid NULL,
	owner_expenses_types_id uuid NOT NULL,
	receipt_number text NULL,
	owner_expenses_id uuid NOT NULL,
	"number" int2 NULL,
	CONSTRAINT owner_expenses_details_pkey PRIMARY KEY (id),
	CONSTRAINT owner_expenses_details_owner_expenses_id_fkey FOREIGN KEY (owner_expenses_id) REFERENCES public.owner_expenses(id) ON DELETE CASCADE,
	CONSTRAINT owner_expenses_details_owner_expenses_types_id_fkey FOREIGN KEY (owner_expenses_types_id) REFERENCES public.owner_expenses_types(id) ON DELETE CASCADE,
	CONSTRAINT owner_expenses_details_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.parking definition

-- Drop table

-- DROP TABLE public.parking;

CREATE TABLE public.parking (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	building_id uuid NOT NULL,
	parking_no text NOT NULL,
	floor_no text NULL,
	area numeric NULL,
	area_unit text NULL,
	parking_kind int2 DEFAULT '1'::smallint NOT NULL,
	description text NULL,
	"view" text NULL,
	customer_id uuid NULL,
	has_lawsuit bool DEFAULT false NULL,
	cost_center_id uuid NULL,
	purchase_date date NULL,
	note text NULL,
	flat_owner_id uuid NULL,
	y_index int8 NULL,
	x_index int8 NULL,
	hex varchar NULL,
	property_values_id uuid NULL,
	property_type int4 NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	row_index int8 NULL,
	asset_hash varchar NULL,
	main_cost_center_id uuid NULL,
	code int8 NULL,
	"blocked" bool NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT parking_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT parking_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT parking_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT parking_flat_owner_id_fkey FOREIGN KEY (flat_owner_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT parking_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT parking_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.parking_accumulate definition

-- Drop table

-- DROP TABLE public.parking_accumulate;

CREATE TABLE public.parking_accumulate (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int4 NULL,
	main_parking_id uuid NOT NULL,
	parking_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT parking_accumulate_main_parking_id_fkey FOREIGN KEY (main_parking_id) REFERENCES public.parking(id) ON DELETE CASCADE,
	CONSTRAINT parking_accumulate_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE,
	CONSTRAINT parking_accumulate_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.parking_pictures definition

-- Drop table

-- DROP TABLE public.parking_pictures;

CREATE TABLE public.parking_pictures (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	parking_id uuid NOT NULL,
	picture text NULL,
	tenant_id uuid NULL,
	CONSTRAINT parking_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT parking_pictures_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.parking_rental_price definition

-- Drop table

-- DROP TABLE public.parking_rental_price;

CREATE TABLE public.parking_rental_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	parking_id uuid NOT NULL,
	"date" date NULL,
	price numeric NOT NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT parking_rental_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_rental_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT public_parking_rental_price_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.parking_selling_price definition

-- Drop table

-- DROP TABLE public.parking_selling_price;

CREATE TABLE public.parking_selling_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" date NOT NULL,
	parking_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT parking_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_parking_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_parking_selling_price_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.reservation_property definition

-- Drop table

-- DROP TABLE public.reservation_property;

CREATE TABLE public.reservation_property (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	payment_method int4 NULL,
	tenant_id uuid NULL,
	CONSTRAINT reservation_property_number_key UNIQUE (number),
	CONSTRAINT reservation_property_pkey PRIMARY KEY (id),
	CONSTRAINT fk_reservation_property_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_credit_account_id_fkey FOREIGN KEY (credit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_credit_cost_center_fkey FOREIGN KEY (credit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_debit_account_id_fkey FOREIGN KEY (debit_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_reservation_property_debit_cost_center_fkey FOREIGN KEY (debit_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT reservation_property_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE
);


-- public.service definition

-- Drop table

-- DROP TABLE public.service;

CREATE TABLE public.service (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" serial4 NOT NULL,
	created_at timestamp DEFAULT now() NOT NULL,
	start_date timestamp NULL,
	end_date timestamp NULL,
	building_id uuid NULL,
	unit_id uuid NULL,
	unit_type int4 NULL,
	total float8 DEFAULT '0'::double precision NOT NULL,
	code int4 DEFAULT 1 NOT NULL,
	status int4 DEFAULT 1 NOT NULL,
	supervisor_user_id uuid NULL,
	tenant_id uuid NOT NULL,
	owner_account_id uuid NULL,
	payment_method int2 NULL,
	CONSTRAINT service_code_check CHECK ((code = ANY (ARRAY[1, 2, 3]))),
	CONSTRAINT service_pkey PRIMARY KEY (id),
	CONSTRAINT service_status_check CHECK ((status = ANY (ARRAY[1, 2, 3, 4, 5, 6, 7, 8]))),
	CONSTRAINT service_unit_type_check CHECK ((unit_type = ANY (ARRAY[1, 2, 3, 4, 5]))),
	CONSTRAINT fk_service_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT service_owner_account_id_fkey FOREIGN KEY (owner_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT service_supervisor_user_id_fkey FOREIGN KEY (supervisor_user_id) REFERENCES public."user"(id)
);


-- public.service_lack_reason definition

-- Drop table

-- DROP TABLE public.service_lack_reason;

CREATE TABLE public.service_lack_reason (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	paused_date date NOT NULL,
	continue_date date NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NULL,
	lack_reason_id uuid NULL,
	lack_reason_code int4 NOT NULL,
	worker_user_id uuid NULL,
	CONSTRAINT service_lack_reason_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_lack_reason_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_lack_reason_lack_reason_id_fkey FOREIGN KEY (lack_reason_id) REFERENCES public.lack_reason(id) ON DELETE CASCADE,
	CONSTRAINT service_lack_reason_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT service_lack_reason_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.service_material definition

-- Drop table

-- DROP TABLE public.service_material;

CREATE TABLE public.service_material (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamp DEFAULT now() NOT NULL,
	service_id uuid NOT NULL,
	material_id uuid NULL,
	tenant_id uuid NOT NULL,
	price float4 DEFAULT '0'::real NOT NULL,
	quantity int4 DEFAULT 1 NOT NULL,
	status int4 DEFAULT 1 NULL,
	worker_user_id uuid NULL,
	"name" text NULL,
	ltnname text NULL,
	supervisor_user_id uuid NULL,
	CONSTRAINT service_material_pkey1 PRIMARY KEY (id),
	CONSTRAINT service_material_material_id_fkey FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE,
	CONSTRAINT service_material_service_id_fkey1 FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT service_material_supervisor_user_id_fkey FOREIGN KEY (supervisor_user_id) REFERENCES public."user"(id) ON DELETE CASCADE,
	CONSTRAINT service_material_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_material_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.service_worker definition

-- Drop table

-- DROP TABLE public.service_worker;

CREATE TABLE public.service_worker (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	worker_notes text NULL,
	category_id uuid NOT NULL,
	worker_user_id uuid NULL,
	worker_status int4 DEFAULT 1 NOT NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	category_problem_id uuid NOT NULL,
	total_minutes int8 NOT NULL,
	booking_start_date timestamp NOT NULL,
	booking_end_date timestamp NULL,
	booking_completed_date timestamp NULL,
	booking_start_time time NULL,
	description text NULL,
	CONSTRAINT service_worker_pkey PRIMARY KEY (id),
	CONSTRAINT service_worker_status_check CHECK ((worker_status = ANY (ARRAY[1, 2, 3]))),
	CONSTRAINT fk_service_worker_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_worker_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id),
	CONSTRAINT service_worker_category_problem_id_fkey FOREIGN KEY (category_problem_id) REFERENCES public.category_problem(id) ON DELETE SET NULL,
	CONSTRAINT service_worker_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT service_worker_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id)
);


-- public.shop definition

-- Drop table

-- DROP TABLE public.shop;

CREATE TABLE public.shop (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	building_id uuid NOT NULL,
	shop_no text NOT NULL,
	description text NULL,
	x_index int8 NULL,
	y_index int8 NULL,
	cost_center_id uuid NULL,
	kind text NULL,
	area numeric NULL,
	area_unit text NULL,
	"view" text NULL,
	license1 text NULL,
	license2 text NULL,
	unified_num text NULL,
	has_lawsuit bool DEFAULT false NULL,
	customer_id uuid NULL,
	customer_owner_id uuid NULL,
	water_meter text NULL,
	electricity_meter text NULL,
	bond_type text NULL,
	bond_no text NULL,
	bond_date date NULL,
	note text NULL,
	property_values_id uuid NULL,
	hex varchar NULL,
	floort_no text NULL,
	property_type int4 NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	row_index int8 NULL,
	asset_hash varchar NULL,
	main_cost_center_id uuid NULL,
	shop_kind int4 NULL,
	code int8 NULL,
	"blocked" bool NULL,
	floor_no text NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT shop_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT shop_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT shop_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT shop_customer_owner_id_fkey FOREIGN KEY (customer_owner_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT shop_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT shop_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.shop_accumulate definition

-- Drop table

-- DROP TABLE public.shop_accumulate;

CREATE TABLE public.shop_accumulate (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int4 NULL,
	main_shop_id uuid NOT NULL,
	shop_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT shop_accumulate_main_shop_id_fkey FOREIGN KEY (main_shop_id) REFERENCES public.shop(id) ON DELETE CASCADE,
	CONSTRAINT shop_accumulate_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE,
	CONSTRAINT shop_accumulate_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.shop_fixed_assets definition

-- Drop table

-- DROP TABLE public.shop_fixed_assets;

CREATE TABLE public.shop_fixed_assets (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" timestamptz DEFAULT now() NOT NULL,
	shop_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	cost_price float4 NULL,
	cost_currency_id uuid NULL,
	rent float4 NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" date NOT NULL,
	shop_id uuid NOT NULL,
	price float4 NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT shop_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_shop_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT shop_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT shop_selling_price_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE CASCADE
);


-- public.voucher_main_data definition

-- Drop table

-- DROP TABLE public.voucher_main_data;

CREATE TABLE public.voucher_main_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	currency_id uuid NULL,
	note text NULL,
	feedback bool DEFAULT false NOT NULL,
	seller_id uuid NULL,
	connect_with int4 NULL,
	debit_amount float4 DEFAULT '0'::real NOT NULL,
	debit_total float8 DEFAULT '0'::double precision NOT NULL,
	credit_total float8 DEFAULT '0'::double precision NOT NULL,
	credit_amount float8 DEFAULT '0'::double precision NOT NULL,
	account_id uuid NOT NULL,
	connect_with_id uuid NULL,
	currency_val float4 NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	voucher_type int4 NOT NULL,
	gen_entires bool DEFAULT false NOT NULL,
	is_deleted bool DEFAULT false NULL,
	is_first_batch bool NULL,
	tenant_id uuid NULL,
	voucher_pattern_id uuid NULL,
	gen_entries bool NULL,
	internal_number int4 NULL,
	CONSTRAINT voucher_main_data_number_key UNIQUE (number),
	CONSTRAINT voucher_main_data_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_main_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_main_data_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT voucher_pattern_id_fkey FOREIGN KEY (voucher_pattern_id) REFERENCES public.voucher_pattern(id) ON DELETE CASCADE
);


-- public.voucher_pictures definition

-- Drop table

-- DROP TABLE public.voucher_pictures;

CREATE TABLE public.voucher_pictures (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	voucher_main_data_id uuid NOT NULL,
	picture text NOT NULL,
	tenant_id uuid NULL,
	CONSTRAINT voucher_pictures_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_pictures_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT voucher_pictures_voucher_main_data_id_fkey FOREIGN KEY (voucher_main_data_id) REFERENCES public.voucher_main_data(id) ON DELETE CASCADE
);


-- public.worker_building definition

-- Drop table

-- DROP TABLE public.worker_building;

CREATE TABLE public.worker_building (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	user_id uuid NOT NULL,
	building_id uuid NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT worker_building_pkey PRIMARY KEY (id),
	CONSTRAINT worker_building_user_id_building_id_key UNIQUE (user_id, building_id),
	CONSTRAINT worker_building_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT worker_building_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT worker_building_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE
);


-- public.worker_rate definition

-- Drop table

-- DROP TABLE public.worker_rate;

CREATE TABLE public.worker_rate (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamp DEFAULT now() NOT NULL,
	description text NULL,
	rating int4 NOT NULL,
	service_id uuid NOT NULL,
	customer_user_id uuid NOT NULL,
	worker_user_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT worker_rate_pkey PRIMARY KEY (id),
	CONSTRAINT worker_rate_rating_check CHECK (((rating >= 1) AND (rating <= 5))),
	CONSTRAINT fk_worker_rate_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT worker_rate_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public."user"(id),
	CONSTRAINT worker_rate_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id),
	CONSTRAINT worker_rate_worker_user_id_fkey FOREIGN KEY (worker_user_id) REFERENCES public."user"(id)
);


-- public.accounting_voucher_grid_data definition

-- Drop table

-- DROP TABLE public.accounting_voucher_grid_data;

CREATE TABLE public.accounting_voucher_grid_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	account_id uuid NULL,
	debit float4 DEFAULT '0'::real NULL,
	credit float4 DEFAULT '0'::real NULL,
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


-- public.apartment definition

-- Drop table

-- DROP TABLE public.apartment;

CREATE TABLE public.apartment (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	building_id uuid NOT NULL,
	apartment_no varchar NULL,
	floor_no text NULL,
	description text NULL,
	category text NULL,
	area numeric NULL,
	area_unit varchar DEFAULT ''::character varying NULL,
	"view" text NULL,
	bathroom_count int8 NULL,
	balcony_count int8 NULL,
	has_lawsuit bool DEFAULT false NULL,
	main_cost_center_id uuid NULL,
	cost_center_id uuid NULL,
	property_type text NULL,
	water_meter text NULL,
	electricity_meter text NULL,
	"statement" text NULL,
	x_index int8 NULL,
	y_index int8 NULL,
	room_count numeric NULL,
	property_values_id uuid NULL,
	hex varchar NULL,
	cost_price float8 NULL,
	amount_paid float8 NULL,
	cost_currency_id uuid NULL,
	note text NULL,
	apartment_kind int8 DEFAULT '1'::bigint NOT NULL,
	row_index int8 NULL,
	asset_hash varchar NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	code int8 NULL,
	"blocked" bool NULL,
	kind text NULL,
	tenant_id uuid NULL,
	CONSTRAINT apartment_pkey PRIMARY KEY (id),
	CONSTRAINT apartment_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT fk_apartment_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_cost_currency_id_fkey FOREIGN KEY (cost_currency_id) REFERENCES public.currency(id) ON DELETE SET NULL,
	CONSTRAINT public_apartment_main_cost_center_id_fkey FOREIGN KEY (main_cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_property_values_id_fkey FOREIGN KEY (property_values_id) REFERENCES public.property_values(id) ON DELETE CASCADE
);


-- public.apartment_accumulate definition

-- Drop table

-- DROP TABLE public.apartment_accumulate;

CREATE TABLE public.apartment_accumulate (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" int4 NULL,
	main_apartment_id uuid NOT NULL,
	apartment_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	CONSTRAINT apartment_accumulate_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT apartment_accumulate_main_apartment_id_fkey FOREIGN KEY (main_apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT apartment_accumulate_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.apartment_pictures definition

-- Drop table

-- DROP TABLE public.apartment_pictures;

CREATE TABLE public.apartment_pictures (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	apartment_id uuid NULL,
	"date" date NULL,
	price numeric NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT apartment_rental_price_pkey PRIMARY KEY (id),
	CONSTRAINT fk_apartment_rental_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_rental_price_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_rental_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL
);


-- public.apartment_selling_price definition

-- Drop table

-- DROP TABLE public.apartment_selling_price;

CREATE TABLE public.apartment_selling_price (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	apartment_id uuid NULL,
	"date" date NULL,
	price numeric NULL,
	currency_id uuid NULL,
	note text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	apartment_kind varchar NULL,
	CONSTRAINT apartment_selling_price_pkey PRIMARY KEY (id),
	CONSTRAINT apartment_selling_price_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE CASCADE,
	CONSTRAINT fk_apartment_selling_price_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_apartment_selling_price_currency_id_fkey FOREIGN KEY (currency_id) REFERENCES public.currency(id) ON DELETE SET NULL
);


-- public.bill_material_details definition

-- Drop table

-- DROP TABLE public.bill_material_details;

CREATE TABLE public.bill_material_details (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	bill_id uuid NOT NULL,
	material_id uuid NOT NULL,
	quantity int4 NOT NULL,
	unit_price float4 NOT NULL,
	total_price float4 NOT NULL,
	note text NULL,
	tenant_id uuid NOT NULL,
	vat_amount float4 DEFAULT 0 NULL,
	net float4 NULL,
	vat_percentage float4 NULL,
	unit text NULL,
	CONSTRAINT bill_material_details_pkey PRIMARY KEY (id),
	CONSTRAINT bill_material_details_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_material_details_bill_id FOREIGN KEY (bill_id) REFERENCES public.bill(id) ON DELETE CASCADE,
	CONSTRAINT fk_bill_material_details_material_id FOREIGN KEY (material_id) REFERENCES public.material(id) ON DELETE CASCADE
);


-- public.contract definition

-- Drop table

-- DROP TABLE public.contract;

CREATE TABLE public.contract (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	contract_type int4 NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	flat_type int4 NOT NULL,
	is_archived bool DEFAULT false NULL,
	is_deleted bool DEFAULT false NULL,
	status int4 DEFAULT 1 NOT NULL,
	code int4 NOT NULL,
	contracts_number_prev int4 NULL,
	contracts_number_current int4 NULL,
	lawsuit bool DEFAULT false NULL,
	feedback bool DEFAULT false NULL,
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
	contract_duration varchar NULL,
	cost_center_id uuid NULL,
	description text NULL,
	issue_date date NULL,
	note text NULL,
	property_delivery_date date NULL,
	tenant_id uuid NULL,
	villa_id uuid NULL,
	contract_pattern_id uuid NULL,
	vat_rate float4 NULL,
	vat_value float4 NULL,
	vat_account_id uuid NULL,
	price_before_vat float4 NULL,
	internal_number int4 NULL,
	CONSTRAINT contract_pkey PRIMARY KEY (id),
	CONSTRAINT contract_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT contract_pattern_id_fkey FOREIGN KEY (contract_pattern_id) REFERENCES public.contract_pattern(id) ON DELETE CASCADE,
	CONSTRAINT contract_villa_id_fkey FOREIGN KEY (villa_id) REFERENCES public.villa(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_apartment_id_fkey FOREIGN KEY (apartment_id) REFERENCES public.apartment(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_discount_account_id_fkey FOREIGN KEY (discount_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_land_id_fkey FOREIGN KEY (land_id) REFERENCES public.land(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_lessor_id_fkey FOREIGN KEY (lessor_id) REFERENCES public.lessor(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE RESTRICT,
	CONSTRAINT public_contract_revenue_account_id_fkey FOREIGN KEY (revenue_account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_contract_shop_id_fkey FOREIGN KEY (shop_id) REFERENCES public.shop(id) ON DELETE RESTRICT,
	CONSTRAINT vat_account_id_fkey FOREIGN KEY (vat_account_id) REFERENCES public.account(id)
);


-- public.contract_commission definition

-- Drop table

-- DROP TABLE public.contract_commission;

CREATE TABLE public.contract_commission (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	gen_entries bool NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" numeric NULL,
	entrynumber int8 NULL,
	contract_id uuid NOT NULL,
	"date" timestamp NULL,
	account_id uuid NULL,
	value float8 NULL,
	create_entry bool DEFAULT true NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	contract_id uuid NOT NULL,
	value float4 NULL,
	note text NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_fixed_assets_pkey PRIMARY KEY (id),
	CONSTRAINT contract_fixed_assets_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_fixed_assets_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_linked_parking definition

-- Drop table

-- DROP TABLE public.contract_linked_parking;

CREATE TABLE public.contract_linked_parking (
	created_at timestamptz DEFAULT now() NOT NULL,
	contract_id uuid NOT NULL,
	building_id uuid NULL,
	account_id uuid NULL,
	main_contract_id uuid NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"date" timestamp DEFAULT now() NULL,
	fee_amount float4 NULL,
	account_id uuid NULL,
	notes text NULL,
	contract_id uuid NOT NULL,
	tenant_id uuid NULL,
	"number" int2 NULL,
	CONSTRAINT contract_other_fees_pkey PRIMARY KEY (id),
	CONSTRAINT contract_other_fees_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT contract_other_fees_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_other_fees_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_pictures definition

-- Drop table

-- DROP TABLE public.contract_pictures;

CREATE TABLE public.contract_pictures (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	contract_id uuid NOT NULL,
	receipt_number int4 NULL,
	receipt_date date NULL,
	receipt_statement text NULL,
	tenant_id uuid NULL,
	"number" int4 NULL,
	CONSTRAINT contract_receipt_number_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_receipt_number_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_termination definition

-- Drop table

-- DROP TABLE public.contract_termination;

CREATE TABLE public.contract_termination (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	termination_date date NULL,
	owner_total_amount float4 DEFAULT '0'::real NULL,
	owner_rest_amount float4 NULL,
	round_to int4 NULL,
	revenue_note text NULL,
	evacuation_request bool NULL,
	evacuation_date date NULL,
	clearance_printed bool NULL,
	clearance_printed_date date NULL,
	contract_id uuid NOT NULL,
	terminated bool DEFAULT false NOT NULL,
	gen_entries bool NULL,
	tenant_id uuid NULL,
	CONSTRAINT contract_termination_pkey PRIMARY KEY (id),
	CONSTRAINT contract_termination_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT fk_contract_termination_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE
);


-- public.contract_terms definition

-- Drop table

-- DROP TABLE public.contract_terms;

CREATE TABLE public.contract_terms (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	description text NOT NULL,
	evacuation_date date NOT NULL,
	contract_id uuid NOT NULL,
	user_account_id uuid NOT NULL,
	tenant_id uuid NULL,
	request_status int4 DEFAULT 1 NOT NULL,
	note text NULL,
	request_id int4 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	tenant_id uuid NULL,
	has_first_batch bool NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	contract_id uuid NOT NULL,
	lawsuit_no text NULL,
	opened_lawsuit_date date NULL,
	building_id uuid NULL,
	unit_id uuid DEFAULT gen_random_uuid() NULL,
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
	CONSTRAINT lawsuit_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.building(id) ON DELETE CASCADE,
	CONSTRAINT lawsuit_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT public_lawsuit_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.account(id) ON DELETE CASCADE
);


-- public.lawsuit_internal_expenses definition

-- Drop table

-- DROP TABLE public.lawsuit_internal_expenses;

CREATE TABLE public.lawsuit_internal_expenses (
	created_at timestamptz DEFAULT now() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
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
	CONSTRAINT parking_wallet_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id),
	CONSTRAINT parking_wallet_parking_id_fkey FOREIGN KEY (parking_id) REFERENCES public.parking(id) ON DELETE CASCADE
);


-- public.service_customer_request definition

-- Drop table

-- DROP TABLE public.service_customer_request;

CREATE TABLE public.service_customer_request (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	"number" serial4 NOT NULL,
	contract_id uuid NOT NULL,
	customer_user_id uuid NOT NULL,
	service_id uuid NOT NULL,
	tenant_id uuid NOT NULL,
	description text NOT NULL,
	CONSTRAINT service_customer_request_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_customer_request_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT service_customer_request_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT service_customer_request_customer_user_id_fkey FOREIGN KEY (customer_user_id) REFERENCES public."user"(id) ON DELETE CASCADE,
	CONSTRAINT service_customer_request_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.service(id) ON DELETE CASCADE
);


-- public.contract_fines_grid definition

-- Drop table

-- DROP TABLE public.contract_fines_grid;

CREATE TABLE public.contract_fines_grid (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	termination_id uuid NULL,
	contract_id uuid NULL,
	account_id uuid NULL,
	fee_amount float4 NULL,
	notes text NULL,
	tenant_id uuid NULL,
	CONSTRAINT termination_fines_grid_pkey PRIMARY KEY (id),
	CONSTRAINT fk_termination_fines_grid_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_contract_id_fkey FOREIGN KEY (contract_id) REFERENCES public.contract(id) ON DELETE CASCADE,
	CONSTRAINT termination_fines_grid_contract_termination_fines_id_fkey FOREIGN KEY (termination_id) REFERENCES public.contract_termination(id) ON DELETE CASCADE
);


-- public.voucher_grid_data definition

-- Drop table

-- DROP TABLE public.voucher_grid_data;

CREATE TABLE public.voucher_grid_data (
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	account_id uuid NULL,
	debit float4 DEFAULT '0'::real NOT NULL,
	credit float4 DEFAULT '0'::real NOT NULL,
	cost_center_id uuid NULL,
	voucher_main_data_id uuid NOT NULL,
	note text NULL,
	tenant_id uuid NULL,
	internal_number int4 NULL,
	CONSTRAINT voucher_grid_data_pkey PRIMARY KEY (id),
	CONSTRAINT fk_voucher_grid_data_tenant_id FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_grid_data_account_id_fkey FOREIGN KEY (account_id) REFERENCES public.account(id) ON DELETE CASCADE,
	CONSTRAINT public_voucher_grid_data_cost_center_id_fkey FOREIGN KEY (cost_center_id) REFERENCES public.cost_center(id) ON DELETE CASCADE,
	CONSTRAINT voucher_grid_data_voucher_main_data_id_fkey FOREIGN KEY (voucher_main_data_id) REFERENCES public.voucher_main_data(id) ON DELETE CASCADE
);


-- public.cheque definition

-- Drop table

-- DROP TABLE public.cheque;

CREATE TABLE public.cheque (
	created_at timestamptz DEFAULT now() NOT NULL,
	"number" int8 GENERATED BY DEFAULT AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1 CACHE 1 NO CYCLE) NOT NULL,
	code int4 NOT NULL,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	seller_id uuid NULL,
	account_id uuid NOT NULL,
	beneficiary_name text NULL,
	cost_center_id uuid NULL,
	note text NULL,
	due_date date NULL,
	end_due_date date NULL,
	without_due_date bool DEFAULT false NULL,
	bank_id uuid NULL,
	observe_account_id uuid NULL,
	observe_cost_center_id uuid NULL,
	note1 text NULL,
	note2 text NULL,
	deport_status bool DEFAULT false NOT NULL,
	collection_status bool DEFAULT false NOT NULL,
	partial_collection_status bool DEFAULT false NOT NULL,
	return_status bool DEFAULT false NOT NULL,
	deposit_status bool DEFAULT false NULL,
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	connect_with int4 DEFAULT 1 NULL,
	connect_with_id uuid NULL,
	feedback bool DEFAULT false NOT NULL,
	gen_entries bool NULL,
	currency_val float4 DEFAULT '0'::real NOT NULL,
	obverse_account_note text NULL,
	installment_id uuid NULL,
	is_deleted bool DEFAULT false NULL,
	is_archived bool DEFAULT false NULL,
	apartment_id uuid NULL,
	shop_id uuid NULL,
	parking_id uuid NULL,
	tenant_id uuid NULL,
	cheque_pattern_id uuid NULL,
	internal_number int4 NULL,
	customer_id uuid NULL,
	CONSTRAINT cheque_pkey1 PRIMARY KEY (id),
	CONSTRAINT cheque_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public."user"(id),
	CONSTRAINT cheque_pattern_id_fkey FOREIGN KEY (cheque_pattern_id) REFERENCES public.cheque_pattern(id) ON DELETE CASCADE,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	feedback bool DEFAULT false NOT NULL,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NULL,
	note text NULL,
	commission_value float4 DEFAULT '0'::real NOT NULL,
	commission_percentage float4 DEFAULT '0'::real NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	feedback bool DEFAULT false NOT NULL,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	feedback bool DEFAULT false NOT NULL,
	amount float4 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NULL,
	note text NULL,
	commission_value float4 DEFAULT '0'::real NOT NULL,
	commission_percentage float4 DEFAULT '0'::real NOT NULL,
	commission_debit_id uuid NULL,
	commission_credit_id uuid NULL,
	commission_cost_center_id uuid NULL,
	commission_note text NULL,
	accounting_voucher_main_data_id uuid NULL,
	total_value float8 DEFAULT '0'::double precision NOT NULL,
	total_sum float8 DEFAULT '0'::double precision NOT NULL,
	rest float8 DEFAULT '0'::double precision NOT NULL,
	total_sum_prev float8 DEFAULT '0'::double precision NOT NULL,
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
	id uuid DEFAULT gen_random_uuid() NOT NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	feedback bool DEFAULT false NOT NULL,
	amount float8 NOT NULL,
	currency_id uuid NOT NULL,
	debit_account_id uuid NOT NULL,
	credit_account_id uuid NOT NULL,
	cost_center_id uuid NULL,
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


-- public.account_hierarchy_view source

CREATE OR REPLACE VIEW public.account_hierarchy_view
AS WITH RECURSIVE account_hierarchy AS (
         SELECT a.id AS account_id,
            a.name AS account_name,
            a.parent_id,
            a.final_id,
            a.name AS final_name,
            a.code AS internal_number,
            NULL::character varying AS parent_name,
            1 AS depth,
            ARRAY[a.id] AS hierarchy_path,
            row_number() OVER (ORDER BY a.id) AS row_num,
            row_number() OVER (ORDER BY a.id)::text AS hierarchy_label
           FROM account a
          WHERE a.parent_id IS NULL
        UNION ALL
         SELECT a.id AS account_id,
            a.name AS account_name,
            a.parent_id,
            a.final_id,
            a.name AS final_name,
            a.code AS internal_number,
            ah.account_name AS parent_name,
            ah.depth + 1 AS depth,
            ah.hierarchy_path || a.id AS hierarchy_path,
            row_number() OVER (PARTITION BY a.parent_id ORDER BY a.id) AS row_num,
            ah.hierarchy_label || row_number() OVER (PARTITION BY a.parent_id ORDER BY a.id) AS hierarchy_label
           FROM account a
             JOIN account_hierarchy ah ON a.parent_id = ah.account_id
        )
 SELECT account_id,
    account_name,
    parent_id,
    final_id,
    final_name,
    code,
    parent_name,
    depth,
    hierarchy_path,
    row_num,
    hierarchy_label
   FROM account_hierarchy_view;



-- DROP FUNCTION public.get_aggregated_totals(_int4);

CREATE OR REPLACE FUNCTION public.get_aggregated_totals(internal_numbers integer[])
 RETURNS TABLE(account_id integer, account_name text, parent_id integer, parent_name text, final_id integer, final_name text, internal_number integer, hierarchy_path text, level integer, total_debit numeric, total_credit numeric)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY WITH RECURSIVE account_hierarchy AS (
        -- Root nodes
        SELECT
            a.id AS account_id,
            a.name AS account_name,
            a.parent_id,
            a.final_id,
            a.name AS final_name,
            a.internal_number,
            CAST(NULL AS VARCHAR) AS parent_name,  
            1 AS depth,  
            ARRAY[id] AS hierarchy_path,  
            ROW_NUMBER() OVER (ORDER BY id) AS row_num,  
            CAST(ROW_NUMBER() OVER (ORDER BY id) AS TEXT) AS hierarchy_label
        FROM "account" a
        WHERE parent_id IS NULL 
        --OR internal_number = ANY(internal_numbers)

        UNION ALL

        -- Recursive part: traverse children
        SELECT
            a.id AS account_id,
            a.name AS account_name,
            a.parent_id,
            a.final_id,
            a.name AS final_name,
            a.internal_number,
            ah.account_name AS parent_name,
            ah.depth + 1 AS depth,
            ah.hierarchy_path || a.id AS hierarchy_path,
            ROW_NUMBER() OVER (PARTITION BY a.parent_id ORDER BY a.id) AS row_num,
            CAST(ah.hierarchy_label || ROW_NUMBER() OVER (PARTITION BY a.parent_id ORDER BY a.id) AS TEXT) AS hierarchy_label
        FROM "account" a
        INNER JOIN account_hierarchy ah ON a.parent_id = ah.account_id
    ),
    account_totals AS (
        SELECT
            ah.account_id,
            ah.account_name,
            ah.parent_id,
            ah.parent_name,
            ah.final_id,
            ah.final_name,
            ah.internal_number,
            ah.hierarchy_label,
            ah.depth AS level,
            COALESCE(SUM(egd.debit), 0) AS total_debit,
            COALESCE(SUM(egd.credit), 0) AS total_credit
        FROM account_hierarchy ah
        LEFT JOIN "entry_grid_data" egd ON egd.account_id = ah.account_id
        GROUP BY ah.account_id, ah.account_name, ah.parent_id, ah.parent_name, ah.final_id, ah.final_name, ah.internal_number, ah.hierarchy_label, ah.depth
    )
    SELECT
        at.account_id,
        at.account_name,
        at.parent_id,
        at.parent_name,
        at.final_id,
        at.final_name,
        at.internal_number,
        at.hierarchy_label AS hierarchy_path,
        at.level,
        COALESCE(SUM(at.total_debit), 0) AS total_debit,
        COALESCE(SUM(at.total_credit), 0) AS total_credit
    FROM account_totals at
    WHERE 
        at.internal_number = ANY(internal_numbers)
    OR at.parent_id IN (
        SELECT id FROM "account" WHERE internal_number = ANY(internal_numbers) AND parent_id IS NULL
    )
    GROUP BY 
        at.account_id, at.account_name, at.parent_id, at.parent_name, at.final_id, at.final_name, at.internal_number, at.hierarchy_label, at.level
    ORDER BY at.hierarchy_label;
END;
$function$
;