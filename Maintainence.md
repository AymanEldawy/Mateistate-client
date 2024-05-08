# API endpoints

---

## Home page for owner

- `units` get all units for current or logged in owner

  - tableName `apartment` `shop` `parking`

- `status`

  - Collections `collection_status` `partial_collection_status` `voucher_main_data`
  - Checks collected `collection_status`
  - Bounced checks `return_status`
  - Postdated checks ``

- `Maintenance`

- `Net`

### collections page

`getAllCash` from table -> `voucher_main_data`
@param date
@param unit_id
@param type (n)

`getAllCheck` from table -> `cheque`
@param owner_account_id required
@param status `all` `collected` `partial_collected` `uncollected` `returned`
@param date
@param unit_id
@param type (n)

Note: (n) is on of them `apartment` `shop` `parking`

### Contracts page

`getOwnerContract` from table -> `contract`
@param owner_account_id required

@param status
@param expired_days

### Units page

@param owner_account_id required
`getOwnerUnits`
@param status `ALL` `Occupied` `Empty`

"Pseudo code"

1. get all buildings for owner
2. get all units(n) by building id

Note: (n) is on of them `apartment` `shop` `parking`

### Maintenance page

POST: `/owner/getOwnerMaintenance`
@param owner_account_id required
@param type
@param unit_id
@param problem_type

### Notification

`getOwnerNotifications`

Note: should loading more on scrolling

### Booking

`getOwnerBookingRequests`

@param status `all` `reserved` `canceled` `expired`

### Reports

Future

---

## Home page for Customer

## Notification

| key         | type | description         |
| ----------- | ---- | ------------------- |
| id          | uuid |
| created_at  |      |
| title       |      |
| description |      |
| url         | text | inner or outer href |
| status      | bool | read - unread       |
| user_id     | uuid | ref table `user`    |

## Category

| key       | type | description          |
| --------- | ---- | -------------------- |
| id        |      |
| name      |      |
| parent_id | uuid | ref table `category` |
| image     | text | url                  |

## category_problem

| key         | type | description                |
| ----------- | ---- | -------------------------- |
| id          |      |                            |
| description |      |                            |
| category_id | uuid | ref table `category`       |
| status      | bool | available or not available |

## service

| key            | type        | description                                          |
| -------------- | ----------- | ---------------------------------------------------- |
| id             | uuid        |
| created_at     | date        |
| start_date     | date        |
| end_date       | date        |
| selected_date1 | date        | `المؤجر يمكنه ادخال اكثر من وقت `                    |
| selected_date2 | date        | `هذا الوقت الذي يمكنه ان يكون متواجد في الشقة`       |
| selected_date3 | date        | `لاستقبال عامل الصيانة`                              |
| number         | int         | sequence number or auto increment                    |
| contract_id    | uuid        | ref table is `contract`                              |
| building_id    | uuid        | ref table is `building`                              |
| unit_id        | uuid        | ref table is on of them `apartment` `parking` `shop` |
| category_id    | uuid        | ref table is `category`                              |
| title          | text        |
| description    | text        |
| status         | int         | 1->`pending` 2->`underway` 3->`done` 4->`closed`     |
| payment_method | int or bool | 1->`cash` or 2-> `card`                              |
| is_paid        | bool        | `free` or `paid`                                     |
| total          | float       |
| approved       | bool        | when the `supervisor` is accept the request          |

# service_attachment

| key        | type        | description            |
| ---------- | ----------- | ---------------------- |
| id         |             |
| created_at |             |
| attachment | text        | url                    |
| type       | int or text | `video`, photo, record |
| service_id |             | ref table is `service` |

# service_lack_reason

| key           | type | description                           |
| ------------- | ---- | ------------------------------------- |
| id            |      |
| created_at    |      |
| reason        | text | `need materials` or some other reason |
| paused_date   | date | date of stop or lake                  |
| continue_date | date | date when continue                    |
| service_id    |      | ref table is `service`                |

# service_rate

| key              | type | description            |
| ---------------- | ---- | ---------------------- |
| id               |      |
| created_at       |      |
| description      | text |
| rating           | int  |
| service_id       | uuid | ref table is `service` |
| customer_user_id | uuid | ref table is `user`    |

# employee_rate

| key              | type | description            |
| ---------------- | ---- | ---------------------- |
| id               |      |
| created_at       |      |
| description      | text |
| rating           | int  |
| service_id       | uuid | ref table is `service` |
| customer_user_id | uuid | ref table is `user`    |
| employee_user_id | uuid | ref table is `user`    |

# materials

| key          | type  | description                            |
| ------------ | ----- | -------------------------------------- |
| id           |       |
| created_at   |       |
| name         |       |
| description  |       |
| currency_id  | uuid  | ref table is `currency`                |
| currency_val | float | default is 1                           |
| price        | float | default is `0` - `0` meaning it's free |
| status       | bool  | available or not available             |


# Administrations

##
POST `/supervisor/getRequestDetails`
@param request_id required

res: 
id
number
created_at
start_date
end_date
contract_id(id,name)
building_id(id,name)
unit_id(id,name)
category_id(id,name)
title
description
status
payment_method
is_paid
total
approved
employee(id,name)
service_attachment(attachment, type)[]




# Administrations

##
PATCH `/supervisor/updateRequestDetails`
@param request_id required
@param data{} required


  "data": {
    "selected_date1": date,
    "selected_date2": date,
    "selected_date3": date,
    "approved": bool
  }



# Administrations

POST `/supervisor/bookings`
@param status 1->`pending` 2->`underway` 3->`done` 4->`closed`

res:
id
number
created_at
title
description
status
unit_id(id,name)
category_id(id,name)
user_account_id(id, name, phone, avatar)


{
  "id": uuid,
  "number": ing,
  "created_at": date,
  "start_date": date,
  "end_date": date,
  "contract_id": {
    "id": uuid,
    "name": string,
  },
  "building_id": {
    "id": uuid,
    "name": string,
  },
  "unit_id": {
    "id": uuid,
    "name": string,
  },
  "category_id": {
    "id": uuid,
    "name": string,
  },
  "title": string,
  "description": string,
  "status": int,
  "payment_method": int,
  "is_paid": boolean,
  "total": int,
  "approved": boolean,
  "employee": {
    "id": uuid,
    "name": string,
  },
  "service_attachment": [
    {
      "attachment": string,
      "type": string
    },
    {
      "attachment": string,
      "type": string
    }
  ]
}