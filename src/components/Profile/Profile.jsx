import MyPosts from "../MyPosts/MyPosts";
import p from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={p.content}>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
