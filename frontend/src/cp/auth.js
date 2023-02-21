import React from "react";
import React, { useContext } from "react";
import {useForm} from 'react-hook-form'
import { Container } from "react-bootstrap";
import axios from 'axios'
import {AunthenticateContext} from './AuthContext'
import {useNavigate} from 'react-router-dom'
const api = axios.create({
    baseURL : "http://localhost:4000/api/v1"
})

function Auth(){
    const {register,handleSubmit}=useForm()
    const [authInfo,setAuthInfo]= useContext(AunthenticateContext)
    const navigate=useNavigate();
    const submitFormAuth=async(data)=>{
        api.post('/login',{
            "email":data.email,
            "password":data.pwd
        })
        .then(rep=>{
            console.log(rep.data)
            setAuthInfo(()=>({
                token:rep.data,
                isAuthenticated:true
            }))
            navigate('/manageproducts')
        })
    }
    return(
        <Container>
        <h1 className='text-danger'>Authentification</h1>
        <form onSubmit={handleSubmit(submitFormAuth)}>
          <div className='form-group'>
              <label>Email</label>
              <input {...register('email')} type="email" className="form-control"/>
          </div>
          <div className='form-group'>
              <label>Mot de passe</label>
               <input {...register('pwd')} type="password" className="form-control"/>
         </div>
         <button type="submit" className="btn btn-primary mt-2">Entrer</button>
       </form>
        </Container>
    )
}

export default Auth