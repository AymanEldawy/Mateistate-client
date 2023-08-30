const express = require("express");
const app = express();
const sql = require("mssql");
const bcrypt = require("bcrypt");

const cors = require("cors");

// const sqlConfig = {
//   user: "ayman",
//   password: "123456",
//   database: "Matiestate",
//   server: "DESKTOP-VPIP642",
//   options: {
//     instanceName: "MSSQLSERVER",
//     trustServerCertificate: true,
//   },
// };

const sqlConfig = {
  server: "mssql-141730-0.cloudclusters.net",
  port: 19762,
  database: "master",
  user: "admin",
  password: "Aa123456",
  options: {
    // instanceName: 'MSSQLSERVER',
    trustServerCertificate: true,
  },
};

// app.use(cors());
app.use(
  cors({
    origin: [CLIENT_URL, `${CLIENT_URL}/`, "*"],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
    headers: "*",
  })
);
app.use(express.json());
// const db = sql.connect(sqlConfig);

app.post("/pullguid", (req, res) => {
  const name = req.body.name;
  const table = req.body.table;
  const select = "SELECT * FROM " + table + " WHERE Name='" + name + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });
});

app.post("/delete", (req, res) => {
  const table = req.body.table;
  const guids = req.body.guids;
  const select = `DELETE FROM ${table} WHERE Guid IN ('${guids.join("','")}')`;

  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// app.post("/create", (req, res) => {
//   const dat = req.body.dat;
//   const table = req.body.table;
//   const columns = req.body.columns;
//   let array = "";
//   let columnList = "";
//   let amount = "";
//   for (let i = 0; i < columns.length; i++) {
//     if (i == columns.length - 1) {
//       columnList = columnList + columns[i];
//       array = array + "'" + dat[columns[i]] + "'";
//       amount = amount + "?";
//     } else {
//       columnList = columnList + columns[i] + ", ";
//       array = array + "'" + dat[columns[i]] + "'" + ", ";
//       amount = amount + "?,";
//     }
//   }

//   let insert;
//   if (dat["Number"]) {
//     insert =
//       "SET IDENTITY_INSERT " +
//       table +
//       " ON INSERT INTO " +
//       table +
//       "(" +
//       columnList +
//       ") VALUES (" +
//       array +
//       ") SET IDENTITY_INSERT " +
//       table +
//       " OFF";
//   } else {
//     insert =
//       "INSERT INTO " + table + "(" + columnList + ") VALUES (" + array + ")";
//   }
//   sql.connect(sqlConfig, function (err) {
//     if (err) {
//       console.log(err);
//     }
//     var db = new sql.Request();

//     db.query(insert, (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         // res.send(result);
//         const insertedRow = result.recordset[0];
//         res.send(insertedRow);
//       }
//     });
//   });
// });
app.post("/create", (req, res) => {
  const dat = req.body.dat;
  const table = req.body.table;
  const columns = req.body.columns;
  let array = "";
  let columnList = "";
  let amount = "";
  for (let i = 0; i < columns.length; i++) {
    if (i == columns.length - 1) {
      columnList = columnList + columns[i];
      array = array + "'" + dat[columns[i]] + "'";
      amount = amount + "?";
    } else {
      columnList = columnList + columns[i] + ", ";
      array = array + "'" + dat[columns[i]] + "'" + ", ";
      amount = amount + "?,";
    }
  }

  let insert;
  if (dat["Number"]) {
    insert =
      "SET IDENTITY_INSERT " +
      table +
      " ON INSERT INTO " +
      table +
      "(" +
      columnList +
      ") OUTPUT inserted.Guid VALUES (" +
      array +
      ") SET IDENTITY_INSERT " +
      table +
      " OFF";
  } else {
    insert =
      "INSERT INTO " +
      table +
      "(" +
      columnList +
      ") OUTPUT inserted.Guid VALUES (" +
      array +
      ")";
  }

  // Execute the INSERT statement
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(insert, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        let Guid = result?.recordset?.[0]?.Guid;
        res.send(Guid);
      }
    });
  });
});

// app.post("/createApartments", (req, res) => {
//   const { BuildingGuid, No, FloorNo, table } = req?.body;

//   if (BuildingGuid) {
//     const insert = `INSERT INTO ${table} (BuildingGuid, No, FloorNo) VALUES ('${BuildingGuid}','${No}', '${FloorNo}')`;
//     sql.connect(sqlConfig, function (err) {
//       if (err) {
//         console.log(err);
//       }
//       var db = new sql.Request();
//       db.query(insert, (err, result) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(result);
//         }
//       });
//     });
//   }
// });

