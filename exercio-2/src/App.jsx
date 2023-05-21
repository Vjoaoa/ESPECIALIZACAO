import Formm from "./form"
import Cardd from "./card"
import "./app.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {

  const client = new QueryClient();

  return (
    <>
    
    <QueryClientProvider client={client}>
      <Formm/>
      <Cardd/>
    </QueryClientProvider>
      
    </>
  )
}

export default App
