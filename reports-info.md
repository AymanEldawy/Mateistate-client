# Contract Payments Report

## Filters

@properties in contract

    account_id
    apartment_kind
    automatic_selection
    clearance
    client_id
    lawsuit
    lessor_id
    owner_account_id

@properties in units

    blocked_units

- reviewed
- unreviewed
  contract_status `0 All` `1 expired` `2 not expired`
  payment_method `0 All` `1 cash` `2 installment` `3 by plan` `4 credit`
  termination_status `0 All` `1 terminated` `2 not terminated`
  installments `0 All` `1 with installments` `2 without installments`
  @property allow_cheques_date start_cheques_date end_cheques_date
  @property allow_date start_date end_date
  @property allow_collection_date start_collection_date end_collection_date
  # ?? expiry_date

## Columns

Note: (n) one of theme `apartment` `shop` `parking` `land` `villa`

| col               | table                    | description                                                                                |
| ----------------- | ------------------------ | ------------------------------------------------------------------------------------------ |
| number            | service                  |
| start_date        | service                  |
| end_date          | service                  |
| building          | building                 |
| unit_no           | (n)                      |
| unit_type         | (n)                      |
| is_default        | service                  |
| is_paid           | service                  |
| total             | service                  |
| code              | service                  |
| status            | service                  |
| contract_id       | contract                 |
| payment_method    | service_customer_request |
| customer_user     | user                     |
| phone             | service_customer_request |
| approved          | service_customer_request |
| returned          | service_customer_request |
| title             | service_worker           |
| description       | service_worker           |
| category          | service_worker           |
| worker            | user                     |
| worker_status     | service_worker           |
| worker_rate       | service_worker           |
| has_material      | service_material         | if in `service_material` true                                                              |
| lack_reason_count | service_lack_reason      | the count of records in table `service_lack_reason` that has `server_id` equal `server.id` |

## Columns

| col              | table     | description |
| ---------------- | --------- | ----------- |
| created_at       | materials |
| barcode          | materials |
| name             | materials |
| description      | materials |
| category_name    | category  |
| purchasing_price | materials |
| selling_price    | materials |
| currency_id      | currency  |
| currency_value   | materials |
| note             | materials |
| is_available     | materials |

## Filters

- name
- category `category.id`
- material_group `materia_group.id`
- @property `purchasing_price` purchasing_form purchasing_to purchasing between
- @property `selling_price` sale_form sale_to sale between
- available
- @property date `form` `to`






<!--  -->
Time 






















##
ترتيب ابجدي
في حالة شركة مختلفة انشاء 
في حالة عمل
