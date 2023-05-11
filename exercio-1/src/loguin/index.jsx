import "./login.css" 


const Login = () => {
    return (
        
        <>
        <div className="backgroudLogin">
            
            <form action="" className="form">
                
                <div className="divForm">

                    <h1 className="h1Login">login</h1>

                    <p className="pLogin">Insira seus dados para entrar no sistema</p>

                    <input className="inputLogin" type="email" placeholder="Email"/>

                    <input className="inputLogin" type="password" placeholder="Senha"/>

                    <button className="buttonLogin">Entrar</button>
                
                </div>

            </form>

            

        </div>
        
        </>
    )
}

export default Login
