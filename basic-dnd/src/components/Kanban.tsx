

import { useState } from "react"
import { DragDropContext } from "@hello-pangea/dnd"
import { Column } from "./column";




export const KanbaBoard:  React.FC = () =>{
    const[completed, setCompleted] = useState([]);
    const[incompleted, setIncompleted] = useState([])
    
    
    return (
    <DragDropContext>
        <h2 style={{textAlign: "center"}}>PROGRESS BOARD</h2>
        <div style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            padding: "8px"
        }}>
            <Column title="TO-DO" tasks ={incompleted} id={"todo"} />
        </div>




    </DragDropContext>    
    
    
    )
}