import classes from './List.module.css';
import Card from "./Card";

function List(props){
    return(
        <div >
            <Card className={classes.card} >
                {props.userData.map((user) => {
                    return <div className={classes.list__item}>
                        {user.name} ({user.age})
                    </div>
                })}
            </Card>
        </div>
    );
};

export default List;