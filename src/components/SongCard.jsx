import { Link } from 'react-router-dom';


import PlayPause from './PlayPause';

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {


   const handlePauseClick = () => {

   }

   const handlePlayClick = () => {

   }

   return (
      <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg '>
         <div className="relative w-full h-56 group cursor-pointer">
            <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
               <PlayPause
                  song={song}
                  handlePause={handlePauseClick}
                  handlePlay={handlePlayClick}
                  isPlaying={isPlaying}
                  activeSong={isPlaying}
               />
            </div>
            <img className='w-full h-full object-cover ' src={song?.thumbnail} alt="song_img" />
         </div>
         <div className="mt-4 flex flex-col">
            <p className='font-semibold text-lg text-white truncate inline-block' >
               <Link to={`/songs/${song?.videoId}`}>
                  {song.title}
               </Link>
            </p>
            <p className='mt-1 font-semibold text-sm text-gray-300 truncate inline-block'>
               <Link to={`/songs/${song?.author}`}>
                  {song.author}
               </Link>
            </p>
         </div>
      </div>
   )
};

export default SongCard;
