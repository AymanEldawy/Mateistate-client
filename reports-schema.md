## Reality Reports

1. Realty units reports

- [✔️] Leased and non-leased units
- [✔️] Leased and non-leased lands
- [✔️] Leased and non-leased Villas
- [✔️] Leased and non-leased Parking
- [x] الوحدات غير المؤجرة تجميعي
- [✔️] Sold and non-sold units
- [✔️] Sold and non-sold lands
- [✔️] Sold and non-sold Villas
- [✔️] Units that will be vacated
- [✔️] Reserved units report
- [✔️] Leased property activity
- [✔️] Changes report of flats sell pricing
- [✔️] Changes report of flats rent pricing

2. Revenue reports

- [✔️] Earned Rental income earned
- [x] Saved revenues
- [x] أرباح بيع الوحدات العقارية

3. Contract reports

- [✔️] Contract report
- [✔️] Services contract report
- [x] Daily Activity of contracts
- [✔️] Contract Cycle
- [✔️] Contract deposit report
- [✔️] Contract near to expire
- [✔️] Expired contracts
- [✔️] Contracts chqeue report
- [✔️] Contract payments report

4. Statistical reports

- [x] Customers report
- [x] Building chart
- [x] Daily working report
- [x] Quotations report

5. [x] lawsuit sessions report
6. [x] Electricty bills report
7. [x] Monthly report
8. [✔️] حالة الوحدات للبناء
9. Managers reports

- [✔️] cheques report
- [x] contract payments report
- [x] detailed building report
- [x] buildings diagram report

## Accounting Reports

- [✔️] Note papers report
- [✔️] Due note papers report
- [✔️] Returned checks
- [✔️] Cheques collection rerport
- [✔️] overdue payments report
- [x] Cheque buildings annual report
- [x] accounts balance chart
- [✔️] VAT Bills report
- [✔️] Customer account statement
- [✔️] Journal Ledger
- [✔️] General Ledger
- [✔️] Trial Balance
- [✔️] creditors ages
- [✔️] Cost center General Ledger
- [✔️] Cost center Trial Balance
- [x] Cost center cross report
- [x] Estimated Budget report
- [x] Annual Trail Balance
- [✔️] Trading Sheet
- [✔️] Profit and loss
- [✔️] Balance Sheet

##ot Exists report

- الوحدات غير المؤجرة تجميعي
- Saved revenues
- أرباح بيع الوحدات العقارية
- Daily Activity of contracts
- Customers report
- Building chart
- Daily working report
- - [x] Quotations report
- - [x] lawsuit sessions report
- - [x] Electricity bills report
- [x] Monthly report
- [] contract payments report
- [] detailed building report
- [] buildings diagram report
- [] Cheque buildings annual report
- [] accounts balance chart
- [] Cost center cross report
- [] Estimated Budget report
- [] Annual Trail Balance





<!-- old -->

# Reports

