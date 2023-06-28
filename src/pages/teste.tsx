import Task from '@/model/Task'
import '../styles/globals.css'

export default function Text() {

    let task: Task = new Task(1, 'Exemple')
    task = task.finished()

    return (
      <div className='flex flex-col h-screen text-white items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-600'>
        <span className='text-40px'>{task.id}</span>
        <span className='text-40px'>{task.description}</span>
        <span className='text-40px'>{task.status ? 'Yes' : 'No'}</span>
      </div>
    )
  }