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
  | internal_number        |    bill     |
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
