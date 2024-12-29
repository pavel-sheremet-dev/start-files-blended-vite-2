import TodoListItem from "../TodoListItem/TodoListItem";
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({todos}) => {
  return (
  <Grid>
  {todos.map((item, index) => (
    <GridItem key={item.id} >
      
      <TodoListItem text={item.text} index={index +1}/>
    </GridItem>
  ))}
</Grid>
  )
};
  
export default TodoList;
