import './Profile.scss';
import MyPosts from './myPosts/MyPosts';

const Profile = (props) => {
  const img = require('./../../image/content-img.jpg');
  return (
    <section className="profile">
      <img className="profile__img" src={img} alt="nature" />
      <div>ava + description</div>
      <MyPosts
        myPosts={props.myPosts}
        updateNewPost={props.updateNewPost}
        addPost={props.addPost}
      />
    </section>
  );
};

export default Profile;