app.post("/deleteApartments", (req, res) => {
  const { guids } = req?.body;
  if (guids) {
    const deleteApartments = `DELETE FROM Apartment WHERE Guid IN ('${guids.join(
      "','"
    )}')`;

    sql.connect(sqlConfig, function (err) {
      if (err) {
        console.log(err);
      }
      var db = new sql.Request();
      db.query(deleteApartments, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    });
  }
});

app.post("/createEntryParent", (req, res) => {
  const dat = req.body.dat;
  const table = req.body.table;
  const columns = req.body.columns;
  let array = "";
  let columnList = "";
  let amount = "";
  for (let i = 0; i < columns.length; i++) {
    if (i == columns.length - 1) {
      columnList = columnList + columns[i];
      array = array + "'" + dat[columns[i]] + "'";
      amount = amount + "?";
    } else {
      columnList = columnList + columns[i] + ", ";
      array = array + "'" + dat[columns[i]] + "'" + ", ";
      amount = amount + "?,";
    }
  }

  let insert;
  if (dat["Number"]) {
    insert =
      "SET IDENTITY_INSERT " +
      table +
      " ON INSERT INTO " +
      table +
      "(" +
      columnList +
      ") VALUES (" +
      array +
      ") SET IDENTITY_INSERT " +
      table +
      " OFF";
  } else {
    insert =
      "INSERT INTO " +
      table +
      "(" +
      columnList +
      ") OUTPUT inserted.Guid VALUES (" +
      array +
      ")";
  }
  console.log(insert);
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(insert, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        const guid = result.recordset[0].Guid;
        console.log(guid);
        createEntryChild(
          req.body.childData,
          req.body.childTable,
          req.body.childColumns,
          guid
        );
      }
    });
  });
});

function createEntryChild(data, table, columns, guid) {
  for (let i in Object.keys(data)) {
    let dat = data[i];
    console.log("IT WORKS!");
    if (guid) {
      dat["ParentGuid"] = guid;
    }
    dat["Number"] = parseInt(i) + 1;
    if (!columns.includes("Number")) {
      columns.push("Number");
    }
    if (!columns.includes("ParentGuid")) {
      columns.push("ParentGuid");
    }
    let array = "";
    let columnList = "";
    let amount = "";
    for (let i = 0; i < columns.length; i++) {
      if (typeof dat[columns[i]] !== "undefined") {
        if (i == columns.length - 1) {
          columnList = columnList + columns[i];
          array = array + "'" + dat[columns[i]] + "'";
          amount = amount + "?";
        } else {
          columnList = columnList + columns[i] + ", ";
          array = array + "'" + dat[columns[i]] + "'" + ", ";
          amount = amount + "?,";
        }
      }
    }

    let insert;
    if (dat["Number"]) {
      insert =
        "SET IDENTITY_INSERT " +
        table +
        " ON INSERT INTO " +
        table +
        "(" +
        columnList +
        ") VALUES (" +
        array +
        ") SET IDENTITY_INSERT " +
        table +
        " OFF";
    } else {
      insert =
        "INSERT INTO " + table + "(" + columnList + ") VALUES (" + array + ")";
    }
    console.log(insert);
    sql.connect(sqlConfig, function (err) {
      if (err) {
        console.log(err);
      }
      var db = new sql.Request();

      db.query(insert, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    });
  }
}

app.post("/login", (req, res) => {
  const loginName = req.body.LoginName;
  const password = req.body.Password;

  const saltRounds = 2;
  // const salt = bcrypt.genSaltSync(saltRounds);
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log(hashedPassword);
  // const passwordsMatch = bcrypt.compareSync(password, hashedPassword);

  // console.log(passwordsMatch);
  // const authenticate =
  //   "SELECT * from dbo.Realty_Users Where LoginName='" + loginName + "'";
  const authenticate =
    "INSERT INTO Realty_Users (LoginName, Password) Values('" +
    loginName +
    "','" +
    hashedPassword +
    "')";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(authenticate, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (result) {
          console.log(result);
        }
        // res.send(result);
      }
    });
  });
});

// app.post("/update", (req, res) => {
//   const dat = req.body.dat;
//   const table = req.body.table;
//   const columns = req.body.columns;
//   const num = req.body.num;
//   let array = "";
//   let columnList = "";
//   let amount = "";
//   let setlist = "";
//   for (let i = 0; i < columns.length; i++) {
//     if (i == columns.length - 1) {
//       setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
//     } else {
//       setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
//     }
//   }

