import classes from "./CardInfo.module.css";

const CardInfo = (props) => {
  return (
    <div className={classes.card__info}>
      <div>
        <h4>Repo</h4>
        <div className={classes.num}>{props.repos}</div>
      </div>
      <div>
        <h4>Followers</h4>
        <div className={classes.num}>{props.followers}</div>
      </div>
      <div>
        <h4>Following</h4>
        <div className={classes.num}>{props.following}</div>
      </div>
    </div>
  );
};

export default CardInfo;
