account  
matieral (purshase)

input (cash ) 
  credit  box  1000
  debit  matieral (purshase) 1000

input (credit ) 
  credit    account (supplier)1000
  debit     matieral (purshase)1000


----------
VAT account 

input (cash ) 
  credit  box 1000
  debit  matieral (purshase)  1000
  credit  box 50
  debit  VAT account  50 

input (credit ) 
  credit    account (supplier) 1000
  debit     matieral (purshase) 1000
  credit    account (supplier) 50
  debit    VAT account  50 

--- 
discount account 


input (cash ) EX1
  credit  box 1000
  debit  matieral (purshase)  900
  credit  box 50
  debit  VAT account  50 
  debit  discount account (purashse) 100

  Ex2
  credit  box 900
  debit  matieral (purshase)  900
  credit  box 50
  debit   VAT account  50 
  credit  box 100
  debit  discount account (purashse) 100



input (credit ) 
  credit    account (supplier) 900
  debit     matieral (purshase) 900
  credit    account (supplier) 50
  debit    VAT account  50 
  credit    account (supplier) 100
  debit    discount account (purashse) 100




-----------
extra account 


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
