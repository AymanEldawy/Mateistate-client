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
