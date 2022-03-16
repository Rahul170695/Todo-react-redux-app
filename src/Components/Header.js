//import Card from '../UI/Card';
import classes from './Header.module.css';
import image from '../Assets/TODO-image.jpg';

import {useSelector} from 'react-redux';

const Header = () => {

  const todo = useSelector(state=>state.toDo.addToDo.length);
    return (
      // <div className={classes.heading} >
      //   <h1 className={classes.content} >TODO</h1>
      // </div>
      <div className={classes.parentTitle} >
      <img src={image} alt="TODO"/>
        <h1 className={classes.title} >TODO</h1>
        {todo && <p className={classes.todoNumber}>You have {todo} task to complete!</p>}
        </div>
    );
  }
  
  export default Header;
  