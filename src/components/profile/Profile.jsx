import './Profile.scss';
import MyPostsContainer from './myPosts/MyPostsContainer';

const Profile = (props) => {
  const img = require('./../../image/content-img.jpg');
  return (
    <section className="profile">
      <img className="profile__img" src={img} alt="nature" />
      <div>ava + description</div>
      <MyPostsContainer store={props.store} />
    </section>
  );
};

export default Profile;
