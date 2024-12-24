import Post from "../Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <hr />
      My posts <div>new post</div>
      <div>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="hi" likesCount="15" />
        <Post message="hello" likesCount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
