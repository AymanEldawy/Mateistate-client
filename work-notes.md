## Operations Errors

### Delete

- Currency errors
  `detail` Key (id)=(b1a16dcd-256a-4a55-966c-7e271ef9067f) is still referenced from table \"account\"."
  `message` "delete from \"currency\" where ((\"id\" in ($1, $2))) - update or delete on table \"currency\" violates foreign key constraint \"account_currency_id_fkey\" on table \"account\""

- Account errors
  `detail` "Key (id)=(0370c9b9-78b3-44fc-bcc2-b95edf41a315) is still referenced from table \"account\"."
  `message` "delete from \"account\" where ((\"id\" = $1)) - update or delete on table \"account\" violates foreign key constraint \"account_final_id_fkey\" on table \"account\""

---

### Insert

- Seller
  column `Id Card` "232423523252\" is out of range for type integer

- User 
  column `Files` is a json 