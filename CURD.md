# How to use CURD methods params

## Read
  conditions: [{ type: "and", conditions: [["age", "<", 18]] }],
  offset: 0,
  limit: 10,
  joins: [
    {
      type: "join",
      table: "profile",
      conditions: { "users.id": "profile.user_id" },
    },
  ],
  sorts: [{ column: "username", order: "ASC", nulls: "last" }],
  columns: ["username", "email", "profile.bio"],

## update
  conditions: [{ type: "and", conditions: [["age", "<", 18]] }],
  updates: { age: 26 },

## insert
  data: { key: value }

## delete
  conditions: [{ type: "and", conditions: [["age", ">", 18]] }],

