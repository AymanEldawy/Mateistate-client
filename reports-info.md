# Leased and non leased parking

## Filters

@properties in parking

    parking_no
    area_name
    blocked_units

@properties in contract

    leasing_status
    client_id
    lawsuit
    lessor_id
    contract_amount
    contract_status

- show_assembled_parking_that_contract_has_been_terminated
- show_parking_that_inside_assembled_parking

| col                    | table    | description                                |
| ---------------------- | -------- | ------------------------------------------ |
| parking_no             | parking  |
| parking_kind           | parking  |
| area_name              | parking  |
| description            | parking  |
| building_id            | building |
| leasing_status         |          | true if there is contract                  |
| contract_number        | contract |
| contract_value         | contract |
| start_duration_date    | contract |
| end_duration_date      | contract |
| previous_securing      | contract |
| current_securing_value | contract |
| lawsuit                | contract |
| feedback               | contract |
| total_securing_value   |          | previous_securing + current_securing_value |
| related_flats_no       |          | related contract apartment no              |

---

# Leased and non leased Villa

## Filters

@properties in villa

    villa_no
    area_form
    area_name
    area_no
    area_to
    basin_number
    complex_name
    allow_property_statement
    property_statement_type
    property_statement

@properties in contract

    client_id
    contract_status
    leasing_status
    lessor_id
    rent_form
    rent_to
    reviewed
    unreviewed
    allow_contract_statement
    contract_statement_type
    contract_statement

## Columns

| col             | table    | description      |
| --------------- | -------- | ---------------- |
| name            | villa    |
| complex_name    | villa    |
| area_name       | villa    |
| area_unit       | villa    |
| ownership_type  | villa    |
| area            | villa    |
| unit            | villa    |
| leasing_status  |          | true if contract |
| contract_status | contract |
| customer        | contract |
| feedback        | contract |

---

# units-will-vacated-report

## Filters

## Columns

| col                      | table                | description |
| ------------------------ | -------------------- | ----------- |
| unit_no                  | unit                 |
| unit_type                | unit                 |
| contract_number          | contract             |
| customer                 | contract             |
| from_date                | contract             |
| contract_value           | contract             |
| note                     | contract             |
| from_to                  | contract_termination |
| evacuation_date          | contract_termination |
| day_left                 |
| property_details         |
| contract_details         |
| print_warning            |
| warning_print            |
| number_of_times_printing |
| processing               | -                    |

---

# Report reserved-units-report

## Filters

@property property_no
@description ` parking_no` `apartment_no` `shop_no ` `land_no`
@property booking
@description`0 All` `1 received` `2 canceled`@property client_id
@description`reservation_property.client_id`@property unit_type
@description`1 apartment` `2 parking` `3 shop` `4 land`
@property remaining_days_of_number_of_reservation_is_smaller
@description ``

allow_booking_date -> from -> to `all reservation between these days`

## Columns

| col                        | table                            | description                            |
| -------------------------- | -------------------------------- | -------------------------------------- |
| unit_type                  | reservation_property             |
| customer                   | reservation_property             |
| property                   | reservation_property             |
| booking_date               | reservation_property             |
| booking_termination_date   | reservation_property             |
| building_id                | building                         |
| booking_canceled           | reservation_property             |
| note                       | reservation_property             |
| payment_date               | reservation_property             |
| payment_value              | reservation_property             |
| payment_available          | reservation_property.has_payment |
| payment_method             | reservation_property             |
| remaining_days_no          |                                  | the rest day count until to be vacated |
| booking_end_date_specified |

---

# Report leased_property_activity_report

## Filters

@property apartment_id
@property building_id
@property client_id
@property land_id
@property parking_id
@property shop_id
@property villa_id

- reviewed & unreviewed
- start_date & end_date

## Columns

Notes: (n) one of these `apartment_no` | `shop_no` | `parking_no`

