import { Droppable } from "@hello-pangea/dnd"
import styled from "styled-components"

const Container = styled.div `
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 18.75rem; 
    height: 29.69rem;
    overflow-y: scroll ;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;

`

const Title = styled.h3`
    padding: 8px; 
    background-color: pink;
    text-align: center;
    position: sticky;

`

const TaskList = styled.div`
    padding: 3px; 
    transition: background-color 0.2 ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 6.25rem;

`

interface ColumnProps{ 
    title:string, 
    task: string[], 
    id: string
}

export const Column: React.FC<ColumnProps> = ({title, tasks, id}) =>{
    return(
        <Container>
           <Title>{title}</Title>
           <Droppable droppableId={id}>
            {(provided, snapshot)=>
            
            <TaskList ref={provided.innerRef}
            {...provided.droppableProps}
            data-is-dragging-over={snapshot.isDraggingOver}
            >

                {provided.placeholder}

            </TaskList>
            }
           </Droppable>
        
        </Container>
    )

}