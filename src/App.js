import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';

//importacion para flys
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import Axios from "axios";

//importacion para notice
import { Container,Row, Col } from 'react-bootstrap';

//importacion para app.js
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Consoleadmin from './components/Consoleadmin';


function App() {
  return (

    <div className="App">
      <header className="App-header">
          <Navigation/>
        </header>
        
          <Routes>
            <Route exact path="/" element={<Notice/>} />
            <Route path="notice" element={<Notice/>} />
            <Route path="flys" element={<Flys/>} />
            <Route path="login" element={<Login/>} />
            <Route path="consoleadmin" element={<Consoleadmin/>} />
          </Routes>
 
    </div>
  );
}

function Notice() {
  return (
    <Container>
      <Row>
          <Col sm={8}>
              <h1>Noticias</h1>
              <p>Lorem ipsum dolor sit amet. Est distinctio eius ex laudantium architecto 33 deleniti sunt et voluptatibus laborum eos esse illo At quam iusto et consectetur quia. Et accusamus cupiditate eum alias illum vel consectetur ipsam qui illo voluptatem et odio natus eos suscipit quia. Sit officia provident ut nemo laboriosam ad autem facere vel odit molestiae quo possimus incidunt est cumque alias aut culpa sunt.

                Eum facere dolorem qui culpa voluptas qui quisquam doloribus aut dicta maiores et autem facere ea blanditiis voluptas eum esse quam. Qui sequi internos vel fugiat assumenda ut accusamus perspiciatis. Ut illum commodi id minima beatae vel recusandae quas et ullam molestiae qui iure magni est ullam tempora est laboriosam ullam. 33 tenetur amet aut minus omnis est internos consequatur vel tenetur obcaecati ut tempora perferendis.

                Vel sint explicabo et quos dolore quo nihil doloribus quo numquam doloribus et natus magni est possimus harum. Eum impedit incidunt est fugiat eius qui velit corrupti et nulla dolores hic aspernatur dolorem ex sunt voluptatem non laudantium accusamus. Qui enim voluptatem a sint quia et velit magni 33 perspiciatis nihil.

                Obcaecati aperiam quo odio minima eos corrupti nihil aut nulla mollitia? In asperiores ut quisquam voluptatem eos cumque facere nam quaerat fugit et deleniti nobis. Qui cupiditate laudantium sit quas error ea sint iste qui rerum dolore ad eligendi earum. Ab ipsum galisum non fugit voluptatem in iusto assumenda.

                Et dolores optio ea porro nisi cum explicabo libero qui distinctio quia eum eveniet voluptas sit rerum animi. Aut quia cumque ab maxime beatae non beatae consequuntur quo perspiciatis eaque nam vero illo ut debitis harum qui quisquam nesciunt? Quo reprehenderit tempora id eligendi optio ab labore unde quo similique nihil et natus veritatis est quae amet cum quas perspiciatis. Aut quas nesciunt id aperiam delectus est ipsam deserunt 33 minima nisi quo internos officia. Lorem ipsum dolor sit amet. Est distinctio eius ex laudantium architecto 33 deleniti sunt et voluptatibus laborum eos esse illo At quam iusto et consectetur quia. Et accusamus cupiditate eum alias illum vel consectetur ipsam qui illo voluptatem et odio natus eos suscipit quia. Sit officia provident ut nemo laboriosam ad autem facere vel odit molestiae quo possimus incidunt est cumque alias aut culpa sunt.

                Eum facere dolorem qui culpa voluptas qui quisquam doloribus aut dicta maiores et autem facere ea blanditiis voluptas eum esse quam. Qui sequi internos vel fugiat assumenda ut accusamus perspiciatis. Ut illum commodi id minima beatae vel recusandae quas et ullam molestiae qui iure magni est ullam tempora est laboriosam ullam. 33 tenetur amet aut minus omnis est internos consequatur vel tenetur obcaecati ut tempora perferendis.

                Vel sint explicabo et quos dolore quo nihil doloribus quo numquam doloribus et natus magni est possimus harum. Eum impedit incidunt est fugiat eius qui velit corrupti et nulla dolores hic aspernatur dolorem ex sunt voluptatem non laudantium accusamus. Qui enim voluptatem a sint quia et velit magni 33 perspiciatis nihil.

                Obcaecati aperiam quo odio minima eos corrupti nihil aut nulla mollitia? In asperiores ut quisquam voluptatem eos cumque facere nam quaerat fugit et deleniti nobis. Qui cupiditate laudantium sit quas error ea sint iste qui rerum dolore ad eligendi earum. Ab ipsum galisum non fugit voluptatem in iusto assumenda.

                Et dolores optio ea porro nisi cum explicabo libero qui distinctio quia eum eveniet voluptas sit rerum animi. Aut quia cumque ab maxime beatae non beatae consequuntur quo perspiciatis eaque nam vero illo ut debitis harum qui quisquam nesciunt? Quo reprehenderit tempora id eligendi optio ab labore unde quo similique nihil et natus veritatis est quae amet cum quas perspiciatis. Aut quas nesciunt id aperiam delectus est ipsam deserunt 33 minima nisi quo internos officia.</p>
          </Col>
          <Col sm={4}>
              <h1>COVID</h1>
              <p> La cifra se alcanzó luego de que las autoridades sanitarias reportaran 2.157 casos nuevos de contagio, tras analizar 52.453 pruebas (27.026 de PCR y 25.427 de antígenos).

                Del total general, se han recuperado 4'884.383 personas y 13.092 continúan con el virus activo.

                (Vea: Colombia extendería la emergencia sanitaria por el covid- 19).

                En el último año y ocho meses, además, se han procesado 27'610.201 pruebas.

                Bogotá (1'459.654), Antioquia (764.161), Valle del Cauca (414.495), Atlántico (336.285) y Cundinamarca (265.766) concentran la mayoría de positivos en el país.

                (Vea: El acuerdo de Pfizer para facilitar acceso mundial a píldora anticovid).

                En cuanto a muertes, se registran 50 nuevas, de las cuales 41 ocurrieron en días diferentes a este viernes, y el total de fallecimientos a causa de la pandemia en el país ya es de 128.013.</p>
          </Col>
      </Row>
      <Row>
          <Col md={{   span: 3, offset: 3 }}>
              <h2>Contactanos</h2>
              <p>fabianrojas.sab@gmail.com </p>
              <br></br>
              <p>3132172728 </p>
          </Col>
      </Row>
    </Container>
  );
}

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

export default App;
