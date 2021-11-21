import "../App.css";
import { useState } from "react";
import React from 'react';
import { Container,Row, Col, Button } from 'react-bootstrap';
import Axios from "axios";

function Flys() {


  const [flyListArrives, setFlyListArrives] = useState([]);
  const [flyListOuts, setFlyListOuts] = useState([]);

  const getFlysArrives = () => {
      Axios.get("http://localhost:3001/flysArrives").then((response) => {
        setFlyListArrives(response.data);
      });
  };

  const getFlysOuts = () => {
    Axios.get("http://localhost:3001/flysOuts").then((response) => {
      setFlyListOuts(response.data);
    });
  };

  return (
    <Container>
      <br/>
      <Row>
          <Col >
            <Button variant="primary" onClick={getFlysArrives}>
                VER VUELOS SALIDA
            </Button>
          </Col>
          <Col >
            <Button variant="primary" onClick={getFlysOuts}>
                VER VUELOS LLEGADA
            </Button>
            </Col>
      </Row>
      <Row>
          <Col className="employees" >
          {flyListArrives.map((val, key) => {
                return (
                    <div className="employee">
                    <div>
                        <h3>Destino: {val.destiny}</h3>
                        <h3>Origen: {val.origin}</h3>
                        <h3>Comentarios: {val.remarks}</h3>
                        <h3>Puerta: {val.gate}</h3>
                        <h3>Hora de llegada: {val.timeArrive}</h3>
                        <h3>Hora de salida: {val.timeOut}</h3>
                        <h3>N° de vuelo: {val.fligthNum}</h3>
                    </div>
                    </div>
                );
            })}
          </Col>
          <Col className="employees" >
          {flyListOuts.map((val, key) => {
                return (
                    <div className="employee">
                    <div>
                        <h3>Destino: {val.destiny}</h3>
                        <h3>Origen: {val.origin}</h3>
                        <h3>Comentarios: {val.remarks}</h3>
                        <h3>Puerta: {val.gate}</h3>
                        <h3>Hora de llegada: {val.timeArrive}</h3>
                        <h3>Hora de salida: {val.timeOut}</h3>
                        <h3>N° de vuelo: {val.fligthNum}</h3>
                    </div>
                    </div>
                );
            })}
          </Col>
      </Row>
    </Container>
    
  );
}
  
  export default Flys;