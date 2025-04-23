/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {

   // debugger;
   const ref = useRef(null);
   // eslint-disable-next-line no-unused-expressions
   if (ref.current) {
      if (isPlaying) {
         ref.current.play();
      } else {
         ref.current.pause();
      }
   }

   useEffect(() => {
      ref.current.volume = volume;
   }, [volume]);
   // updates audio element only on seekTime change (and not on each rerender):
   useEffect(() => {
      ref.current.currentTime = seekTime;
   }, [seekTime]);

   return (
      <audio
         //neads to be yt music acual audio sourse) from activeSong
         src={'https://cdn2.drivemusic.club/dl/online/OGqR5Rpp_0NKOxcKOSAcdw/1745390269/download_music/2014/02/okean-jelzy-911.mp3'}
         ref={ref}
         loop={repeat}
         onEnded={onEnded}
         onTimeUpdate={onTimeUpdate}
         onLoadedData={onLoadedData}
      />
   );
};

export default Player;
