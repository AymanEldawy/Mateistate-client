# API endpoints

---

1

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

# Generic

POST `/ownerUnits`
@param owner_account_id

res:
id
number
created_at

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

# Administrations

POST `/supervisor/technicians`

@params name optional
user(id,name, avatar)
category(id, name)
employee_rate(id, rating)

# Customer

POST `/customer/getAllCustomerServices`

@params user_id required

res
data: [
id: uuid,
title: string,
description: string,
status: int max is 4,
]

POST `/customer/getAllCategories`

Note parent_id is null

res
data: [
id: uuid,
name: string,
image: string,
]

POST `/customer/getAllCustomerContractCount`
@params user_id required

POST `/customer/getAllCustomerChequesCount`
@params user_id required

POST `/customer/getDefaultServicesByCategory`

Note: default `service` is all `services` have `is_default` column is TRUE

@param category_id required

res:
id
number
created_at
category(id, name),
title
description,
status
service_attachment(id, attachment, type)

POST `/customer/addOrder`

@params data

---

POST `/contracts`
@params [key] required
@params [value] required

res:
id,
number,
contract_type,
start_duration_date,
end_duration_date,

POST `/getUnitDetails`
@params unit_id required

POST `/units`
@params building_id required

res:
{
id: uuid,
number: int,
unit_type: int,
unit_no: string,
}

POST `/getContractDetails`
@params contract_id required

res:
id,
number,
contract_type,
start_duration_date,
end_duration_date,
client(id, name, phone, nationality)

POST `/getContractCash`
@params contract_id required

res:
id: uuid,
number: int,
contract_type: int,
cash:{
first_batch: float,
other_batches: float,
}

POST `/getContractCheque`
@params contract_id required
res:
id: uuid,
number: int,
contract_type: int,
cheques {
collected: float
uncollected: float
}

# evacuation_request

| key             | type | description             |
| --------------- | ---- | ----------------------- |
| id              |      |
| created_at      |      |
| description     | text |
| evacuation_date | date |
| contract_id     | uuid | ref table is `contract` |
| user_account_id | uuid | ref table is `contract` |

# evacuation_request_fine

| key                   | type  | description                       |
| --------------------- | ----- | --------------------------------- |
| id                    |       |
| created_at            |       |
| reason                | text  |
| note                  | text  |
| amount                | float |
| evacuation_request_id | uuid  | ref table is `evacuation_request` |

POST `/customer/getDefaultServicesByCategory`

Note: default `service` is all `services` have `is_default` column is TRUE

res:
id
number
created_at
category(id, name),
title
description,
status
service_attachment(id, attachment, type)

POST `/customer/rateWorker`

@params user_id required
@params data required

res
status true
message: useful message

POST `/uploadAttachment`

@params files[] required
@type `contract` || `user` || `building` || `avatar` required
@main_id `contract_id` || `user_id` || `building_id` required

res:
success: true,
paths: urls[]
message: useful message

starting from table `service`

foreign keys

category_id -> category.id
user_account_id -> user.account_id
unit_type -> 1`apartment` 2`parking` 3`shop` 4`land` 5`villa`
unit_id -> `apartment.id` `land.id` `parking.id` `shop.id` `villa.id`

# Note

request service for all unit leased or non leased

- There are two types of request `by customer` `by supervisor`
- customer request
  1. customer can rate
  2. customer can paid

# evacuation_request_fine

| key                   | type  | description                       |
| --------------------- | ----- | --------------------------------- |
| id                    |       |
| created_at            |       |
| reason                | text  |
| note                  | text  |
| amount                | float |
| evacuation_request_id | uuid  | ref table is `evacuation_request` |

# service

| key         | type  | description                                                              |
| ----------- | ----- | ------------------------------------------------------------------------ |
| id          | uuid  |
| number      | int   | sequence number or auto increment                                        |
| created_at  | date  |
| start_date  | date  |
| end_date    | date  |                                                                          |
| building_id | uuid  | ref table is `building`                                                  |
| unit_id     | uuid  | ref table is dynamic and will be on of them `apartment` `parking` `shop` |
| unit_type   | int   | `apartment` `parking` `shop` `land` `villa`                              |
| is_default  | bool  | the default and free services inserted by admin                          |
| is_paid     | bool  | `free` or `paid`                                                         |
| total       | float |
| code        | int   | 1-> `request by customer` 2-> `request by supervisor`                    |

## service_customer_request

| key              | type        | description                                                         |
| ---------------- | ----------- | ------------------------------------------------------------------- |
| id               | uuid        |
| number           | int         | sequence number or auto increment                                   |
| contract_id      | uuid        | ref table is `contract`                                             |
| payment_method   | int or bool | 1->`cash` or 2-> `card`                                             |
| customer_user_id | uuid        | ref table is `user`                                                 |
| phone            | text        | the customer phone                                                  |
| approved         | bool        | when the `supervisor` is accept the request                         |
| returned         | bool        | when the `customer` reject the date and the date isn't good for him |
| service_id       | uuid        | ref table is `service`                                              |

