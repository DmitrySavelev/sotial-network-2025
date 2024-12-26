import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={p.city}
        src="https://i.pinimg.com/originals/49/e3/f1/49e3f1b4e3b12b401f7f1066b4233015.jpg"
        alt="NY"
      />
      <div className={p.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
