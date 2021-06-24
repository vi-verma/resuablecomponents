import classes from './Button.module.css';

function Button(props){
    return(
        <div>
            <button type={props.type || 'button'} className={classes.button} onClick={props.onClick}>{props.children}</button>
        </div>
    );
};

export default Button;