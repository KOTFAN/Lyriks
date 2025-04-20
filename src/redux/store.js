import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { youtubeMusicAPI } from './services/YoutubeMusic';

export const store = configureStore({
   reducer: {
      [youtubeMusicAPI.reducerPath]: youtubeMusicAPI.reducer,
      player: playerReducer,
   },
   middleware: (getDefaltMiddleware) => getDefaltMiddleware().concat(youtubeMusicAPI.middleware)
});
