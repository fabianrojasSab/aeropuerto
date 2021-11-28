import "../App.css";
import { useState, useEffect } from "react";
import { Container, Button, Table } from 'react-bootstrap';
import Newfly from './Newfly';
import Axios from "axios";




function Consoleadmin() {
    
    
    const [newRemark, setNewRemark] = useState(0);

    const [flyList, setFlyList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/flys").then((response) => {
            setFlyList(response.data);
        });
    });



    const updateFlyRemark = (id) => {
        Axios.put("http://localhost:3001/update", { remarks: newRemark, idFly: id }).then(
            (response) => {
                setFlyList(
                flyList.map((val) => {
                    return val.idFly === id
                    ? {
                        id: val.idFly,
                        destiny: val.destiny, 
                        origin: val.origin,
                        remarks: newRemark,
                        gate: val.gate,
                        timeArrive: val.timeArrive,
                        timeOut: val.timeOut,
                        fligthNum: val.fligthNum,
                    }
                    : val;
                })
            );
            }
        );
    };

    const deleteFly = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setFlyList(
                flyList.filter((val) => {
              return val.id !== id;
            })
          );
        });
      };

    return (
      <Container >
        <h1 id="titulo">CONSOLA DE ADMINISTRADOR</h1>
        <br/>
        <Newfly></Newfly>
        <br/><br/>
            <br/>
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
                    {flyList.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.destiny}</td>
                                <td>{val.origin}</td>
                                <td>{val.remarks}</td>
                                <td>{val.gate}</td>
                                <td>{val.timeArrive}</td>
                                <td>{val.timeOut}</td>
                                <td>{val.fligthNum}</td>
                                <input type="text" placeholder="2000..." onChange={(event) => {
                                    setNewRemark(event.target.value);
                                }}/> 
                                <Button onClick={() => { updateFlyRemark(val.idFly); }} >Update </Button>
                                <Button type="submit" onClick={() => { deleteFly(val.idFly); }} > Delete </Button>
                            </tr>
                            );
                        })}
                </tbody>
            </Table>
        <br/>
        <br/>
      </Container>
    );
  }
  
  export default Consoleadmin;