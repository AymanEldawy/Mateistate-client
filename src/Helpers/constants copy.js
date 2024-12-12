const fs = require("fs");

const sortData = [
  {
    id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
    parent_id: null,
    final_id: null,
    internal_number: "1",
    total_debit: "153189",
    total_credit: "103000",
    children: [
      {
        id: "d9c775a3-d110-443d-a30c-ef2ca108f99c",
        parent_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        final_id: "7f7f0451-0ce6-4b5b-bda0-cee7ab896c2a",
        internal_number: "777",
        total_debit: "6588.8",
        total_credit: "0",
      },
      {
        id: "7f7f0451-0ce6-4b5b-bda0-cee7ab896c2a",
        parent_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        internal_number: "11",
        total_debit: "16160",
        total_credit: "20",
        children: [
          {
            id: "0c399c79-09a4-439b-976d-8c40f1dfaa9e",
            parent_id: "7f7f0451-0ce6-4b5b-bda0-cee7ab896c2a",
            final_id: "03fbfd21-7a04-4b35-83ae-461d525fd351",
            internal_number: "778",
            total_debit: "0",
            total_credit: "0",
          },
          {
            id: "03fbfd21-7a04-4b35-83ae-461d525fd351",
            parent_id: "7f7f0451-0ce6-4b5b-bda0-cee7ab896c2a",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "111",
            total_debit: "16160",
            total_credit: "20",
          },
        ],
      },
      {
        id: "88562800-829a-4a76-b7aa-bf8bb9c9fbf1",
        parent_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        internal_number: "13",
        total_debit: "3000",
        total_credit: "62708.797",
        children: [
          {
            id: "6b2e51a5-eda4-4fe6-a008-055b43aac149",
            parent_id: "88562800-829a-4a76-b7aa-bf8bb9c9fbf1",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "131",
            total_debit: "3000",
            total_credit: "62708.797",
          },
          {
            id: "f93ada8f-9642-4ad3-8382-cb4f11e7d145",
            parent_id: "88562800-829a-4a76-b7aa-bf8bb9c9fbf1",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "132",
            total_debit: "0",
            total_credit: "0",
          },
        ],
      },
      {
        id: "7c566459-8455-4b01-bb44-22298606273f",
        parent_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
        internal_number: "12",
        total_debit: "153189",
        total_credit: "103000",
        children: [
          {
            id: "d80e2079-6582-41c2-8eee-5e89898c63b8",
            parent_id: "7c566459-8455-4b01-bb44-22298606273f",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "125",
            total_debit: "534",
            total_credit: "0",
            children: [
              {
                id: "8348c4b2-9908-4235-8e25-b3503113c326",
                parent_id: "d80e2079-6582-41c2-8eee-5e89898c63b8",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "1251",
                total_debit: "534",
                total_credit: "0",
              },
            ],
          },
          {
            id: "48d02260-7898-46cb-8ff7-480b61b2b623",
            parent_id: "7c566459-8455-4b01-bb44-22298606273f",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "121",
            total_debit: "153189",
            total_credit: "103000",
            children: [
              {
                id: "16d718d9-97bd-4c42-99d9-2f790788c490",
                parent_id: "48d02260-7898-46cb-8ff7-480b61b2b623",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "12101",
                total_debit: "153189",
                total_credit: "103000",
              },
            ],
          },
          {
            id: "6f58238a-59e8-4a20-bf9a-749433b516df",
            parent_id: "7c566459-8455-4b01-bb44-22298606273f",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "123",
            total_debit: "49000",
            total_credit: "51000",
            children: [
              {
                id: "e9d8cb1e-975a-4a04-8e31-f95b707de5dc",
                parent_id: "6f58238a-59e8-4a20-bf9a-749433b516df",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "12301",
                total_debit: "49000",
                total_credit: "51000",
                children: [
                  {
                    id: "2726f39c-2cc9-4465-94e1-f0b59fc70f07",
                    parent_id: "e9d8cb1e-975a-4a04-8e31-f95b707de5dc",
                    final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                    internal_number: "123013",
                    total_debit: "8080",
                    total_credit: "0",
                  },
                  {
                    id: "76347b06-9a2a-4748-b570-4c9263fa0d89",
                    parent_id: "e9d8cb1e-975a-4a04-8e31-f95b707de5dc",
                    final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                    internal_number: "123012",
                    total_debit: "0",
                    total_credit: "50000",
                  },
                  {
                    id: "8814c3d7-b9a1-4efb-872d-812e2f0b06cf",
                    parent_id: "e9d8cb1e-975a-4a04-8e31-f95b707de5dc",
                    final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                    internal_number: "123011",
                    total_debit: "49000",
                    total_credit: "51000",
                  },
                ],
              },
              {
                id: "1f861a59-8b48-4054-9c17-498a226d7c5f",
                parent_id: "6f58238a-59e8-4a20-bf9a-749433b516df",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "12304",
                total_debit: "0",
                total_credit: "0",
              },
              {
                id: "de6e8fa3-2bd0-40ea-9a61-103fa043dab4",
                parent_id: "6f58238a-59e8-4a20-bf9a-749433b516df",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "12303",
                total_debit: "0",
                total_credit: "0",
              },
              {
                id: "87cf589c-114a-404d-ae98-fca8364b32af",
                parent_id: "6f58238a-59e8-4a20-bf9a-749433b516df",
                final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
                internal_number: "12302",
                total_debit: "0",
                total_credit: "0",
              },
            ],
          },
          {
            id: "a6cc21bd-4209-4425-ac08-0a5153c02545",
            parent_id: "7c566459-8455-4b01-bb44-22298606273f",
            final_id: "8b0f89b3-1ca8-4c2f-918f-f94532130775",
            internal_number: "122",
            total_debit: "1000",
            total_credit: "129",
          },
        ],
      },
    ],
  },
  {
    id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
    parent_id: null,
    final_id: null,
    internal_number: "2",
    total_debit: "3000",
    total_credit: "1019.5",
    children: [
      {
        id: "f94d85d7-9a56-49a5-b747-558c3f0aea39",
        parent_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
        final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
        internal_number: "22",
        total_debit: "3000",
        total_credit: "1019.5",
        children: [
          {
            id: "69bd17bb-0fa3-4904-95b3-0f8ee89ee522",
            parent_id: "f94d85d7-9a56-49a5-b747-558c3f0aea39",
            final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
            internal_number: "221",
            total_debit: "3000",
            total_credit: "0",
            children: [
              {
                id: "b4cc094f-c8fc-40a8-a8c3-4492b94edaf2",
                parent_id: "69bd17bb-0fa3-4904-95b3-0f8ee89ee522",
                final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
                internal_number: "221002",
                total_debit: "129",
                total_credit: "0",
              },
              {
                id: "8b8162c4-0fa6-49fc-911e-7d01f3e41763",
                parent_id: "69bd17bb-0fa3-4904-95b3-0f8ee89ee522",
                final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
                internal_number: "221003",
                total_debit: "3000",
                total_credit: "0",
              },
              {
                id: "9faad295-c066-4084-b5a3-d191600fcd13",
                parent_id: "69bd17bb-0fa3-4904-95b3-0f8ee89ee522",
                final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
                internal_number: "221001",
                total_debit: "0",
                total_credit: "0",
              },
            ],
          },
          {
            id: "b0a03ee9-dd52-47fd-a054-1b0fa5a67fd6",
            parent_id: "f94d85d7-9a56-49a5-b747-558c3f0aea39",
            final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
            internal_number: "222",
            total_debit: "0",
            total_credit: "0",
          },
          {
            id: "95e88de8-3ea8-47c2-a482-ec98de03bfbe",
            parent_id: "f94d85d7-9a56-49a5-b747-558c3f0aea39",
            final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
            internal_number: "224",
            total_debit: "2879.4",
            total_credit: "1019.5",
          },
          {
            id: "1f69a056-ea79-42cd-86e1-ebec9b571aa4",
            parent_id: "f94d85d7-9a56-49a5-b747-558c3f0aea39",
            final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
            internal_number: "223",
            total_debit: "0",
            total_credit: "1000",
          },
        ],
      },
      {
        id: "b3890f7a-802f-4bdf-a718-4af624bb71e8",
        parent_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
        final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
        internal_number: "21",
        total_debit: "0",
        total_credit: "0",
        children: [
          {
            id: "4fd3fe74-779a-4c82-9523-99637ba49f53",
            parent_id: "b3890f7a-802f-4bdf-a718-4af624bb71e8",
            final_id: "9ad1e43c-4986-4df3-8f86-037b0f8a8f87",
            internal_number: "2101",
            total_debit: "0",
            total_credit: "0",
          },
        ],
      },
    ],
  },
  {
    id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
    parent_id: null,
    final_id: null,
    internal_number: "3",
    total_debit: "28466.6",
    total_credit: "3149.5",
    children: [
      {
        id: "db8605a6-18d8-4eef-bec2-799ec3be92fe",
        parent_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        final_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        internal_number: "31",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "a809299b-9510-4c40-810d-5b8fc8dcb03e",
        parent_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        final_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        internal_number: "32",
        total_debit: "1000",
        total_credit: "3149.5",
      },
      {
        id: "6ae4189c-3169-41cc-a408-dbd3021d9885",
        parent_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        final_id: "1e286c27-80c5-4480-a5c9-68a658a1d14c",
        internal_number: "33",
        total_debit: "28466.6",
        total_credit: "0",
      },
    ],
  },
  {
    id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
    parent_id: null,
    final_id: null,
    internal_number: "4",
    total_debit: "49000",
    total_credit: "50000",
    children: [
      {
        id: "a6d11026-cc2e-40a1-a49a-f22a28be3cce",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "45",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "c8c7935b-52c3-477a-a2bc-a70378b0ae2c",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "44",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "9fe9bb17-6761-42a0-ad84-3ea8213ea2f4",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "46",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "b6b1ab69-3e3f-4c58-9b79-be25d8d7e225",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "42",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "35330529-7880-4300-b64a-eef14c759d0c",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "41",
        total_debit: "0",
        total_credit: "0",
      },
      {
        id: "a9c901ff-c77c-44c6-928a-93060fd96acd",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "43",
        total_debit: "49000",
        total_credit: "50000",
      },
      {
        id: "9116b47c-4c6c-47c9-9294-c5a3a3d5bb48",
        parent_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        final_id: "b8e0085e-78fb-4f82-95ba-0adb8ed9326c",
        internal_number: "47",
        total_debit: "0",
        total_credit: "0",
      },
    ],
  },
];

let table = [];
let count = 0;

function r(data, table) {
  count++;
  console.log(`Function call ${count}`);

  table.push(data);

  if (data.children && data.children.length > 0) {
    const children = data.children;
    delete data.children;

    children.forEach(child => {
      r(child, table);
    });
  }

  return data;
}

// Process each item in sortData using the recursive function
sortData.forEach(item => {
  r(item, table);
});

// Output the flattened data
console.log(table);

console.log(count);


// console.log(table.length);

fs.writeFile("data.json", JSON.stringify(table, 0, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully as data.xls");
  }
});
