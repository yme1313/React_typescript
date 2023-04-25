import { useQuery, QueryKey  } from "@tanstack/react-query";
import { axiosTodo } from "../api/api";
// import 주의하기. react-query 아님

interface toDoInterface {
  id : string;
  title: string;
  userId : string;
}

const queryKey: QueryKey = ['todoList'];

export default function Movie() {
  const { data, isLoading, isError } = useQuery<toDoInterface[]>(
    queryKey,
    axiosTodo
  )

  if (isLoading) {
    return <h4>Loading</h4>
  }

  if (isError) {
    return <h4>Something went wrong !!</h4>
  }

  return (
    <>
        <div>
        {data?.map((todo) => (
          <div key={todo.id}>
            <h2>제목 : {todo.title}</h2>
            <p>사용자 번호 : {todo.userId}</p>
          </div>
      ))}
        </div>
    </>
  )
}