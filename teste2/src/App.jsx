import { useState } from "react";


import formatDate from "./utils/date";
import useTodo from "./hooks";

export default function App() {
  const { addTodo, error, isFetching, todos, editTodo, deleteTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [descrition, setDescrition] = useState("");

  const [id, setId] = useState(null);

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados </h3>;
  }

  function fillStates(todo) {
    setId(todo._id);
    setTitle(todo.title);
    setDescrition(todo.description)
    // const test = todo.date.substring(0, 10);
    const dateFormated = todo.date.split("T")[0];
    setDate(dateFormated);
  }

  function clearState() {
    setDate("");
    setTitle("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descrição"
          value={descrition}
          onChange={(e) => setDescrition(e.target.value)}
        />

        <button
          onClick={() => {
            if (id) {
              editTodo({ payload: { title, date }, id: id });
              setId(null);
            } else {
              addTodo({ title, date, descrition });
            }
            clearState();
          }}
        >
          Salvar
        </button>
      </div>
      <div>
        <h1>Hello App</h1>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>
              <h2>{todo.title}</h2>
              <h3>{formatDate(todo.date)}</h3>
              <h4>{todo.__v}</h4>
              <button onClick={() => fillStates(todo)}>Editar</button>
              <button onClick={() => deleteTodo(todo._id)}>Apagar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}