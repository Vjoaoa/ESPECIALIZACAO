import { MyContext } from "../../contexts/MyContext";
import "./nav.css"
import { useContext } from "react";




const Nav = () => {

    const { userEmail, logout } = useContext(MyContext);


    return(
        <>
            
            <div className="nav">
                <h1>Shop Products</h1>
                <p className="pEmail"> {userEmail} </p>
                <button onClick={logout} className="btnSair">Sair</button>
            </div>
            
        
        </>
    )
}

export default Nav;