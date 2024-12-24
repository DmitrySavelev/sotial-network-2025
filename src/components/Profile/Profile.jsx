import MyPosts from "../MyPosts/MyPosts";
import p from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={p.content}>
      <img className={p.city}
        src="https://i.pinimg.com/originals/49/e3/f1/49e3f1b4e3b12b401f7f1066b4233015.jpg"
        alt="NY"
      />
      <div>ava+ description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
