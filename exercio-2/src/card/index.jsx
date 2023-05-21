import "./card.css"
import useTodo from "../hook/useTodos";
import { useState } from "react";
import {RiDeleteBin6Line} from "react-icons/ri"
import { FaBeer } from 'react-icons/fa'


const Cardd = () =>{

    const { error, isFetching, todos,  deleteTodo} = useTodo();

   
 

    if (isFetching) {
        return <h3>Carregando...</h3>;
    }
    
    if (error) {
        return <h3 className="errorr">Erro ao buscar dados </h3>;
    }
    
    // function fillStates(todo) {
    //     setId(todo._id);
    //     setTitle(todo.title);
    
    //     // const test = todo.date.substring(0, 10);
    //     const dateFormated = todo.date.split("T")[0];
    //     setDate(dateFormated);
    // }
   
    

    return(
        <>
            
           
           <div className="testediv">     
           
                {todos.map((todo, idx) => (
                    
                    <div key={idx} className="test">
                    
                        <div className="divDescrição">

                        <h1 className="cardTitulo">{todo.title}</h1>    

                        <p className="dataCard">{todo.date}</p>

                    </div>

                    <RiDeleteBin6Line onClick={() => deleteTodo(todo._id)} />
                </div>
                ))}
           
           </div>

        </>
    )
}

export default Cardd