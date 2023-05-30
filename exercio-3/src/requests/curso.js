import api from "../service/api";



export default async function getCursos() {
  return (await api.get("/cursos")).data;
}