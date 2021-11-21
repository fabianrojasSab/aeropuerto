const express = require ("express");
const app  = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const { database } = require('./keys');

const db = mysql.createConnection(database);

app.post('/create', (req, res) =>{
    const destiny  = req.body.destiny;
    const origin  = req.body.origin;
    const remarks  = req.body.remarks;
    const gate  = req.body.gate;
    const timeArrive  = req.body.timeArrive;
    const timeOut  = req.body.timeOut;
    const fligthNum  = req.body.fligthNum;

    db.query("insert into flys (destiny, origin, remarks, gate, timeArrive, timeOut, fligthNum) values (?,?,?,?,?,?,?)", 
    [destiny, origin, remarks, gate, timeArrive, timeOut, fligthNum ], 
    (err, result) =>{
        if(err){
            console.log(err)
        }else{
            console.log("values inserted")
        }
    })
})


app.get("/flys", (req, res) => {
    db.query("SELECT * FROM flys", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.get("/flysArrives", (req, res) => {
  db.query("SELECT * FROM flys WHERE destiny ='CHICAGO'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/flysOuts", (req, res) => {
  db.query("SELECT * FROM flys WHERE origin ='CHICAGO'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.put("/update", (req, res) => {
    const idFly = req.body.idFly;
    const remark = req.body.remarks;
    db.query(
      "UPDATE flys SET remarks = ? WHERE idFly = ?",
      [remark, idFly],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM flys WHERE idFly = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.listen(3001, () =>{
    console.log ("server on port 3001")
} )
