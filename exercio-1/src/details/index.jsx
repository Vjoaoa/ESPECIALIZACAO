import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css"

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
            
            <div className="divPrincipal">
                <div className="divIMG">
                    <img className="imgDetails" src={detail.thumbnail} alt="" />
                </div>
                <div className="divNome">
                    <h1 className="nomeDetails">{detail.title}</h1>
                    <p className="tipoDetails">{detail.category}</p>
                    <p className="precoDetail">{detail.price}</p>
                </div>
            </div>
            <div className="caixaDetails">
            <p className="textoDetails">{detail.description}</p>
            </div>

            {/* {
            productDetail.map((product)=>(
                   <>
                    
                        <div className="card">
                            <img className="img" src={product.thumbnail}/>

                            <div className="detail">
                                <h4 className="nome">{product.brand}</h4>
                                <p className="categoria">{product.category}</p>
                                <p className="preco">R$ {product.price}</p>
                            </div>
                        </div>
                    
                   
                   </>
                    
                ))
            } */}
            
        </>
    )
}

export default Details