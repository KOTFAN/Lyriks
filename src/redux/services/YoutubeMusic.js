import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const youtubeMusicAPI = createApi({
   reducerPath: 'youtubeMusicAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://youtube-music-api3.p.rapidapi.com',
      prepareHeaders: (headers) => {
         headers.set('x-rapidapi-key', 'f4642f5f55msh335aede259b9186p1ddbacjsn53efd60b134b');
         headers.set('x-rapidapi-host', 'youtube-music-api3.p.rapidapi.com');
         return headers;
      }
   }),
   endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/search?q=schmalgauzen&type=artist' }),
      getSongDetails: builder.query({
         query: ({ songid }) => {

            return `/music/lyrics/plain?id=${songid}`

         }

      })
   }),
});

export const {
   useGetTopChartsQuery,
   useGetSongDetailsQuery
} = youtubeMusicAPI