## service_worker

| key            | type | description                                      |
| -------------- | ---- | ------------------------------------------------ |
| id             | uuid |
| title          | text |
| description    | text |
| category_id    | uuid | ref table is `category`                          |
| worker_user_id | uuid | ref table is `user`                              |
| status         | int  | 1->`pending` 2->`underway` 3->`done` 4->`closed` |
| service_id     | uuid | ref table is `service`                           |

# service_material

| key        | type | description             |
| ---------- | ---- | ----------------------- |
| id         | uuid |                         |
| number     | int  |                         |
| created_at | uuid |                         |
| service_id | uuid | ref table is `service`  |
| materia_id | uuid | ref table is `material` |
| price      |      |                         |

## service_rate

| key              | type | description            |
| ---------------- | ---- | ---------------------- |
| id               |      |
| created_at       |      |
| description      | text |
| rating           | int  |
| service_id       | uuid | ref table is `service` |
| customer_user_id | uuid | ref table is `user`    |

user `in_vacation`
user `in_vacation`
\_ma

{
occupancy: int |,
collections: int |,
checks_collected: int |,
returned_checks: int |,
uncollected_checks: int |,
}

# Dropdowns

## screen collections (cheques)

### status

- all 0
- collected 1
- uncollected 3
- returned 2

### date

- newest 1
- oldest 2

### type

- apartment 1
- parking 2
- shop 3

### type_id

- `uuid` to search in type table

## screen collections (cash)

### date

- newest 1
- oldest 2

### status

- all 0
- expired 1
- not expired 2

## screen contracts

### date

- newest 1
- oldest 2

### contract status

- close to completion 1
- finished 2
- mast 3

### expired over

- 30 days
- 60 days
- 90 days
- (n) more

## screen units

- ALL 0
- Occupied 1
- Empty 2

# Notifications Messages

## SuperVisor

- onReceivedOrder عند استلام الطلب
- onStartingOrder عند بداية الطلب
- onPausedOrder عند توقف الطلب لفترة
- onCompletedOrder عند اكتمال الطلب
- onRequestedMaterials عند طلب ماتريالز او اداوت
- onReceivedEvacuation عند استلام طلب اخلاء

## Worker

- onReceivedOrder عند تعيينه لطلب ما
- onCompletedOrder عند اكتمال الطلب
- onRateWorker عند تققيمه

## Customer

- onRequestedOrder عند اضافة طلب
- onApprovedOrder عند الموافقة علي الطلب
- onReturnedOrder عند رجوع الطلب (عدم الموافقة و يجب تعديله)
- onRejectedOrder عند رجوع الطلب (عدم الموافقة و يجب تعديله)
- onCompletedOrder عند اكتمال الطلب
- onContractCloseToCompletion عند اقتراب العقد من النهاية
- onRequestedEvacuation عند استلام طلب اخلاء
- onAcceptedRequestEvacuation عند قبول طلب اخلاء
- onRejectedRequestEvacuation عند قبول طلب اخلاء

للمشرف
عند استلام الطلب: تم استلام طلبك بنجاح. يرجى المتابعة مع العمال لبدء التنفيذ.
عند بداية الطلب: تم بدء تنفيذ الطلب بنجاح. سيتم إبلاغك بأي تطورات جديدة.
عند توقف الطلب لفترة: تم توقيف الطلب مؤقتًا. يرجى التنسيق مع العمال لاستئناف التنفيذ.
عند اكتمال الطلب: تم اكتمال الطلب بنجاح. شكرًا لجهودكم، لا تترددوا في طلب المزيد.
عند طلب مواد أو أدوات: تم طلب المواد أو الأدوات بنجاح. سيتم توفيرها في أقرب وقت ممكن.
عند استلام طلب الإخلاء: تم استلام طلب الإخلاء بنجاح. الرجاء اتخاذ الإجراءات اللازمة على الفور.
للعامل
عند تعيينه لطلب ما: لقد تم تعيينك للعمل على طلب جديد. يرجى البدء في التنفيذ والتواصل مع المشرف إذا كانت هناك أية استفسارات.
عند اكتمال الطلب: تم اكتمال الطلب بنجاح. شكرًا على جهودكم، يرجى الانتقال إلى الطلب التالي.
عند تقييمه: يرجى تقييم العمل الذي قمت به. نقدر ملاحظاتكم لتحسين الخدمة في المستقبل.
للعميل
عند طلب الخدمة: تم طلب الخدمة بنجاح. سنقوم بمراجعة الطلب وتقديم التأكيد في أقرب وقت ممكن.
عند الموافقة على الطلب: تمت الموافقة على طلبك بنجاح. سيتم بدء تنفيذ الخدمة في الحال.
عند رفض الطلب والحاجة إلى تعديله: تم رفض الطلب لاستكمال المعلومات أو التعديلات. الرجاء التواصل لإجراء التغييرات اللازمة.
عند اكتمال الطلب: تم اكتمال الطلب بنجاح. يرجى التحقق وتأكيد استلام الخدمة.
عند اقتراب انتهاء العقد: العقد يقترب من النهاية. يرجى الاتصال لمناقشة التجديد أو تعديل الخدمات.
عند طلب الإخلاء: تم طلب الإخلاء بنجاح. سنقوم بالتنسيق لترتيب العملية بأسرع وقت ممكن.
عند قبول طلب الإخلاء: تم قبول طلب الإخلاء بنجاح. سنقوم باتخاذ الإجراءات اللازمة للتنفيذ في أقرب وقت ممكن.

