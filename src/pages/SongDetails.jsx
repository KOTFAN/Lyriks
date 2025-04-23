import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";



import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/YoutubeMusic";



const SongDetails = () => {
   const dispatch = useDispatch()

   const { activeSong, isPlaying } = useSelector((state) => state.player)

   const { songid } = useParams()

   console.log(songid)

   const { data: songDetalis, isFetching: isFetchingSongDetalis, error: errorSongDetalis } = useGetSongDetailsQuery({ songid });

   console.log(songDetalis)


   return (<div className="flex flex-col">
      {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
      <div className="mb-4">
         <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
      </div>
      <div className="mt-5">
         <div className="whitespace-pre-wrap text-white text-base my-1">
            {songDetalis?.description?.text ?
               (<p>{songDetalis?.description?.text} </p>)
               : (<p>"No Lyrics"</p>)}
         </div>
      </div>
   </div>)
}

export default SongDetails;