| col              | table    | description                       |
| ---------------- | -------- | --------------------------------- |
| contract_type    | contract |
| building_id      | contract |
| client_id        | contract |
| feedback         | contract |
| units            | (n)      |
| from_date        |          | the unit empty from               |
| to_date          |          | the unit empty to                 |
| total_empty_days |          | the diff days between from and to |

## Properties

- apartment
- shop
- parking
- villa
- land

---

# Report Sold And Unsold Units Report

## Filters

@property area_name `A_no` |`S_no`
@property client_id contract.client_id
@property area_form - area_to `area`
@property from - to `contract.issue_date`
@property property_type @property description `description`
@property status `0 All` `1 sold` `2 unsold`
@property flats `boolean`
@property shops `boolean`

@property unit `unknown yet`

## Columns

Notes (n) one of `apartment` | `shop`

| col                      | table    | description           |
| ------------------------ | -------- | --------------------- |
| flat_no                  | (n)      |
| flat_kind                | (n)      |
| description              | (n)      |
| emirate                  | (n)      |
| area_name                | (n)      |
| building                 | building |
| flat_status              |          | true if contract sold |
| owner                    |
| lessor                   | contract |
| contract_type            | contract |
| contract_no              | contract |
| contract_value           | contract |
| contract_status          | contract |
| customer                 | contract |
| collected_cheques        |
| received_cash_payments   |
| total_collected_amount   |
| total_uncollected_amount |
| customer_balance         |

---

# Sold And Unsold Lands Report

## Filters

@properties in land

    name
    land_type
    area_name
    area_no
    area_form
    area_to
    basin_number

@properties in contract

    unreviewed
    reviewed
    client_id
    from to `contract.issue_date`

@property status `0 All` `1 sold` `2 unsold`
@property unit `unknown`

@property allow_contract_statement
@property contract_statement_type
@property contract_statement
@property property_statement_type
@property allow_property_statement
@property property_statement

## Columns

| col                    | table    | description                              |
| ---------------------- | -------- | ---------------------------------------- |
| name                   | land     |
| land_type              | land     |
| area_name              | land     |
| basin_number           | land     |
| status                 |          | true if contract sold                    |
| area                   | land     |
| land_details           | land     |
| customer               | contract |
| contract_date          | contract |
| contract_value         | contract |
| feedback               | contract |
| collected_cheque       |
| received_cash_payments |
| remaining_amount       |
| total_paid             |          | collected_cheque +received_cash_payments |

---

# Sold And Unsold Villas Report

## Filters

@properties in villa

    villa_no
    complex_name
    area_name
    area_form
    area_to
    basin_number

@properties in contract

    unreviewed
    reviewed
    client_id
    from to `contract.issue_date`

@property status `0 All` `1 sold` `2 unsold`
@property unit `unknown`

@property allow_contract_statement
@property contract_statement_type
@property contract_statement
@property property_statement_type
@property allow_property_statement
@property property_statement

## Columns

| col                    | table    | description                              |
| ---------------------- | -------- | ---------------------------------------- |
| villa_no               | villa    |
| complex_name           | villa    |
| area_name              | villa    |
| basin_number           | villa    |
| area_no                | villa    |
| villa_details          | villa    |
| status                 |          | true if contract sold                    |
| customer               | contract |
| contract_date          | contract |
| contract_details       | contract |
| contract_value         | contract |
| feedback               | contract |
| collected_cheque       |
| received_cash_payments |
| total_paid             |          | collected_cheque +received_cash_payments |
| remaining_amount       |

---

# Changes Flats Rent Pricing Report

## Filters

@property apartment_id
@property area
@property from - to

## Columns

Note

- all columns are required
- (n) one of `shop` - `apartment`

| col      | table             | description |
| -------- | ----------------- | ----------- |
| property | (n)               |
| floor    | (n)               |
| area     | (n)               |
| unit     | (n)               |
| date     | (n)\_rental_price |
| price    | (n)\_rental_price |
| currency | (n)\_rental_price |
| building | building          |

---

# Changes Flats Sale Pricing Report

## Filters

@property apartment_id
@property area
@property from - to

## Columns

Note