## Flow (customer service)

starting form customer he can starting the request by choose the

## service order

1. Customer starting the order
   title, description, time
2. supervisor recevied the order

## Maintenances

post /customer/addMaintenancesOrder (data)

@ required from client

- (token) `required`
- building_id -> service `required` -> - owner_account_id -> service `required`
- unit_type -> service `required`
- unit_id -> service `required`
- contract_id -> service_customer_request `required`
- start_date -> service `required`

- title -> service_worker `required`
- description -> service_worker `required`
- category_id -> service_worker `required`
- category_problem_id -> service_worker `required`
- total_minutes -> service_worker `required`
- booking_start_date -> service_worker | service.start_date
- booking_end_date -> service_worker | service.start_date + total_minutes

- record ->
- images ->

@addtionals

- phone -> service_customer_request
- customer_user_id -> service_customer_request

- status -> service
- code -> 1 service `required`

post /supervisor/acceptOrder (data)

- (token) `required`
- service_id `required`
- worker_user_id -> service_worker `required`
- status -> update service status to accept number
- supervisor_user_id -> service

post /supervisor/returnOrder (data)

- (token) supervisor_user_id
- service_id `required`
- supervisor_user_id -> service
- status -> update status to return number

post /supervisor/rejectOrder (data)

- (token) supervisor_user_id
- service_id `required`
- supervisor_user_id -> service
- status -> update status to reject number

post /worker/startingService (data)

- (token) user.id user.tenant_id
- service_id -> worker_service `required`
- worker_user_id -> worker_service
- tenant_id -> worker_service
- worker_status -> worker_service

post /worker/crashesService (data)

- (token) user.tenant_id
- code -> `required`
- service_id -> service_lack_reason `required`
- paused_date -> service_lack_reason `required`
- tenant_id -> service_lack_reason
- reason -> service_lack_reason
- lack_reason_id -> service_lack_reason

note code = 1 change service.status to (return)

post /worker/requestMaterials (data)

Note materials is a list of materials or items[]

- (token) user.tenant_id
- service_id -> service_requested_material `required`
- material_id -> service_requested_material
- name -> service_requested_material
- quantity -> service_requested_material
- tenant_id -> service_requested_material

post /supervisor/acceptMaterials (data)

- (token) user.tenant_id
- service_id -> service_received_material `required`
- material_id -> service_received_material `required`
- quantity -> service_received_material `required`
- price -> service_received_material `required`
- tenant_id -> service_received_material
- total -> service `required`

post

- is_default
- payment_method
- service_id

@ required from client

post /supervisor/addPropertyPreparing (data)

- (token) `required`
- building_id -> service `required` -> - owner_account_id -> service `required`
- unit_type -> service `required`
- unit_id -> service `required`
- start_date -> service `required` the smallest date or nearest date from list of worker data
- status -> update service status to accept number

list of workers[]

- title -> service_worker `required`
- description -> service_worker `required`
- category_id -> service_worker `required`
- category_problem_id -> service_worker `required`
- total_minutes -> service_worker `required`
- booking_start_date -> service_worker `required`
- booking_end_date -> service_worker | service.start_date + total_minutes


post /worker/startingPropertyPreparingService (data)

- (token) user.id user.tenant_id
- service_id -> worker_service `required`
- worker_user_id -> worker_service
- tenant_id -> worker_service
- worker_status -> worker_service


post /supervisor/endPropertyPreparingService (data)

- (token) user.id user.tenant_id
- service_id -> service `required`
- status -> update status to reject number


post /supervisor/getTechinaclsByCategoryId (category_id, start_date, minutes)

- (token) user.tenant_id
- get all users from user table that user.tenant_id eqaul tenant_id user.category_id equal category_id and user.card_type equal 3
- check if some of workers are available on the time from start_date & start_date + minutes


