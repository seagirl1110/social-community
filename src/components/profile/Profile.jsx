import './Profile.scss';
import MyPosts from './myPosts/MyPosts';

const Profile = () => {
  const img = require('./../../image/content-img.jpg');
  return (
    <section className="content">
      <img className="content__img" src={img} alt="nature" />
      <div>ava + description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
