# How to use CURD methods

```
conditions: [{ type: "and", conditions: [["age", "<", 18]] }],
update: { age: 26 },
data: { key: value }
offset: 0,
limit: 10,
conditions: [{ type: "and", conditions: [["age", ">", 18]] }],
joins: [
  {
    type: "join",
    table: "profile",
    conditions: { "users.id": "profile.user_id" },
  },
],
sorts: [{ column: "username", order: "ASC", nulls: "last" }],
columns: ["username", "email", "profile.bio"],

```



<!-- Disabled option -->