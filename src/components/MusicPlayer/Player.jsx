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
         src={`https://gen7.icreatelabs.com/generate/download?mp3=azhoM2gzaTljN2gxZzFnMXUzeTdlMXA0YTYzZHg3Yzd4OW80ejBoM2wwdDF6MHg3YzdsMGcxeTdhM3A2ZTFuMmEzeDl5N2s1eTdqOWIxejB1M2gzZzF4OWwweTdqOWEzZzEzZDhmbThnMXYydDE5ejhmdTMyY2E2cDQ4ZnUzYTZhNnk3M2RoN2g3M2RhNnk3OXo4ZjJjaDczZHA0aDcyY3owdTNoN2Y1OXoyY3owMmN5N204eTdmNXk3`}
         ref={ref}
         loop={repeat}
         onEnded={onEnded}
         onTimeUpdate={onTimeUpdate}
         onLoadedData={onLoadedData}
      />
   );
};

export default Player;
