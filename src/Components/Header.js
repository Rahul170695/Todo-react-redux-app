//import Card from '../UI/Card';
import classes from './Header.module.css';
import half from '../Assets/TODO-image.jpg';
import full from '../Assets/background.jpg';
// import { useState } from 'react';

import { useSelector } from 'react-redux';

const Header = () => {

  // const [src, setSrc] = useState('');

  // const onLoadHandler = (event) => {
  //   setSrc(event.target.currentSrc);
  // }

  const todo = useSelector(state => state.toDo.addToDo.length);
  return (
    // <div className={classes.heading} >
    //   <h1 className={classes.content} >TODO</h1>
    // </div>
    <div className={classes.parentTitle} >
      {/* <img src={image} alt="TODO"/> */}
      {/* <img src={full} srcSet={`${full} 500px, ${half} 900px`} alt="TODO"  /> */}
      <picture>
        <source media="(max-width: 900px)" srcSet={full} />
        {/* <source media="(max-width: 480px)" srcSet={half} /> */}
              <img src={half} alt="TODO" />
        {/* <img src={half} alt="todo" /> */}
      </picture>
      <h1 className={classes.title} >TODO</h1>
      {todo > 0 && <p className={classes.todoNumber}>You have {todo} task to complete!</p>}
    </div>
  );
}

export default Header;