- all columns are required
- (n) one of `shop` - `apartment`

| col      | table              | description |
| -------- | ------------------ | ----------- |
| property | (n)                |
| floor    | (n)                |
| area     | (n)                |
| unit     | (n)                |
| date     | (n)\_selling_price |
| price    | (n)\_selling_price |
| currency | (n)\_selling_price |
| building | building           |

---

# Report

## Filters

@properties in contract
account_id  
client_id  
lessor_id  
paid_type  
reviewed  
unreviewed
clearance `0 All` `1 printed` `2 not printed`
payment_method `0 All` `1 cash` `2 installment` `3 by plan` `4 credit`
contract_amount `0 All` `1 with amount` `2 without amount`
contract_enter_status `0 All` `1 new` `2 renewal`
contract_status `0 All` `1 expired` `2 not expired`
contract_termination `0 All` `1 terminated` `2 not terminated`
termination_date `0 All` `1 smaller` `2 bigger` `3 equal` contract end date
installments `0 All` `1 with installments` `2 without installments`
lawsuit `0 All` `1 lawsuit` `2 no lawsuit`
lawsuit_status `0 All` `1 expired` `2 not expired`

@properties in flat
blocked_units `0 All` `1 blocked` `2 unblocked`
property_type  
description

@property date_by from to

    `0 All`
    `1 Contract start date`
    `2 Contract expire date`
    `3 Terminated date`
    `4 Contract issue date`
    `4 clearance print`
    `4 Evacuate date`

## Columns

| col                              | table                   | description                               |
| -------------------------------- | ----------------------- | ----------------------------------------- |
| flat_type                        | contract                |
| contract_type                    | contract                |
| contracts_number_prev            | contract                |
| contracts_number_current         | contract                |
| start_duration_date              | contract                |
| end_duration_date                | contract                |
| lessor_id                        | contract                |
| contact_value                    | contract                |
| number                           | contract                |
| client_id                        | contract                |
| status                           | contract                |
| total_discount_contract          | contract.final_price    |
| unit_id                          | (n)                     |
| building_id                      | building                |
| discount_value                   | contract                |
| discount_rate                    | contract                |
| description                      | contract                |
| lawsuit                          | contract                |
| feedback                         | contract                |
| previous_securing                | contract                |
| current_securing_value           | contract                |
| total_securing_value             |                         | previous_securing +current_securing_value |
| Contract Expired                 | contract_terminated     |
| terminated                       | contract_terminated     |
| termination_date                 | contract_terminated     |
| owner_rest_amount_plus           | contract_commission     |
| owner_rest_amount_minus          | contract_commission     |
| fines                            | contract_commission     |
| clearance_printed                | contract_commission     |
| clearance_printed_date           | contract_commission     |
| evacuation_request               | contract_commission     |
| evacuation_date                  | contract_commission     |
| commission_percentage            | contract_commission     |
| commission_value                 | contract_commission     |
| commission_from_owner_value      | contract_commission     |
| commission_from_owner_percentage | contract_commission     |
| related_parking_contracts_count  | contract_linked_parking |
| collected_cheques                |
| received_cash_payments           |
| total_collected_amount           |
| total_uncollected_amount         |
| total_revenue                    |
| fees_date                        | other_fees              |
| fees_value                       | other_fees              |
| fees_revenue_account_id          | other_fees              |
| fees_details                     | other_fees              |
| net_amount                       |
| contract_vat                     |
| customer_vat                     |
| owner_vat                        |
| salesman_vat                     |
| termination_vat                  |
| total_fees_vat                   |
| total_termination_vat            |
| total_vat                        |
| tax_invoice                      |
| processing                       | -                       |

---

# services-contracts-report

## Filters

- client_id
- area_name
- left_to_finish_days
- reviewed
- unreviewed
- user

@properties allow_date date_by from to

    `0 All`
    `1 Contract start date`
    `2 Contract expire date`
    `3 Terminated date`
    `4 Contract issue date`
    `4 clearance print`
    `4 Evacuate date`

