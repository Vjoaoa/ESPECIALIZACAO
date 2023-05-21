import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, deleteTodo  } from "../services";

export default function useTodo() {
  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery(["@todos"], getTodos, {
    refetchOnWindowFocus: false,
  });

  const AddTodoMutate = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });


  const DeleteMutate = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(["@todos"]),
    onError: () => alert("NOK"),
  });

  return {
    todos: data,
    isFetching,
    error,
    addTodo: AddTodoMutate.mutate,
    deleteTodo: DeleteMutate.mutate,
  };
}