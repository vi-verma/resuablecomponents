import React, {useState, useRef} from 'react';
import Button from './Button';
import Card from './Card';
import classes from './UserInput.module.css';
import ErrorModel from './ErrorModel';


function UserInput(props){
    const [isError, setIsError] = useState()
    // const defaultUser ={
    //     name:'',
    //     age:''
    // };
    const newUserNameRef = useRef();
    const newUserAgeRef = useRef();
    
    
    // const [newUser, setNewUser] = useState(defaultUser);
    const submitHandeler = () => {
    const enteredName= newUserNameRef.current.value;
    const enteredAge = newUserAgeRef.current.value;
    
        if(enteredName === '' || enteredAge === ''){
            setIsError({
                message:'Please enter valid input (non empty value)!',
                title:'Error!'
            });return;
        };
        if(+enteredAge < 0 ){
            setIsError({
                title:'Error!',
                message:'Age should be greater then 0'
            });
        }
        
        props.onSubmit({name:enteredName,age:enteredAge});
        // setNewUser(defaultUser);
        newUserNameRef.current.value = '';
        newUserAgeRef.current.value =''; 
    };
    const errorHandeler =() => setIsError('');

    return(
        <React.Fragment>
            {isError && <ErrorModel onClick={errorHandeler} message={isError.message} title={isError.title} />}
            <Card className={classes.card}>
                <>
                    <label className={classes.label} >User Name</label>
                    <input
                        className={classes.input_input}
                        // onChange={(event) => setNewUser({...newUser, name:event.target.value})}
                        // value={newUser.name}
                        type='text' 
                        ref={newUserNameRef}
                    />
                </>
                <>
                    <label className={classes.label}>Age(Years)</label>
                    <input
                        className={classes.input_input}
                        // onChange={(event) => setNewUser({...newUser, age:event.target.value})}
                        // value={newUser.age}
                        type='number'
                        min='1' 
                        max='100' 
                        ref={newUserAgeRef}
                    />
                </>
                <Button className={classes.button} onClick={submitHandeler} type='button'>Add User</Button>
            </Card>
        </React.Fragment>    
    );
};

export default UserInput;