import Header from "@/components/Header";
import initialTasks from "@/data/mock";
import Task from "@/model/Task";

export default function Home() {

  let tasks = initialTasks;
  tasks = tasks.removeFilter();
  tasks = tasks.addTask(Task.create(10, "Finished project"));
  tasks = tasks.addTask(Task.create(20, "Finished Article"));
  tasks = tasks.toogleTask(Task.createFinished(20, "Finished Article"));

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
