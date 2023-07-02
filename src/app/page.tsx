import Header from "@/components/Header";
import initialTasks from "../data/mock";

export default function Home() {

  let tasks = initialTasks;
  tasks = tasks.removeFilter();

  const renderTasks = () => {
    return tasks.itens.map(task => {
      return (
        <div key={task.id}>
          <span>{task.id} - </span>
          <span>{task.description} - </span>
          <span>{task.status ? 'Concluida' : 'Ativa'}</span>
        </div>
      )
    })
  }

  return (
    <main className="h-screen w-screen">
        <Header />
        {renderTasks()}
    </main>
  )
}