//   const insert =
//     "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + num + "'";
//   sql.connect(sqlConfig, function (err) {
//     if (err) {
//       console.log(err);
//     }
//     var db = new sql.Request();

//     db.query(insert, (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });
// });

app.post("/update", (req, res) => {
  const dat = req.body.dat;
  const table = req.body.table;
  const columns = req.body.columns;
  const num = req.body.num;
  let array = "";
  let columnList = "";
  let amount = "";
  let setlist = "";
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] !== "Number" || columns[i] !== "Guid") {
      if (i == columns.length - 1) {
        setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
      } else {
        setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
      }
    }
  }

  const insert =
    "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + num + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(insert, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
});

function updateEntryChild(data, table, guid) {
  for (let i of Object.keys(data)) {
    if (data[i]["Guid"]) {
      const columns = Object.keys(data[i]);
      const dat = data[i];
      const num = data[i]["Guid"];
      let array = "";
      let columnList = "";
      let amount = "";
      let setlist = "";
      console.log("Columns are", columns);
      console.log("data is", data);
      for (let i = 0; i < columns.length; i++) {
        if (
          typeof dat[columns[i]] !== "undefined" &&
          columns[i] !== "Guid" &&
          columns[i] !== "Number" &&
          dat[columns[i]] !== null
        ) {
          if (i == columns.length - 1) {
            setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
          } else {
            setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
          }
        }
      }

      const insert =
        "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + num + "'";
      console.log(insert);
      sql.connect(sqlConfig, function (err) {
        if (err) {
          console.log(err);
        }
        var db = new sql.Request();

        db.query(insert, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("good");
          }
        });
      });
    } else {
      let dat = data[i];
      const columns = Object.keys(data[i]);
      console.log("IT WORKS!");
      dat["ParentGuid"] = guid;
      dat["Number"] = parseInt(i) + 1;
      if (!columns.includes("Number")) {
        columns.push("Number");
      }
      if (!columns.includes("ParentGuid")) {
        columns.push("ParentGuid");
      }
      let array = "";
      let columnList = "";
      let amount = "";
      for (let i = 0; i < columns.length; i++) {
        if (
          typeof dat[columns[i]] !== "undefined" &&
          dat[columns[i]] !== null
        ) {
          if (i == columns.length - 1) {
            columnList = columnList + columns[i];
            array = array + "'" + dat[columns[i]] + "'";
            amount = amount + "?";
          } else {
            columnList = columnList + columns[i] + ", ";
            array = array + "'" + dat[columns[i]] + "'" + ", ";
            amount = amount + "?,";
          }
        }
      }

      let insert;
      if (dat["Number"]) {
        insert =
          "SET IDENTITY_INSERT " +
          table +
          " ON INSERT INTO " +
          table +
          "(" +
          columnList +
          ") VALUES (" +
          array +
          ") SET IDENTITY_INSERT " +
          table +
          " OFF";
      } else {
        insert =
          "INSERT INTO " +
          table +
          "(" +
          columnList +
          ") VALUES (" +
          array +
          ")";
      }
      console.log(insert);
      sql.connect(sqlConfig, function (err) {
        if (err) {
          console.log(err);
        }
        var db = new sql.Request();

        db.query(insert, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        });
      });
    }
  }
}

app.post("/updateEntryParent", (req, res) => {
  const dat = req.body.dat;
  const table = req.body.table;
  const columns = req.body.columns;
  const num = req.body.num;
  let array = "";
  let columnList = "";
  let amount = "";
  let setlist = "";
  for (let i = 0; i < columns.length; i++) {
    if (i == columns.length - 1) {
      setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
    } else {
      setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
    }
  }

  const insert =
    "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + num + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(insert, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        updateEntryChild(req.body.childData, req.body.childTable, num);
      }
    });
  });
});

app.post("/updateApp", (req, res) => {
  const dat = req.body.dat;
  const table = req.body.table;
  const columns = req.body.columns;
  const newguid = req.body.newguid;
  const num = req.body.num;
  let array = "";
  let columnList = "";
  let amount = "";
  let setlist = "";
  for (let i = 0; i < columns.length; i++) {
    if (i == columns.length - 1) {
      setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
    } else {
      setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
    }
  }

  const insert =
    "UPDATE " +
    table +
    " SET " +
    setlist +
    " WHERE No= '" +
    num +
    "'" +
    " AND BuildingGuid= '" +
    newguid +
    "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();

    db.query(insert, (err, result) => {
      if (err) {
        res.send(insert);
      } else {
        res.send(result);
      }
    });
  });
});

