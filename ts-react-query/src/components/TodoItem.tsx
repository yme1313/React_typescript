import { useRecoilState } from 'recoil';
import { Todo, todoListState } from '../containers/TodoListContainer';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

type Helper = (arr: Todo[], index: number, newValue: Todo) => Todo[];
const replaceItemAtIndex: Helper = (
  arr: Todo[],
  index: number,
  newValue: Todo,
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: Todo[], index: number): Todo[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default function TodoItem({ item }: { item: Todo }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <Wrapper>
      <Checkbox
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <TextField
        size="small"
        value={item.text}
        onChange={editItemText}
        
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteIcon />
      </IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 5px;
`;
