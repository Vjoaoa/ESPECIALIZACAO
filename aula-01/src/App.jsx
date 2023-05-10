import React, { useState , useEffect } from "react";


//function
function App() {
  const [numero, setNumero] = useState(10)
  
  function increment() {
    setNumero(numero + 1)

    //pega o valor anterior oara alterar algo
    // setNumero((previous) => previous + 1)
  }

  useEffect(()=> {
    alert("executei!!!")
  }, [numero])
  
  return(
    <>
      <h1>hello world</h1>
      <h2>{numero}</h2>
      <button onClick={increment}>adicionar</button>
    </>
  )
  
  
}

export default App;


// export default class App extends React.Component{
//   render() {
//     return <h1>Hello World</h1>
//   }
// }