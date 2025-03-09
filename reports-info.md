# Item activity

## filters

- item
- class
- store
- client
- code
- cost_center
- currency

date from & to

- bills[] `bill.id`

groups account & class & item

## columns

| col | table |
| --- | ----- |

bill_no
bill_type
bill_date
material
quantity + or - count
input quantity
output quantity
balance -> quantity
input prices
output prices
price
value
code
barcode
class

## Metadata

- input
- output
- balance
- price
- input price
- output price
- value

---

# Inventory

## Filters

- item
- class
- store
- client
- code
- cost_center
- currency

date from & to

## columns

- code
- barcode
- class
- unit
- vender
- store
- previous balance
- current balance
- total

## Metadata

- total quantity

---

# Ending Inventory

## Filters

- item
- class
- store
- client
- code
- cost_center
- currency

- unit

  - main unit
  - sell unit
  - buy unit

- price type

date from & to

- ignore 0 balance
- display empty material
- ignore navigable items

## columns

- code
- item
- class
- store
- quantity
- price
- value

## Metadata

- total value
- total quantity

---

# Sales Report

## Filters

- item
- class
- store
- client
- code
- cost_center
- currency
- classes_level

- date
- every `maybe merge all result in one`
  every_number
  every_duration - week - month - year

- bills[]

## columns

- unit
- class
- vendor
- bill_type
- clients
- item
- store
- input quantity
- output quantity
- net quantity (input quantity - output quantity)
- input value
- output value
- net value (input value - output value)

## Metadata

- input value
- output value
- input quantity
- output quantity
- balance

---

# Bill Details

## Filters

- account
- client -> user
- currency
- cost_center

- date

## Column
`bill and materials`
- type
- receipt no
- date
- client
- payment type
- class
- item
- quantity
-

## Metadata

- bill type
- cash
- credit
- total (cash +credit)


---

# Bill Profit


## Filters

- account
- client -> user
- cost_center


- bill no
- bill_type
- currency
- price cost
- view
- note

- date
- bills [] (only output)

- show bill Details
- view under purchase price item 


## Column
`bill and materials`

- bill no
- type
- date
- client
- class
- item
- quantity
- unit
- sale price
- cost
- extra/discount
- Profit

## Metadata
- total bill (total materials output)
- total cost ( total material price )
- gross Profit (total bill - total cost)
- Profit/bills rate ()
- Profit/cost rate



