import Post from "../Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  // let posts = [
  //   { id: 1, message: "hi", likesCount: 10 },
  //   { id: 2, message: "hello", likesCount: 100 },
  //   { id: 3, message: "hello", likesCount: 100 },
  //   { id: 4, message: "hello", likesCount: 100 },
  // ];
  // console.log(posts);
  // console.log(props.props);
  
  const postsElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>new post</div>
      <div>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
