import "./login.css" 
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";


const Login = () => {

    const { changeUserEmail } = useContext(MyContext);

    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({ email: "", password: "" });

    function logar() {
        /*  alert(JSON.stringify(formData)); */
        changeUserEmail(formData.email);
        navigate("/");
    }

    return (
        
        <>
        <div className="backgroudLogin">
            
            <form action="" className="form">
                
                <div className="divForm">

                    <h1 className="h1Login">login</h1>

                    <p className="pLogin">Insira seus dados para entrar no sistema</p>

                    <input
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })} 
                    className="inputLogin" 
                    type="email" 
                    placeholder="Email"/>

                    <input
                    onChange={(event) =>setFormData({ ...formData, password: event.target.value })} 
                    className="inputLogin"
                    type="password"
                    placeholder="Senha"/>

                    <button onClick={logar} className="buttonLogin">Entrar</button>
                
                </div>

            </form>

            

        </div>
        
        </>
    )
}

export default Login
