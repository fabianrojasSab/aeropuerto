import React from 'react';
import { Form,Button, Container,} from 'react-bootstrap';

function Flys() {
     let nArray;

    function capturarDatos() {
        var form = document.getElementById("formlogin").elements;
        nArray={};
        for ( var i = 0; i < form.length; i++) {
                if (form[i].tagName == "INPUT"){
                   nArray[form[i].id] = form[i].value;
               }
          }  
    }
    
    return (
        <Container>
            <br/><br/>
            <Form id="formlogin">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="Enter user" />
                <Form.Text className="text-muted">
                    We'll never share your user with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <br/>

                <Button variant="primary"  href="/consoleadmin" onClick={capturarDatos}>
                Submit
                </Button>
            </Form>  
        </Container>
 
    );
  }
  
  export default Flys;