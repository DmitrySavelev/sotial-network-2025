import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://assets.change.org/photos/3/ml/nr/WLMLnRbACdbcapg-1600x900-noPad.jpg?1548279724" />
      {props.message}
      <div>
        <span>like </span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;