app.post("/iteminfo", (req, res) => {
  const table = req.body.table;
  const num = req.body.num;
  const select = "select * from dbo." + table + " WHERE Guid='" + num + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/rowinfo", (req, res) => {
  const table = req.body.table;
  const num = req.body.num;
  const select =
    "select * from dbo." + table + " WHERE ParentGuid='" + num + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/", (req, res) => {
  const request = req.body.request;
  if (request == "best") {
    return res.send("Why Not Tech");
  } else {
    return res.send("Do not bother");
  }
});

app.post("/info", (req, res) => {
  const table = req.body.table;
  const select =
    "select * from INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='" + table + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/list", (req, res) => {
  const table = req.body.table;
  const select = "select * from dbo." + table;
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/find/apartment", (req, res) => {
  const Guid = req.body.Guid;
  const No = req.body.No;
  const select =
    "select * from dbo.apartment WHERE BuildingGuid='" +
    Guid +
    "' AND No='" +
    No +
    "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/search/tables", (req, res) => {
  const value = req.body.value;
  let tables = [];
  const select = "SELECT * FROM INFORMATION_SCHEMA.TABLES";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      for (let i = 0; i < result["recordset"].length; i++) {
        if (value) {
          const ser = value[0].toUpperCase() + value.slice(1);
          const serr = value[0].toLowerCase() + value.slice(1);
          if (
            result["recordset"][i].TABLE_NAME.substring(0, value.length) ==
              ser ||
            result["recordset"][i].TABLE_NAME.substring(0, value.length) == serr
          ) {
            tables.push(result["recordset"][i].TABLE_NAME);
          }
        }
      }
      res.send(tables);
    });
  });
});

app.post("/search/entries", (req, res) => {
  const value = req.body.value;
  const table = req.body.table;
  let tables = [];
  const select = "select * from " + table;
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      for (let i = 0; i < result["recordset"].length; i++) {
        if (value) {
          const ser = value[0].toUpperCase() + value.slice(1);

          if (
            result["recordset"][i].Name.substring(0, value.length) == ser ||
            result["recordset"][i].Name.substring(0, value.length) == value
          ) {
            tables.push(result["recordset"][i]);
          }
        }
      }
      res.send(tables);
    });
  });
});

app.post("/alerts/get", (req, res) => {
  const select = "Select * from dbo.alerts";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
        res.send({});
      }
      res.send(result);
    });
  });
});

