import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
import getAlunos, { removerAluno } from "../requests/requests";
import "./styler.css"
import { BsFillTrash3Fill } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

export default function Table(props) {
  const queryClient = useQueryClient();
  const { formData, setFormData } = props;

  const { data, isFetching } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(removerAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      alert("Apagado com sucesso!");
    },
    onError: () => {
      alert("Erro ao apagar aluno");
    },
  });

  if (isFetching) {
    return <h3>Buscando alunos...</h3>;
  }

  function apagarAluno(id) {
    mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div>
      <h1>Minha table</h1>
      <ul>
        {data.map((aluno, index) => {
          delete aluno._id;
          delete aluno.__v;

          return (
            <div key={index}>
              <div className="divplayFlex">
                <h5 className="id" >{index + 1}</h5>
                <div className="nome">
                <h4 >{aluno.nome}</h4>
                </div>
                <div className="matricula">
                  <p >{aluno.matricula}</p>
                </div>
                <div className="curso">
                  <p>{aluno.curso}</p>
                </div>
                <div className="bimestre">
                  <p>{aluno.bimestre}</p>
                </div>
                <button onClick={() => preencherCampos(aluno)}><FiEdit/></button>
                <button onClick={() => apagarAluno(aluno._id)}><BsFillTrash3Fill/></button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}