clearance `0 All` `1 printed` `2 not printed`
payment_method `0 All` `1 cash` `2 installment` `3 by plan` `4 credit`
contract_status `0 All` `1 expired` `2 not expired`
contract_termination `0 All` `1 terminated` `2 not terminated`
contract_enter_status `0 All` `1 new` `2 renewal`
contract_amount `0 All` `1 with amount` `2 without amount`
termination_date `0 All` `1 smaller` `2 bigger` `3 equal` contract end date
installments `0 All` `1 with installments` `2 without installments`

@properties in flat
blocked_units `0 All` `1 blocked` `2 unblocked`
property_type  
description

## Columns

| col                       | table                | description |
| ------------------------- | -------------------- | ----------- |
| building                  | building             |
| contract_value            | contract             |
| discount_value            | contract             |
| contract_status           | contract             |
| customer                  | contract             |
| contract_expire_date      | contract             |
| contract_no               | contract             |
| contract_termination_date | contract             |
| feedback                  | contract             |
| contract_input_case       | contract             |
| contract_note             | contract             |
| value_due_to_tenant       | contract_termination |
| value_due_to_owner        | contract_termination |
| clearance_print_date      | contract_termination |
| clearance_printed_by      | contract_termination |
| area_name                 |
| left_day                  |
| collected_cheques         |
| received_cash_payments    |
| total_collected_amount    |
| total_uncollected_amount  |

---

# Contracts Deposit Report

## Filters

apartment_id
shop_id
parking_id
building_id
client_id
deposit `0 All` `1 not refunded` `2 refunded`
contract_status `0 All` `1 expired` `2 not expired`
termination_status `0 All` `1 terminated` `2 not terminated`

- reviewed
- unreviewed
- without_deposit `true show contract without deposit`
  @properties date_by from to
  `1 start contract` `2 end contract`

## Columns

| col                        | table                | description |
| -------------------------- | -------------------- | ----------- |
| customer                   | contract             |
| building_id                | building             |
| property                   | contract             |
| contract_no                | contract             |
| contract_status            | contract             |
| expired_contract           | contract_termination |
| previous_deposit_value     | contract             |
| current_deposit_value      | contract             |
| deposit_total              | contract             |
| deposit_has_been_retrieved | contract             |
| deposit_retrieve_date      | contract             |
| feedback                   | contract             |

## Metadata

- total general deposit
- total previous deposit in contract
- total current deposit in contract

---

# Contract Expired Report

## Filters

apartment_id
client_id
description
parking_id
shop_id
@property filter_using `1 days` `2 date`
@property start_date end_date
@property from to

> allow_contract_statement
> contract_statement_type
> contract_statement

> allow_unit_statement
> unit_statement_type
> unit_statement

## Columns

| col                                      | table         | description                      |
| ---------------------------------------- | ------------- | -------------------------------- |
| contract_number                          | contract      |
| customer                                 | contract      |
| building                                 | contract      |
| owner                                    | contract      |
| lessor                                   | contract      |
| description                              | contract      |
| from                                     | contract      |
| to                                       | contract      |
| has_lawsuit                              | contract      |
| current_contracts_no                     | contract      |
| contract_amount                          | contract      |
| lawsuit                                  | contract      |
| contract_details                         | contract.note |
| property_details                         | (n).note      |
| property_no                              | (n)           |
| flat_type                                | (n)           |
| floor                                    | (n)           |
| since_day                                |               | diff days since contract expired |
| flat_contract_linked_to_parking          |               | flats connect with parking       |
| increased_percentage_of_current_contract | -             |
| increased_value_on_current_contract      | -             |
| contract_value_after_increased           | -             |
| print_warning                            | -             |
| warning_printed                          | -             |
| warn_printing_date                       | -             |
| number_of_times_printing                 | -             |
| contracts_in_previous_years              | -             |
| contracts_total_no                       | -             |

## Metadata

- numbers of contracts
- total value of contract

---

# Report

## Filters

apartment_id
client_id
description
parking_id
shop_id
@property start_date end_date
@property days_number

