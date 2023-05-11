import axios from "axios"
import "./card.css"
import { useEffect, useState} from "react"
import Nav from '../nav/nav'
import { Link } from "react-router-dom"
const Card = () => {
   const[produto,SetProduto] = useState([])
//    const navigate = useNavigate();

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

     <Nav/> 

        <div className="cardCompleto">


            {
                produto.map((product)=>(
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
        </div>
    
    </>
    )
} 


export default Card;