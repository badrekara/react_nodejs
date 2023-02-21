import axios from 'axios'
import Prod from './product'
import { useEffect,useState } from 'react'
import { Container,Pagination,Row,Col } from 'react-bootstrap'
const api = axios.create({
    baseURL : "http://localhost:4000/api/v1"
})

function Product(){
    const[listProd,setListProd]= useState([])
    const[numPage,setNumPage]= useState(1)
    const[totalPages,setTotalPages]= useState(1)
    useEffect(()=>{
        //-----------getAllProducts----------
        const allProducts = async(req,res)=>{
            api.get('/products?page='+numPage+'&limit=5')
            .then(rep=>{
                console.log(rep.data.produits)
                setListProd(rep.data.produits)
                setTotalPages(rep.data.totalPages)
            })

        }
        //------------------------
                allProducts()
    },[numPage])
    //--------------pagination-------------------

            let items = [];
        for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item onClick={()=>setNumPage(number)} key={number} active={number === numPage}>
            {number}
            </Pagination.Item>,
  );
}
    //-----------------------------------------
    return(
        <Container>
            <h2 className='text-danger'>Produits</h2>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>libele</th>
                    <th>Catégorie</th>
                    <th>Prix</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listProd.map(p=><Prod libele={p.libele} cat={p.categorie} prix={p.prix} key={p._id}/>)}
                    </tbody>

                
            </table>

            <Row>
                <Col className='md-6 offset-3'>
                <Pagination>{items}</Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default Product