> allow_contract_statement
> contract_statement_type
> contract_statement

> allow_unit_statement
> unit_statement_type
> unit_statement

## Columns

| col                                      | table         | description                      |
| ---------------------------------------- | ------------- | -------------------------------- |
| contract_number                          | contract      |
| customer                                 | contract      |
| building                                 | contract      |
| owner                                    | contract      |
| lessor                                   | contract      |
| description                              | contract      |
| from                                     | contract      |
| to                                       | contract      |
| has_lawsuit                              | contract      |
| current_contracts_no                     | contract      |
| contract_amount                          | contract      |
| lawsuit                                  | contract      |
| contract_details                         | contract.note |
| property_details                         | (n).note      |
| property_no                              | (n)           |
| flat_type                                | (n)           |
| floor                                    | (n)           |
| since_day                                |               | diff days since contract expired |
| flat_contract_linked_to_parking          |               | flats connect with parking       |
| increased_percentage_of_current_contract | -             |
| increased_value_on_current_contract      | -             |
| contract_value_after_increased           | -             |
| print_warning                            | -             |
| warning_printed                          | -             |
| warn_printing_date                       | -             |
| number_of_times_printing                 | -             |
| contracts_in_previous_years              | -             |
| contracts_total_no                       | -             |

## Metadata

- numbers of contracts
- total value of contract

---

# Contracts Cheques Report

## Filters

@properties in contract

    client_id
    description
    lessor_id
    property_no
    owner_id
    property_type `description`
    lawsuit

@properties in flat

    area_name
    area_unit
    blocked_units

- reviewed
- unreviewed
  payment_method `0 All` `1 cash` `2 installment` `3 by plan` `4 credit`
  contract_status `0 All` `1 expired` `2 not expired`
  @property installments `0 All` `1 with installments` `2 without installments`
  @property termination_status `0 All` `1 terminated` `2 not terminated`

@property start_collect_date end_collect_date
@property allow_date date_by start_date end_date

    `0 All`
    `1 Contract start date`
    `2 Contract expire date`
    `3 Terminated date`
    `4 Contract issue date`
    `4 clearance print`
    `4 Evacuate date`

## Columns

Note: (n) `shop` `apartment` `parking`

| col                             | table                 | description     |
| ------------------------------- | --------------------- | --------------- |
| floor                           | (n)                   |
| description                     | contract              |
| building                        | building              |
| owner                           | contract              |
| customer                        | contract              |
| contract_type                   | contract              |
| property_no                     | contract              |
| lessor                          | contract              |
| contract_no                     | contract              |
| contract_value                  | contract              |
| final_price                     | contract              |
| contract_deposit                | contract              |
| payment_method_in_contract      | contract              |
| contract_status                 | contract              |
| contract_issue_date             | contract              |
| contract_starting_date          | contract              |
| contract_expiry_date            | contract              |
| contract_termination_date       | contract              |
| contract_input_case             | contract              |
| contract_note                   | contract              |
| previous_contracts_no           | contract              |
| current_contracts_no            | contract              |
| customer_balance                | contract              |
| received_cash_payments          | voucher_main_data     |
| cheque_type                     |                       | chq type        |
| value_received                  |                       | collected chq   |
| value_not_collected             |                       | uncollected chq |
| sequence_cheque                 |                       | ? number cheque |
| cheque_no                       | cheque                |
| cheque_value                    | cheque                |
| cheque_status                   | cheque                |
| bank_name                       | cheque                |
| issue_date                      | cheque                |
| due_date                        | cheque                |
| deposit_date                    | cheque                |
| collect_date                    | cheque                |
| return_date                     | cheque                |
| last_date_of_partial_collection | op_partial_collection |
| contract_was_terminated         | contract_termination  |
| notes                           | cheque                |
| notes2                          | cheque                |
| lawsuit                         | cheque                |
| feedback                        | cheque                |
| automatically_renewed           | -                     |
| Processing                      |

---

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

| col | table | description |
| --- | ----- | ----------- |
