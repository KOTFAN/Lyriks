import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from './../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/YoutubeMusic';

const Discover = () => {
   const dispatch = useDispatch();
   const { activeSong, isPlaying } = useSelector((state) => state.player);

   const { data, isFetching, error } = useGetTopChartsQuery();

   const ganreTitle = genres[0].title
   console.log(data)

   if (isFetching) return <Loader title='Loading Best Ever Songs...' />

   if (error) return <Error />


   return (
      <div className='flex flex-col'>
         <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-white text-3xl">Discover</h2>
            <select name="genre" id="1" value='' onChange={() => { }}
               className='bg-black text-gray-300 p-3 text-sm outline-none rounded-lg sm:mt-0 mt-5'>
               {genres.map((ganre) => {
                  return <option key={ganre.value} value={ganre.value}>{ganre.title}</option>
               })}
            </select>

         </div>
         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {/* map on result arr */}
            {data?.result?.map((song, i) => (
               <SongCard
                  key={song.videoId}
                  song={song}
                  i={i}
                  activeSong={activeSong}
                  isPlaying={isPlaying}
                  data={data}
               />
            ))}
         </div>
      </div>
   )
};

export default Discover;
