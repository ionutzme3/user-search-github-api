import GridHeader from "./GridHeader";
import classes from "./Section.module.css";
import UserInfo from "./UserInfo";

const Section = (props) => {
  return (
    <section className={classes.section}>
      {props.users.map((item) => (
        <>
        <GridHeader 
          key={item.id}
          name={item.name}
          login={item.login}
          created={item.created_at}
          bio={item.bio}
          image={item.avatar_url}
        />
        <UserInfo 
          repos={item.public_repos}
          followers={item.followers}
          following={item.following}
          location={item.location}
          twitter={item.twitter_username}
          blog={item.blog}
          company={item.company}
        />
        </>

      ))}
    </section>
  );
};

export default Section;
