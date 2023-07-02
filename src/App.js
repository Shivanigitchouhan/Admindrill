import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/SignUpPage/SignUp';
import Login from './Pages/LoginPage/Login';
import Protected from './Layouts/Protected';
import Dashboard from './Pages/DashboardPage/Dashboard';
import Notification from './DashboardComponents/Notification';
import History from './DashboardComponents/History';
import Game from './Pages/GamePage/Game';
import Team from './TeamComponents/Team';
import AddGame from './GameComponents/AddGame';
import NewGame from './GameComponents/NewGame';
import OnlyGame from './Pages/GamePage/OnlyGames';
import Users from './Pages/UsersPage/Users';
import UserProfile from './UserComponents/UserProfile';
import UserHistory from './UserComponents/UserHistory';
import UserCount from './UserComponents/UserCount';
import UserGame from './UserComponents/UserGame';
import UserWallet from './UserComponents/UserWallet';
import UserDrill from './UserComponents/UserDrill';
import Player from './Pages/PlayersPage/Player';
import PlayersProfile from './PlayerComponents/PlayersProfile';
import AddPlayerOne from './PlayerComponents/AddPlayerOne';
import AddPlayerTwo from './PlayerComponents/AddPlayerTwo';
import Profile from './Pages/ProfilePage/Profile';
import TeamOne from './TeamComponents/TeamOne';
import TeamTwo from './TeamComponents/TeamTwo.';
import DateTime from './GameComponents/DateTime';
import Price from './GameComponents/Price';
import LiveDate from './GameComponents/LiveDate';
import AddContest from './ContestComponent/AddContest';
import Contest from './ContestComponent/Contest';

function App() {
  return (
    <div>

      <BrowserRouter >

        <Routes>
          <Route path="/" exact element={<SignUp />} />
          <Route path="/login" element={<Protected Component={Login} />} />
          <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
          <Route path="/notification" element={<Protected Component={Notification} />} />
          <Route path="/history" element={<Protected Component={History} />} />
          <Route path="/game" element={<Protected Component={Game} />} />
          <Route path="/team" element={<Protected Component={Team} />} />
          <Route path="/addgame" element={<Protected Component={AddGame} />} />
          <Route path="/newgame" element={<Protected Component={NewGame} />} />
          <Route path="/onlygame" element={<Protected Component={OnlyGame} />} />
          <Route path="/teamone" element={<Protected Component={TeamOne} />} />
          <Route path="/teamtwo" element={<Protected Component={TeamTwo} />} />
          <Route path="/datetime" element={<Protected Component={DateTime} />} />
          <Route path="/price" element={<Protected Component={Price} />} />
          <Route path="/livedate" element={<Protected Component={LiveDate} />} />
          <Route path="/users" element={<Protected Component={Users} />} />
          <Route path="/userprofile" element={<Protected Component={UserProfile} />} />
          <Route path="/userhistory" element={<Protected Component={UserHistory} />} />
          <Route path="/usercount" element={<Protected Component={UserCount} />} />
          <Route path="/usergame" element={<Protected Component={UserGame} />} />
          <Route path="/userwallet" element={<Protected Component={UserWallet} />} />
          <Route path="/userdrill" element={<Protected Component={UserDrill} />} />
          <Route path="/players" element={<Protected Component={Player} />} />
          <Route path="/playersprofile" element={<Protected Component={PlayersProfile} />} />
          <Route path="/addplayerone" element={<Protected Component={AddPlayerOne} />} />
          <Route path="/addplayertwo" element={<Protected Component={AddPlayerTwo} />} />
          <Route path="/profile" element={<Protected Component={Profile} />} />
          <Route path="/contest" element={<Protected Component={Contest} />} />
          <Route path="/addcontest" element={<Protected Component={AddContest} />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;



