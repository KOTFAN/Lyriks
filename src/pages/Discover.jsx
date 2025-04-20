import { Error, Loader, SongCard } from '../components';
import { genres } from './../assets/constants';

const Discover = () => {

   const ganreTitle = genres[0].title

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
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((song, i) => (
               <SongCard
                  key={song.key}
                  song={song}
                  i={i}
               />
            ))}
         </div>
      </div>
   )
};

export default Discover;
