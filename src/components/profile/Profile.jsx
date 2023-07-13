import './Profile.scss';
import MyPostsContainer from './myPosts/MyPostsContainer';

const Profile = () => {
  const img = require('./../../image/content-img.jpg');
  return (
    <section className="profile">
      <img className="profile__img" src={img} alt="nature" />
      <div>ava + description</div>
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
