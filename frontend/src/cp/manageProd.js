import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
function ManageProd(){
    return(
        <Container>
            <Row>
                <Col md={10}>Gestion des produits</Col>
                <Col md={2}>
                    <button onClick={()=>setAuthInfo(()=>(
                        {token:'',isAuthenticated:false}
                    ))} className='btn btn-danger'>Logout</button>
                </Col>
            </Row>
        </Container>
    )
}

export default ManageProd
