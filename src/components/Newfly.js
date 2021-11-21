import React, { useState } from 'react';
import { Container,Row, Button, Form, } from 'react-bootstrap';
import Axios from 'axios';



function Newfly() {
    const [destiny, setDestiny] = useState("");
    const [origin, setOrigin] = useState("");
    const [remarks, setRemarks] = useState("");
    const [gate, setGate] = useState("");
    const [timeArrive, setTimeArrive] = useState("");
    const [timeOut, setTimeOut] = useState("");
    const [fligthNum, setFligthNum] = useState("");

    const [flyList, setFlyList] = useState([]);

    const addFly = () =>{
        Axios.post('http://localhost:3001/create', {
            destiny: destiny, 
            origin: origin,
            remarks: remarks,
            gate: gate,
            timeArrive: timeArrive,
            timeOut: timeOut,
            fligthNum: fligthNum,
        }).then(() => {
            setFlyList([
                ...flyList,
                {
                    destiny: destiny, 
                    origin: origin,
                    remarks: remarks,
                    gate: gate,
                    timeArrive: timeArrive,
                    timeOut: timeOut,
                    fligthNum: fligthNum,
                },
              ]);
        })    
    }

    return (
      <Container>
        <br/>
        <Form>
            <Row className="mb-3">
                <Form.Group >
                <Form.Label>Destinity</Form.Label>
                <Form.Control type="text" placeholder="Enter destiny" onChange={(event) => {setDestiny(event.target.value);}} />
                </Form.Group>

                <Form.Group >
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" placeholder="Enter origin" onChange={(event) => {setOrigin(event.target.value);}}  />
                </Form.Group>
            </Row>

            <Form.Group >
                <Form.Label>Remark</Form.Label>
                <Form.Control placeholder="remark" onChange={(event) => {setRemarks(event.target.value);}}  />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gate</Form.Label>
                <Form.Control placeholder="gate" onChange={(event) => {setGate(event.target.value);}} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group >
                <Form.Label>time Arrive</Form.Label>
                <Form.Control  placeholder="time Arrive" onChange={(event) => {setTimeArrive(event.target.value);}} />
                </Form.Group>

                <Form.Group >
                <Form.Label>time Out</Form.Label>
                <Form.Control placeholder="time Out" onChange={(event) => {setTimeOut(event.target.value);}} />
                </Form.Group>

                <Form.Group >
                <Form.Label>fligth Num</Form.Label>
                <Form.Control placeholder="Numero de vuelo" onChange={(event) => {setFligthNum(event.target.value);}} />
                </Form.Group>
            </Row>

            <Button variant="primary"  type="submit" onClick={addFly}>
                Crear
            </Button>
        </Form>
      </Container>
    );
  }
  
  export default Newfly;