const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const mysql = require("mysql");
// server.use(cors());
server.use(bodyParser.json());
var cors = require("cors");
server.use(cors());
// Establish the database connections

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact_management",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    return err;
  }
});

// db.connect(function (error) {
//   if (error) {
//     console.log("Db connection error ...");
//   } else {
//     console.log("Db connected successfully");
//   }
// });

// establish the port
// server.listen(8085,function check (error){
//     if(error){
//         console.log("server connection error ...");
//     }
//     else{
//         console.log("server connected successfully......");
//     }
// });

// server running or not
server.listen(3000, () => {
  console.log("server running 3000");
});

//get all data
server.get("/contact/getdata", (req, res) => {
  console.log("get user successfully...");
  let qr = "select * from contact";
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get all user successfully",
        data: result,
      });
    }
  });
});

//get single data ===> GET
server.get("/contact/getdata/:id", (req, res) => {
  console.log(req.params.id);
  primaryId = req.params.id;
  let qr = `select * from contact where id=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    if (result.length > 0) {
      res.send({
        message: "get single user successfully",
        data: result,
      });
      console.log(result);
    } else {
      res.send({
        message: "data not found",
      });
    }
  });
});

//create data ===> POST
server.post("/contact/create", (req, res) => {
  console.log(req.body, "create data");
  let fullName = req.body.cname;
  let cdob=req.body.cdob;
  let eMail = req.body.cmail;
  let mb = req.body.ccontact;
  let caddress = req.body.caddress;
  let cstreetname = req.body.cstreetname;
  let ccity = req.body.ccity;
  let cdistrict = req.body.cdistrict;
  let cstate = req.body.cstate;
  let cintroduction = req.body.cintroduction;
  let clinkedin = req.body.clinkedin;
  let cgithub = req.body.cgithub;
  let cgender = req.body.cgender;
  let qr = `insert into contact(cname,cdob,cmail,ccontact,caddress,cstreetname,ccity,cdistrict,cstate,cintroduction,clinkedin,cgithub,cgender) value (
            '${fullName}',
            '${cdob}',
            '${eMail}',
            '${mb}',
            '${caddress}',
            '${cstreetname}',
            '${ccity}',
            '${cdistrict}',
            '${cstate}',
            '${cintroduction}',
            '${clinkedin}',
            '${cgithub}',
            '${cgender}'
            )`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
    }
    console.log(result, "result");
    res.send({
      message: "single data inserted successfully..",
    });
  });
});

//update data ===> PUT
server.put("/contact/update/:id", (req, res) => {
  let fullName = req.body.cname;
  let cdob=req.body.cdob;
  let eMail = req.body.cmail;
  let mb = req.body.ccontact;
  let caddress = req.body.caddress;
  let cstreetname = req.body.cstreetname;
  let ccity = req.body.ccity;
  let cdistrict = req.body.cdistrict;
  let cstate = req.body.cstate;
  let cintroduction = req.body.cintroduction;
  let clinkedin = req.body.clinkedin;
  let cgithub = req.body.cgithub;
  let cgender = req.body.cgender;
  let qr = `UPDATE contact SET 
    cname= '${fullName}', 
    cdob= '${cdob}', 
    cmail ='${eMail}', 
    ccontact='${mb}' ,
    caddress='${caddress}' ,
    cstreetname='${cstreetname}' ,
    ccity='${ccity}' ,
    cdistrict='${cdistrict}' ,
    cstate='${cstate}' ,
    cintroduction='${cintroduction}' ,
    clinkedin='${clinkedin}' ,
    cgithub='${cgithub}' ,
    cgender='${cgender}' 
    where id=${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err, "error");
      console.log(primaryId + " " + cname + " " + cmail + " " + ccontact);
    }
    res.send({
      message: "single contact data updated successfully..",
    });
  });
});

// delete data
server.delete("/contact/delete/:id", (req, res) => {
  let primaryId = req.params.id;
  let qr = `delete from contact where id =${primaryId}`;
  db.query(qr, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send({
      message: "single data deleted successfully",
    });
    console.log(qr);
  });
});