app.post("/alerts/check", (req, res) => {
  const select =
    "UPDATE TABLE dbo.alerts SET Read = 1 WHERE Number=" + req.body.num;
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/checkref", (req, res) => {
  const table = req.body.table;
  const key = req.body.key;
  const select =
    "SELECT f.name AS 'Foreign Key',OBJECT_NAME(f.parent_object_id) AS 'Table', COL_NAME(fc.parent_object_id, fc.parent_column_id) AS 'Column', OBJECT_NAME (f.referenced_object_id) AS 'Referenced_Table', COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS 'Referenced Column' FROM sys.foreign_keys AS f INNER JOIN sys.foreign_key_columns AS fc ON f.OBJECT_ID = fc.constraint_object_id WHERE OBJECT_NAME(f.parent_object_id) ='" +
    table +
    "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// function updateBuildingProperties(data, table) {
//   for (let i of Object.keys(data)) {
//     const columns = Object.keys(data[i]);
//     const dat = data[i];
//     const guid = data[i]["Guid"];
//     let array = "";
//     let columnList = "";
//     let amount = "";
//     let setlist = "";
//     console.log("Columns are", columns);
//     console.log("data is", data);
//     for (let i = 0; i < columns.length; i++) {
//       if (
//         typeof dat[columns[i]] !== "undefined" &&
//         columns[i] !== "Guid" &&
//         columns[i] !== "Number" &&
//         dat[columns[i]] !== null
//       ) {
//         if (i == columns.length - 1) {
//           setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
//         } else {
//           setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
//         }
//       }
//     }

//     const insert =
//       "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + guid + "'";
//     console.log(insert);
//     sql.connect(sqlConfig, function (err) {
//       if (err) {
//         console.log(err);
//       }
//       var db = new sql.Request();

//       db.query(insert, (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("good");
//         }
//       });
//     });
//   }
// }

function updateTable(data, table, res) {
  for (let i of Object.keys(data)) {
    // for (let i of data) {
    if (data[i]["Guid"]) {
      const columns = Object.keys(data[i]);
      const dat = data[i];
      const num = data[i]["Guid"];
      let array = "";
      let columnList = "";
      let amount = "";
      let setlist = "";
      // console.log("Columns are", columns);
      // console.log("data is", data);
      for (let i = 0; i < columns.length; i++) {
        if (
          typeof dat[columns[i]] !== "undefined" &&
          columns[i] !== "Guid" &&
          columns[i] !== "Number" &&
          dat[columns[i]] !== null
        ) {
          if (i == columns.length - 1) {
            setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "'";
          } else {
            setlist = setlist + columns[i] + "= '" + dat[columns[i]] + "', ";
          }
        }
      }
      if (setlist.endsWith(",")) setlist = setlist?.slice(0, -1);
      if (setlist[setlist?.length - 2] === ",") setlist = setlist?.slice(0, -2);
      console.log(setlist);

      const insert =
        "UPDATE " + table + " SET " + setlist + " WHERE Guid= '" + num + "'";
      console.log(insert);
      sql.connect(sqlConfig, function (err) {
        if (err) {
          console.log(err);
        }
        var db = new sql.Request();

        db.query(insert, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        });
      });
    } else {
      let dat = data[i];
      const columns = Object.keys(data[i]);
      let array = "";
      let columnList = "";
      let amount = "";
      for (let i = 0; i < columns.length; i++) {
        if (
          typeof dat[columns[i]] !== "undefined" &&
          dat[columns[i]] !== null
        ) {
          if (i == columns.length - 1) {
            columnList = columnList + columns[i];
            array = array + "'" + dat[columns[i]] + "'";
            amount = amount + "?";
          } else {
            columnList = columnList + columns[i] + ", ";
            array = array + "'" + dat[columns[i]] + "'" + ", ";
            amount = amount + "?,";
          }
        }
      }

      let insert;
      if (dat["Number"]) {
        insert =
          "SET IDENTITY_INSERT " +
          table +
          " ON INSERT INTO " +
          table +
          "(" +
          columnList +
          ") VALUES (" +
          array +
          ") SET IDENTITY_INSERT " +
          table +
          " OFF";
      } else {
        insert =
          "INSERT INTO " +
          table +
          "(" +
          columnList +
          ") VALUES (" +
          array +
          ")";
      }
      console.log(insert);
      sql.connect(sqlConfig, function (err) {
        if (err) {
          console.log(err);
        }
        var db = new sql.Request();

        db.query(insert, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        });
      });
    }
  }
}

app.post("/handleColoring", (req, res) => {
  const colors = req.body.colors;
  console.log(colors);
  updateTable(colors, "FlatBuildingDetails", res);
});

app.post("/getColoring", (req, res) => {
  const select = "SELECT * FROM FlatBuildingDetails";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    });
  });
});

app.post("/findPropertyOfBuilding", (req, res) => {
  const building = req.body.building;
  const table = req.body.table;
  const select =
    "SELECT * FROM " + table + " WHERE BuildingGuid = '" + building + "'";
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(select, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
      res.send(result);
    });
  });
});

app.post("/createNewApartments", (req, res) => {
  const { values, columns, table } = req?.body;
  let query = "";
  let num = "";
  if (columns?.includes("Guid")) {
    console.log("update");
    let data = "";
    for (let i = 0; i < columns.length; i++) {
      if (columns[i] === "Guid") {
        num = values[i];
        continue;
      }
      if (columns[i] === "BuildingGuid") {
        continue;
      }
      if (i == columns.length - 1) {
        data = data + columns[i] + "= '" + values[i] + "'";
      } else {
        data = data + columns[i] + "= '" + values[i] + "', ";
      }
    }
    if (data.endsWith(",")) data = data?.slice(0, -1);
    if (data[data?.length - 2] === ",") data = data?.slice(0, -2);
    console.log(data);
    query = "update " + table + " SET " + data + " WHERE Guid= '" + num + "'";
    console.log(query);
  } else {
    query =
      "INSERT INTO " +
      table +
      " ( " +
      columns.join(", ") +
      ") VALUES (" +
      values.map((v) => "'" + v + "'").join(", ") +
      ")";
    console.log(query);
  }
  // console.log(insert);
  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.log(err);
    }
    var db = new sql.Request();
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
});
