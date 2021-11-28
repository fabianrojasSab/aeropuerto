import "../App.css";
import { useState, useEffect } from "react";
import React from 'react';
import { Container,Row, Col, Table } from 'react-bootstrap';
import Axios from "axios";

function Flys() {


  const [flyListArrives, setFlyListArrives] = useState([]);
  const [flyListOuts, setFlyListOuts] = useState([]);

  useEffect(() => {
      Axios.get("http://localhost:3001/flysArrives").then((response) => {
        setFlyListArrives(response.data);
      });

      Axios.get("http://localhost:3001/flysOuts").then((response) => {
      setFlyListOuts(response.data);
    });
  });


  return (
    <Container>
      <br/>
      <Row>
          <Col className="employees" >
            <h1>
                VER VUELOS SALIDA
            </h1>
            <Table>
                <thead>
                    <tr>
                        <th>Destino</th>
                        <th>Origen</th>
                        <th>Comentarios</th>
                        <th>Puerta</th>
                        <th>Hora de llegada:</th>
                        <th>Hora de salida:</th>
                        <th>N° de vuelo:</th>
                    </tr>
                </thead>
                <tbody>
                    {flyListOuts.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.destiny}</td>
                                <td>{val.origin}</td>
                                <td>{val.remarks}</td>
                                <td>{val.gate}</td>
                                <td>{val.timeArrive}</td>
                                <td>{val.timeOut}</td>
                                <td>{val.fligthNum}</td>
                            </tr>
                            );
                        })}
                </tbody>
            </Table>
          </Col>
      </Row>
      <br/>
      <br/>
      <Row>
          <Col className="employees" >
          <h1 >
                VER VUELOS SALIDA
            </h1>
          <Table>
                <thead>
                    <tr>
                        <th>Destino</th>
                        <th>Origen</th>
                        <th>Comentarios</th>
                        <th>Puerta</th>
                        <th>Hora de llegada:</th>
                        <th>Hora de salida:</th>
                        <th>N° de vuelo:</th>
                    </tr>
                </thead>
                <tbody>
                    {flyListArrives.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.destiny}</td>
                                <td>{val.origin}</td>
                                <td>{val.remarks}</td>
                                <td>{val.gate}</td>
                                <td>{val.timeArrive}</td>
                                <td>{val.timeOut}</td>
                                <td>{val.fligthNum}</td>
                            </tr>
                            );
                        })}
                </tbody>
            </Table>
          </Col>
      </Row>
    </Container>
    
  );
}
  
  export default Flys;