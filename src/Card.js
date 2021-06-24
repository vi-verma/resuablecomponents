import classes from './Card.module.css';

function Card(props){
    console.log("Hwllpksdfn kjds");
    return(
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Card;