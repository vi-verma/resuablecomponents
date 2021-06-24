import classes from './Error.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM  from 'react-dom';
import React from 'react';

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onclick}/>
    );
};

function ModelOverlay(props){
    return(
        <Card className={classes.card}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.footer}>
                <Button onClick={props.onClick} className={classes.button}>Okay</Button>
            </footer>
        </Card>
    );
};
const ErrorModel = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
            <Backdrop onclick={props.onClick}
                />,
                document.getElementById('backdrop-root') 
                )}
                {ReactDOM.createPortal(
            <ModelOverlay 
                onClick={props.onClick} 
                title={props.title} 
                message={props.message}
                />, 
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};
export default ErrorModel;