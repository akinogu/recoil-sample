import { Todo } from '../recoil/todo'

type Props = {
  todoItem: Todo;
  onChangeStatus: () => void;
  onRemove: () => void;
}

const TodoItem: React.FC<Props> = ({ todoItem, onChangeStatus, onRemove }) => {
  return (
    <div>
      <input type="checkbox" checked={todoItem.isCompleted} onChange={onChangeStatus}/>
      <span>{todoItem.todo}</span>
      <button onClick={onRemove}>削除</button>
    </div>
  );
}

export default TodoItem;
