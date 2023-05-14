import axios from "axios";
import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css"
import Nav from "../layout/nav/nav";


const Details = () => {
    const params = useParams();
    const[detail,setDetail] = useState([])
    const[productDetail, setproductDetail] = useState([])


    useEffect(()=> {
        getDetail()
        getprodutsDetail()
    }, [])

    async function getDetail() {
        try{
            const response = await axios.get(
                `https://dummyjson.com/products/${params.id}`
            )
            setDetail(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    async function getprodutsDetail() {
        try{
            const response = await axios.get(
                `https://dummyjson.com/products`
            )
            setproductDetail(response.data.products)
        }
        catch (error) {
            console.log(error)
        }
    } 

    // console.log (params);
    console.log(detail);
    return(
        <>

            <Nav/>


            <div className="divPrincipal">
                
                <img className="imgDetails" src={detail.thumbnail} alt="" />
            
                <div className="divNome">
                    <h1 className="nomeDetails">{detail.title}</h1>
                    <p className="tipoDetails">{detail.category}</p>
                    <p className="precoDetail">R$ {detail.price}</p>
                </div>
            </div>
            <div className="caixaDetails">
            <p className="textoDetails">{detail.description}</p>
            </div>
{/* 
            {
            productDetail.map((product)=>(
                   <>
                    
                    <Link className="link" to={`/product/${product.id}`}>
                        <div className="card">
                            <img className="img" src={product.thumbnail}/>

                            <div className="detail">
                                <h4 className="nome">{product.brand}</h4>
                                <p className="categoria">{product.category}</p>
                                <p className="preco">R$ {product.price}</p>
                            </div>
                        </div>
                    </Link>
                    
                   
                   </>
                    
                ))
            }
             */}
        </>
    )
}

export default Details