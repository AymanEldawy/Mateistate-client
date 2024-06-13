
# material

defaults1
unit1  
barcode1

unit2
exchange2
barcode2
defaults2

unit3
exchange3
barcode3
defaults3

code
name
material_group_id
note

# material_specifications (grid)
material_id
specification
value
note


# material_prices
material_id
currency_id
currency_val
VAT_rate

# material_prices_details
material_id
price_type
unit1
unit2
unit3


material_type (stored - services)

# material_balance (grid)
material_id
unit1
quality1
unit2
quality2
unit3
quality3

# material_minimum (grid)
material_id
store
minimum
maximum
note


# store
number
code
name
address
warehouseman
note
parent_id




# bill_pattern
number int
code  voucher
name voucher
bill_type int
note text 
barcode_bill voucher
menu voucher

default_store_id
cost_center_id
material_account_id
cash_account_id
discount_account_id
extra_account_id
vat_account_id
use_vat_account_from_customer_card bool
currency_id
payment_method int

active_perpetual_inventory bool
stock_account_id
calculate_sale_cost_center_id


[] post_to_store
[] post_to_store_auto
[] generate_entries
[] auto_generate_entries
[] post_generate_entries_auto 
[] deleting_entry_depending_on_materials
[] possibility_of_changing_materials_account
[] calculate_VAT_after_discount_and_extra_value_to_the_invoice
[] merge_repeated_materials
[] required_customer_entry
[] required_cost_center_entry
[] required_category_entry
[] show_alert_on_navigate_output
[] dont_save_when_navigate_output
[] show_average_price_check_message_after_adding_modifying


[] bill affected the pricing of materials
pricing of materials > 

table_color1
table_color2



[] show_references_field
[] required_reference_field
[] dont_show_expired_field
[] lock_bill_when_loading_references
[] allow_partial_load

references []json

# bill

issue_date
bill_date
bill_kind
client_account_id
currency_id
currency_val
payment_method
note
receipt_number
cost_center_id
connect_with
connect_with_id
store_id
customer_account_id
material_id
class


total_quantities
total_quantities_percentage


refunded_taxable_amount
non_refunded_taxable_amount
not_taxable
taxable

total
discounts
discounts_extra

non_refundable_vat
non_refundable_vat2
grand_total
net






# bill_material_details
bill_id
material_id
quantity
unit_price
total_price
note

# bill_discounts_details
number
parent_id
account_id
discount
extra
currency_id
currency_val
cost_center_id
obverse_account_id
note
