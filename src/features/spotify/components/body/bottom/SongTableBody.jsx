import { useDispatch } from "react-redux";
import {
  isActiveAction,
  isPlayingAction,
  trackIndexAction,
} from "../../../../../actions/spotifyAction";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

export default function SongTableBody({
  index,
  imgUrl,
  songName,
  artistName,
  addedDate,
  duration,
  heart,
  onLikeSong 
}) {
  const dispatch = useDispatch();
  const convertDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  
  const handlePlay = (index) => {
    dispatch(trackIndexAction(index));
    dispatch(isPlayingAction(true));
    dispatch(isActiveAction(true));
  };
  
  // const navigate = useNavigate();
  
  const handleHeart = () => {
    // navigate("like-song");
    // Gọi hàm được nhận từ props để xử lý thêm bài hát vào danh sách yêu thích
    onLikeSong({
      id: index,
      imgUrl,
      songName,
      artistName,
      addedDate,
      duration,
      // heart,
    });
  };
  
  return (
    <tr
      className="text-center hover:bg-slate-800 cursor-default"
      key={index}
      onClick={() => handlePlay(index)}
    >
      <td>{index + 1}</td>
      <td className="text-left flex gap-3 items-center">
        <img src={imgUrl} alt="cover" className="w-[50px]" />
        {songName}
      </td>
      <td>{artistName}</td>
      {addedDate && <td>{addedDate}</td>}
      <td>{convertDuration(duration)}</td>
      <td>
        <a href="#" onClick={handleHeart}>
          <HeartOutlined />
        </a>
      </td>
    </tr>
  );
}
