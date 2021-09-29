import classes from "./Social.module.css";
import location from "../assets/icon-location.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";
import iconCompany from "../assets/icon-company.svg";


const Social = (props) => {
  return (
    <div className={classes.social}>
      <div className={classes["social-item"]}>
        <img src={location} alt="" />
        {props.location ? <p>{props.location}</p> : <p>Not available!</p>}
      </div>
      <div className={classes["social-item"]}>
        <img src={iconTwitter} alt="" />
       {props.twitter ? <p>{props.twitter}</p> : <p>Not available!</p>}
      </div>
      <div className={classes["social-item"]}>
        <img src={iconWebsite} alt="" />
        {props.blog ? <p>{props.blog}</p> : <p>Not available!</p>}
      </div>
      <div className={classes["social-item"]}>
        <img src={iconCompany} alt="" />
        {props.company ? <p>{props.company}</p> : <p>Not available!</p>}
      </div>
    </div>
  );
};

export default Social;
