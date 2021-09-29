import classes from "./GridHeader.module.css";


const GridHeader = (props) => {
  return (
    <div className={classes.grid__header}>
      <div >
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className={classes.user__name}>
        <div>
          <h2>{props.name}</h2>
          <a href="#x">
            <h3>@{props.login}</h3>
          </a>
        </div>
        <div className={classes.data}>
          <p>
            Joined <span>{new Date(props.created).toLocaleDateString()}</span>
          </p>
        </div>
        <p className={classes["text-content"]}>
          {props.bio ? props.bio : "This profile has no bio."}
        </p>
      </div>
    </div>
  );
};

export default GridHeader;
