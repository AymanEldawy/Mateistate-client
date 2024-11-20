account  
matieral (purshase)


output (cash ) 
  credit    matieral (sales | output )1000
  debit     box 1000

output (credit ) 
  credit   matieral (sales | output )1000
  debit    account(cutomer) 1000




----------
VAT account 

output (cash ) 
  credit    matieral (sales | output )1000
  debit     box 1000
  credit    VAT account  50 
  debit     box 50

output (credit ) 
  credit   matieral (sales | output )1000
  debit    account(cutomer) 1000
  credit    VAT account  50 
  debit    account(cutomer) 50



--- 
discount account 

output (cash ) 
  credit    matieral (sales | output )900
  debit     box 900
  credit    VAT account  50 
  debit     box 50
  credit    discount account (sales) 100
  debit     box 100

output (credit ) 
  credit   matieral (sales | output )1000
  debit    account(cutomer) 1000
  credit    VAT account  50 
  debit    account(cutomer) 50
  credit   discount account (sales) 100
  debit    account(cutomer) 100


--- 
discount account 


input (cash )
  credit  box 900
  debit  matieral (purshase)  900
  credit  box 50
  debit   VAT account  50 
  credit  box 100
  debit  discount account (purashse) 100
  
  extra amounts 
      credit  box 200
      debit  expenses



input (credit ) 
  credit    account (supplier) 900
  debit     matieral (purshase) 900
  credit    account (supplier) 50
  debit    VAT account  50 
  credit    account (supplier) 100
  debit    discount account (purashse) 100

  extra amounts 
      credit  account (supplier) 200
      debit  expenses







----
total quatnities 
subtotal before vat     
vat amount
discount amount
extra
total (net) after vat 
