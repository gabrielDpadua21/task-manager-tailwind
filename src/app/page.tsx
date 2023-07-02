'use client'

import Form from "@/components/Form";
import ListComponent from "@/components/list/List";
import TemplateContent from "@/components/template/TemplateContent";
import TemplateHeader from "@/components/template/TemplateHeader";
import initialTasks from "@/data/mock";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <main className="h-screen bg-gray-300 flex flex-col">
        <TemplateHeader>
          <Form />
        </TemplateHeader>
        <TemplateContent>
          <ListComponent tasks={tasks} changeTasks={(newTasks) => setTasks(newTasks)}/>
        </TemplateContent>
    </main>
  )
}