- [Reports contracts](#reports-contracts)
- [Contract disclosure report](#contract-disclosure-report)
- [Expired contract report](#expired-contract-report)
- [Near to expire contract report](#near-to-expire-contract-report)
- [Cheques report](#cheques-report)
- [Ledger Report](#ledger-report)
- [Property Report](#property-report)
- [building schema Report](#building-schema-Report)
- [realized revenue Report](#realized-revenue-report)
- [unrealized revenue Report](#unrealized-revenue-report)

---

#### Contract disclosure report

- ##### Columns

  **Notes:** (%name%) Maybe be `apartment` | `shop` | `parking`

  | key                         |          table          |
  | :-------------------------- | :---------------------: |
  | status                      |        contract         |
  | feedback                    | (%name%)\_rent_contract |
  | lawsuit                     | (%name%)\_rent_contract |
  | apartment_id                |        apartment        |
  | description                 | (%name%)\_rent_contract |
  | lessor_id                   |         lessor          |
  | building_id                 |        building         |
  | contract_value              | (%name%)\_rent_contract |
  | discount_rate               | (%name%)\_rent_contract |
  | discount_value              | (%name%)\_rent_contract |
  | final_price                 | (%name%)\_rent_contract |
  | discount_account_id         |         account         |
  | previous_securing           | (%name%)\_rent_contract |
  | current_securing_percentage | (%name%)\_rent_contract |
  | current_securing_value      | (%name%)\_rent_contract |
  | start_duration_date         | (%name%)\_rent_contract |
  | end_duration_date           | (%name%)\_rent_contract |
  | paid_type                   | (%name%)\_rent_contract |
  | revenue_account_id          |         account         |
  | insurance_account_id        |         account         |

- ##### Filters

  | key                   |          table          |
  | :-------------------- | :---------------------: |
  | clearance             |  contract_termination   |
  | contract_termination  |  contract_termination   |
  | client_id             |         account         |
  | date                  | (%name%)\_rent_contract |
  | description           | (%name%)\_rent_contract |
  | installment           | (%name%)\_rent_contract |
  | lawsuit               | (%name%)\_rent_contract |
  | lessor_id             |         lessor          |
  | paid_type             | (%name%)\_rent_contract |
  | reviewed              | (%name%)\_rent_contract |
  | end_duration_date     | (%name%)\_rent_contract |
  | start_duration_date   | (%name%)\_rent_contract |
  | unreviewed            | (%name%)\_rent_contract |
  | contract_enter_status |                         |

- ##### Response
  _Not yet_

---

#### Expired contract report

- ##### Columns
  | key                         |          table          |
  | :-------------------------- | :---------------------: |
  | status                      |        contract         |
  | number                      | (%name%)\_rent_contract |
  | feedback                    | (%name%)\_rent_contract |
  | lawsuit                     | (%name%)\_rent_contract |
  | apartment_id                |        apartment        |
  | lessor_id                   |         lessor          |
  | building_id                 |        building         |
  | contract_value              | (%name%)\_rent_contract |
  | discount_rate               | (%name%)\_rent_contract |
  | discount_value              | (%name%)\_rent_contract |
  | final_price                 | (%name%)\_rent_contract |
  | discount_account_id         |         account         |
  | previous_securing           | (%name%)\_rent_contract |
  | current_securing_percentage | (%name%)\_rent_contract |
  | current_securing_value      | (%name%)\_rent_contract |
  | start_duration_date         | (%name%)\_rent_contract |
  | end_duration_date           | (%name%)\_rent_contract |
  | paid_type                   | (%name%)\_rent_contract |
  | revenue_account_id          |         account         |
  | insurance_account_id        |         account         |
- ##### Filters

  | key                      |          table          |         conditions          |
  | :----------------------- | :---------------------: | :-------------------------: |
  | code                     |        contract         |                             |
  | client_id                | (%name%)\_rent_contract |                             |
  | description              | (%name%)\_rent_contract |                             |
  | building_id              | apartment_rent_contract |                             |
  | apartment_id             | apartment_rent_contract |                             |
  | parking_id               |  parking_rent_contract  |                             |
  | shop_id                  |   shop_rent_contract    |                             |
  | filter_using             |                         |       1 days - 2 date       |
  | end_duration_date        |                         |                             |
  | start_duration_date      |                         |                             |
  | from                     |                         |                             |
  | to                       |                         |                             |
  | allow_contract_statement |                         |        true => allow        |
  | contract_statement_type  |                         | 1 continuo - 2 not continuo |
  | contract_statement       |                         |                             |
  | allow_unit_statement     |                         |        true => allow        |
  | unit_statement           |                         |                             |
  | unit_statement_type      |                         | 1 continuo - 2 not continuo |

---

#### Near to expire contract report

- ##### Columns

  | key                         |          table          |
  | :-------------------------- | :---------------------: |
  | status                      |        contract         |
  | number                      | (%name%)\_rent_contract |
  | feedback                    | (%name%)\_rent_contract |
  | lawsuit                     | (%name%)\_rent_contract |
  | apartment_id                |        apartment        |
  | lessor_id                   |         lessor          |
  | building_id                 |        building         |
  | contract_value              | (%name%)\_rent_contract |
  | discount_rate               | (%name%)\_rent_contract |
  | discount_value              | (%name%)\_rent_contract |
  | final_price                 | (%name%)\_rent_contract |
  | discount_account_id         |         account         |
  | previous_securing           | (%name%)\_rent_contract |
  | current_securing_percentage | (%name%)\_rent_contract |
  | current_securing_value      | (%name%)\_rent_contract |
  | start_duration_date         | (%name%)\_rent_contract |
  | end_duration_date           | (%name%)\_rent_contract |
  | paid_type                   | (%name%)\_rent_contract |
  | revenue_account_id          |         account         |
  | insurance_account_id        |         account         |

- ##### Filters

  | key                      |          table          |         conditions          |
  | :----------------------- | :---------------------: | :-------------------------: |
  | code                     |        contract         |                             |
  | client_id                | (%name%)\_rent_contract |                             |
  | description              | (%name%)\_rent_contract |                             |
  | building_id              | apartment_rent_contract |                             |
  | apartment_id             | apartment_rent_contract |                             |
  | parking_id               |  parking_rent_contract  |                             |
  | shop_id                  |   shop_rent_contract    |                             |
  | day_numbers              |                         |                             |
  | start_duration_date      |                         |                             |
  | end_duration_date        |                         |                             |
  | allow_contract_statement |                         |        true => allow        |
  | contract_statement_type  |                         | 1 continuo - 2 not continuo |
  | contract_statement       |                         |                             |
  | allow_unit_statement     |                         |        true => allow        |
  | unit_statement           |                         |                             |
  | unit_statement_type      |                         | 1 continuo - 2 not continuo |

---

#### Cheques report

- ##### Columns

  | key                    |    table    |
  | :--------------------- | :---------: |
  | code        |    bill     |
  | feedback               |    bill     |
  | connect_with           |    bill     |
  | amount                 |    bill     |
  | currency_id            |  currency   |
  | observe_account_id     |   account   |
  | observe_cost_center_id | cost_center |
  | observe_account_note   |    bill     |
  | beneficiary_name       |    bill     |
  | parking_id             |   parking   |
  | shop_id                |    shop     |
  | apartment_id           |  apartment  |
  | due_date               |    bill     |
  | end_due_date           |    bill     |
  | without_due_date       |    bill     |
  | bank_id                |    bank     |
  | note1                  |    bill     |
  | note2                  |    bill     |
  | deport_status          |    bill     |
  | collection_status      |    bill     |
  | deposit_status         |    bill     |
  | return_status          |    bill     |
  | return_reason          |  op_return  |

- ##### Filters
  | key                       | table     | conditions       |
  | :------------------------ | :-------- | ---------------- |
  | account_id                | account   |
  | observe_account_id        | account   |
  | apartment_id              | apartment |
  | bank_id                   | bank      |
  | beneficiary_name          | bill      |
  | building_id               | building  |
  | parking_id                | parking   |
  | shop_id                   | shop      |
  | linked_contract           |           | connect_with     |
  | linked_contract_only      |           | connect_with     |
  | securities_without_status |           | all status false |
  | deposit                   | bill      |
  | collection                | bill      |
  | deportation               | bill      |
  | partial_collection        | bill      |
  | partial_collection_status |
  | return                    |
  | return_status             |
  | return_reason             |
  | reviewed                  |
  | unreviewed                |
  | transferred               |
  | Untransferred             |
  | allow_date                |
  | start_date                |
  | end_date                  |
  | allow_due_date            |
  | start_due_date            |
  | end_due_date              |
  | allow_note                |
  | note_words                |
  | note                      |
  | allow_paper               |
  | paper_words               |
  | paper                     |
  | allow_statement           |
  | statement_words           |
  | statement                 |

---

#### Ledger Report

- ##### Columns
- ##### Filters

---

#### Property Report

- ##### Columns
- ##### Filters

---

#### building schema Report

- ##### Columns
- ##### Filters

---

#### realized revenue Report

- ##### Columns
- ##### Filters

---

#### unrealized revenue Report

- ##### Columns
- ##### Filters

---

| Key                 | value   | description                                                                                                |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| case_of_termination | number  | [0] All - [1] Not expired - [2] Expired                                                                    |
| date_by             | number  | [1] Contract Start date - [2] Contract end date - [3] contract terminated date - [4] contract created date |
| start_date          | date    |
| end_date            | date    |
| start_period_date   | date    |
| end_period_date     | date    |
| reviewed            | boolean |
| unreviewed          | boolean |
| currency_id         | uuid    |
| round_to            | number  |

```
@property case_of_termination
@type Integer
@value 0 | 1 | 2
@description
[0] All contacts
[1] only ot expired contracts
[2] only expired contract
```

/_
@property date_by
@type Integer
@value 1 | 2 | 3 | 4
@description
1 Contract Start date
2 Contract end date
3 contract terminated date
4 contract created date
_/

@property start_date
@type date

@property end_date
@type date

@property reviewed
@type boolean
@description only reviewed contract

@property unreviewed
@type boolean
@description only unreviewed contract

@property currency_id
@type uuid
@description only contract with currency equal `currency_id`

@property round_to
@type uuid
@description
0 rounded contract value to "Without rounding" example 5555.08 => 5555
1 rounded contract value to "0"
2 rounded contract value to "1"
3 rounded contract value to "-1"
4 rounded contract value to "5"
5 rounded contract value to "-5"
6 rounded contract value to "10"
7 rounded contract value to "-10"






