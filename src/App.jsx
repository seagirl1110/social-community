import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

const App = (props) => {
  const { state, dispatch } = props;
  const { profilePage, dialogsPage } = state;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile profilePage={profilePage} dispatch={dispatch} />}
            />
            <Route
              path="/messages/*"
              element={<Dialogs dialogsPage={dialogsPage} dispatch={dispatch} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
