import CardInfo from "./CardInfo";
import Social from "./Social";
import classes from "./UserInfo.module.css";

const UserInfo = (props) => {
    return (
        <div className={classes.user__info} >
            <CardInfo 
                repos={props.repos}
                followers={props.followers}
                following={props.following}
            />
            <Social 
                location={props.location}
                twitter={props.twitter_username}
                blog={props.blog}
                company={props.company}
            />
        </div>
    );
};

export default UserInfo;
