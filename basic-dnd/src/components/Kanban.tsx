import { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Column } from "./column";

interface Task {
  id: string;
  title: string;
}



export const KanbanBoard: React.FC = () => {
const reorder = (list: Task[], startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      };
  const [incompleteTasks, setIncompleteTasks] = useState<Task[]>([
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
  ]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([
    { id: "3", title: "Task 3" },
  ]);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source} = result;
    if(!destination) return; 

    if(source.droppableId === destination.droppableId){
        const newTask = source.droppableId === "todo"? 
            reorder(incompleteTasks, source.index, destination.index)
            :
            reorder(completedTasks,source.index, destination.index);

            if(source.droppableId === "todo") setIncompleteTasks(newTask)
            else setCompletedTasks(newTask);
    
    } else{
        const sourceTasks = source.droppableId === "todo" ? incompleteTasks : completedTasks;
    
        const destinationTasks =
        destination.droppableId === "todo" ? incompleteTasks : completedTasks;

      const [movedTask] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, movedTask);

      if (source.droppableId === "todo") {
        setIncompleteTasks([...sourceTasks]);
        setCompletedTasks([...destinationTasks]);
      } else {
        setCompletedTasks([...sourceTasks]);
        setIncompleteTasks([...destinationTasks]);
      }
    
    }

        

    
    //pass to completed

    
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <Column title="TO-DO" tasks={incompleteTasks} id="todo" />
        <Column title="COMPLETED" tasks={completedTasks} id="completed" />
      </div>
    </DragDropContext>
  );
};
