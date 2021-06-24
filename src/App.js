import {useState}  from 'react';
import UserInput from "./userInput";
import List from './List';
import classes  from './App.module.css';


function App() {
  const [userData, setUserData] = useState([]);
  const onSubmit =(newUser) => setUserData([newUser, ...userData])

  return (
    <div className={classes.contaiiner}>
        <UserInput onSubmit={onSubmit}/>
        <List userData={userData}></List>
    </div>
  );
}

export default App;
