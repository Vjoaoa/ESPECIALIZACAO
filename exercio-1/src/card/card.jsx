import axios from "axios"
import "./card.css"
import { useEffect, useState} from "react"

const Card = () => {
   const[produto,SetProduto] = useState([])

    useEffect(()=> {
        getProduct()
    }, [])

    async function getProduct() {
        try{
            const response = await axios.get(
                "https://dummyjson.com/products"
            )
            console.log(response.data);
            SetProduto(response.data.products)
        }
        catch (error) {
            alert("error ao buscar produtos")
        }
    }
    
    return (

    <>
        <div className="cardCompleto">
            {
                produto.map((product)=>(
                    <div className="card">
                        <img src={product.thumbnail}/>

                        <div className="detail">
                            <h4 className="nome">{product.brand}</h4>
                            <p className="categoria">{product.category}</p>
                            <p className="preco">R$ {product.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    
    </>
    )
} 


export default Card;