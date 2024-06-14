import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #000;
`;

const Text = styled.div``;

interface Tasks {
  id: string;
  title: string;
}

interface TaskProps {
  index: number;
  task: Tasks;
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-is-dragging={snapshot.isDragging}
        >
          <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
            <span>
              <small>#{task.id}</small>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", padding: 2 }}>
            <Text>{task.title}</Text>
          </div>
        </Container>
      )}
    </Draggable>
  );
};
