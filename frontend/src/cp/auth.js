import React from "react";
import {useForm} from 'react-hook-form'
import { Container } from "react-bootstrap";

function Auth(){
    const {register,handleSubmit}=useForm()
    return(
        <Container>
        <h1 className='text-danger'>Authentification</h1>
        </Container>
    )
}

export default Auth