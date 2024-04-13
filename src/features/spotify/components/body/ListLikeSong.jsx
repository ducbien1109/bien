import React from 'react';
import SideBar from '../sidebar/SideBar';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import SongTablePlaylist from './SongTablePlaylist';

const ListLikeSong = () => {
    const handleAddToLikedSongs = (song) => {
        // Thêm logic để xử lý thêm bài hát vào danh sách yêu thích ở đây
        console.log("Adding song to liked songs:", song);
    };

    return (
        <div>
            <div className="h-[100vh] flex flex-col text-white bg-black">
                <div className="flex min-h-[85vh] p-2 gap-2 md:flex-row flex-col">
                    <SideBar />
                    <div className="flex flex-col bg-[#121212] rounded-lg p-2 md:w-[65vw] lg:w-[75vw] overflow-hidden">
                        <NavBar />
                        <Outlet />
                    </div>
                </div>
            </div>
            <SongTablePlaylist onAddToLikedSongs={handleAddToLikedSongs} />
        </div>
    );
};

export default ListLikeSong;
