import { useState } from "react";
import useTodo from "../hook/useTodos";
import "./form.css"

const Formm = () => {

    const { addTodo, todos } = useTodo();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");


    return(
        <>
        
        <div className="backgroud">

 

            <div className="formEnvio">
                <h1 className="h1Form">Cadastra tarefa</h1>
                <input
                className="inputsformenvio" 
                type="text"
                placeholder="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                className="inputsformenvio"
                type="date"
                placeholder="Data"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
                <button className="btnEnvio" onClick={() => addTodo({ title, date })}>Salvar</button>
            </div>

        </div>

        </>
    )
}

export default Formm;