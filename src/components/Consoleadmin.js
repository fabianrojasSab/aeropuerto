import "../App.css";
import { useState } from "react";
import { Container, Button, Form } from 'react-bootstrap';
import Newfly from './Newfly';
import Axios from "axios";




function Consoleadmin() {
    

    const [newRemark, setNewRemark] = useState(0);

    const [flyList, setFlyList] = useState([]);

    const getFlys = () => {
        Axios.get("http://localhost:3001/flys").then((response) => {
            setFlyList(response.data);
        });
      };


    const updateFlyRemark = (id) => {
        Axios.put("http://localhost:3001/update", { remarks: newRemark, idFly: id }).then(
            (response) => {
                setFlyList(
                flyList.map((val) => {
                    return val.idFly == id
                    ? {
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
              return val.id != id;
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
            
            <Button variant="danger"  onClick={getFlys}>
                VER VUELOS
            </Button>
            <br/>
            {flyList.map((val, key) => {
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
                    <div>
                        <input
                        type="text"
                        placeholder="2000..."
                        onChange={(event) => {
                            setNewRemark(event.target.value);
                        }}
                        />
                        <button
                        onClick={() => {
                            updateFlyRemark(val.idFly);
                        }}
                        >
                        {" "}
                        Update
                        </button>

                        <button
                            type="submit"
                            onClick={() => {
                                deleteFly(val.idFly);
                            }}
                        >
                        Delete
                        </button>
                    </div>
                    </div>
                );
            })}
        <br/>
        <br/>
      </Container>
    );
  }
  
  export default Consoleadmin;