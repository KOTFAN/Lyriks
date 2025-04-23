import { useEffect, useRef } from "react";
import { Link, useFetcher } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper'

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice'

import { useGetTopChartsQuery } from '../redux/services/YoutubeMusic';

import 'swiper/css'
import 'swiper/css/free-mode'
import { TopCharts } from "../pages";


const TopChartCard = ({ song, i }) => {
   return (
      <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
         {song.title}

      </div>
   )
}


const TopPlay = () => {
   const dispatch = useDispatch();
   const { activeSong, isPlaying } = useSelector((state) => state.player)

   const { data } = useGetTopChartsQuery();
   const divRef = useRef(null)

   useEffect(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' }, [])
   })



   const topSongs = data?.result?.slice(0, 5);
   console.log(data, topSongs)

   const handlePauseClick = () => {
      dispatch(playPause(false))

   }


   const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true))
   }

   return (
      //here top chart is just first 5 from search, but in future i will made another api request
      <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xs:max-w-[500px] max-w-full flex flex-col">
         <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between items-center" >
               <h2 className="text-white font-bold text-2xl ">TOP CHARTS</h2>
               <Link to={'/top-charts'}>
                  <p className="text-gray-300 cursor-pointer text-base">See more</p>
               </Link>
            </div>
            <div className="mt-5 flex flex-col gap-1">
               {data && topSongs.map((song, i) =>
                  (<TopChartCard song={song} i={i} key={song.videoId} />))}
            </div>
         </div>

         {/* here is slider witht top authors but img here temporary of song img */}
         <div className="w-full flex flex-col mt-8 ">
            <div className="flex flex-row justify-between items-center" >
               <h2 className="text-white font-bold text-2xl ">TOP ARTISTS</h2>
               <Link to={'/top-artists'}>
                  <p className="text-gray-300 cursor-pointer text-base">See more</p>
               </Link>
            </div>

            <Swiper slidesPerView='auto' spaceBetween={15} freeMode modules={[FreeMode]} className="mt-4">
               {data && topSongs.map((song, i) => (<SwiperSlide key={song?.videoId} style={{ 'width': '25%', 'height': 'auto' }} className="shadow-lg rounded-full animate-slideright ">
                  <Link to={`/artists/${song?.author}`}>
                     <img src={song?.thumbnail} alt="Image" className="rounded-full w-full object-cover" />

                     {/* {song?.author} */}


                  </Link>
               </SwiperSlide>)

               )}
            </Swiper >
         </div>
      </div>
   )

};

export default TopPlay;
