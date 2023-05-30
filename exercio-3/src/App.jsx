import { useState } from "react";
import Table from "./table"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./form";

const client = new QueryClient();

function App() {

  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  function clearState() {
    setFormData({
      id: "",
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    });
  }



  return (
    <QueryClientProvider client={client}>

      <h1>Diário Eletrônico</h1>

      <Form
        formData={formData}
        setFormData={setFormData}
        clearState={clearState}
      />
     

      <Table formData={formData} setFormData={setFormData} />
    
    </QueryClientProvider>
    )
}

export default App
