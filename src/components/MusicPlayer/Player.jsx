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
         //neads to be yt music acual audio sourse)
         src={`https://muzcore.online/uploads/files/2023-11/1699001868_elzi-ne-tvoya-vyna.mp3`}
         ref={ref}
         loop={repeat}
         onEnded={onEnded}
         onTimeUpdate={onTimeUpdate}
         onLoadedData={onLoadedData}
      />
   );
};

export default Player;
