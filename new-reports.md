
# cost center trial balance

## Filters

- account_id -> entry_grid_data.account_id
- cost_center_id -> entry_grid_data.cost_center_id
- currency_id -> entry_main_data.currency_id

- entry_num_from -> entry_main_data.number `>=`
- entry_num_to ->entry_main_data.number `<=`

- from -> entry_main_data.created_at `>=`
- to -> entry_main_data.created_at `<=`

- show_by_balance
- show_by_totals
- show_empty_cost_center
- show_main_accounts
- show_previous_balance

## Column

| col                | table                    |
| ------------------ | ------------------------ |
| created_at         | entry_main_data          |
| cost_center        | entry_main_data          |
| balance            | debit - credit           |           
| note               | entry_main_data          |
| debit              | entry_main_data          |
| credit             | entry_main_data          |
| currency_id        | entry_main_data          |
| number             | entry_main_data          |
| account_id         | entry_grid_data->account |
| observe_account_id | entry_grid_data->account |


## Metadata

---


# cost_center_general_ledger_report

## Filters

- account_id -> entry_grid_data.account_id
- cost_center_id -> entry_grid_data.cost_center_id
- currency_id -> entry_main_data.currency_id

- entry_num_from -> entry_main_data.number `>=`
- entry_num_to ->entry_main_data.number `<=`

- from -> entry_main_data.created_at `>=`
- to -> entry_main_data.created_at `<=`

- show_credit   entry_grid_data.credit > 0
- show_debit   entry_grid_data.debit > 0

## Column

| col                | table                    |
| ------------------ | ------------------------ |
| created_at         | entry_main_data          |
| cost_center        | entry_main_data          |
| balance            | debit - credit           |           
| note               | entry_main_data          |
| debit              | entry_main_data          |
| credit             | entry_main_data          |
| currency_id        | entry_main_data          |
| number             | entry_main_data          |
| account_id         | entry_grid_data->account |
| observe_account_id | entry_grid_data->account |

## Metadata

