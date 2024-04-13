import Login from "./features/login/components/Login";
import MainPage from "./features/spotify/pages/MainPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./features/spotify/pages/HomePage";
import SearchPage from "./features/spotify/pages/SearchPage";
import PlaylistPage from "./features/spotify/pages/PlaylistPage";
import ErrorPage from "./features/spotify/pages/ErrorPage";
import ArtistPage from "./features/spotify/pages/ArtistPage";
import Admin from "./admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentApi from "./features/spotify/pages/ContentApi";
import DetailMusic from "./features/spotify/pages/DetailMusic";
import ListLikeSong from "./features/spotify/components/body/ListLikeSong";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search/:searchQuery" element={<SearchPage />} />
          <Route path="/playlist/:playlistId" element={<PlaylistPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/content" element={<ContentApi />} />
        <Route path="/detailContentMusic/:id" element = {<DetailMusic/>}/>
        <Route path="/admin/:id" element = {<Admin/>}/>
        <Route path="/like-song" element = {<ListLikeSong/>}/>

      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
