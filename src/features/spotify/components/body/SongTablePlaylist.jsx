import React from "react";
import SongTableBody from "./bottom/SongTableBody";

export default function SongTablePlaylist({ tracks, onAddToLikedSongs }) {
  return (
    <div className="mt-4">
      <table className="w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Date Added</th>
            <th>Duration</th>
            <th>Yêu thích</th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map(({ added_at, track }, index) => (
            <SongTableBody
              key={index}
              index={index}
              imgUrl={track?.album?.images[0]?.url}
              songName={track?.name}
              artistName={track?.artists[0]?.name}
              addedDate={added_at?.split("T")[0]}
              duration={track?.duration_ms}
              heart={added_at?.heart}
              onAddToLikedSongs={onAddToLikedSongs} // Truyền hàm vào props của SongTableBody
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
