import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { build } from 'vite';

// const options = {
//    method: 'GET',
//    headers: {
//       'x-rapidapi-host': 'youtube-music-api3.p.rapidapi.com',
//       'x-rapidapi-key': 'f4642f5f55msh335aede259b9186p1ddbacjsn53efd60b134b'
//    }
// };

// fetch('https://youtube-music-api3.p.rapidapi.com/search?q=Zlyj%20Reper%20Zenyk&type=artist', options)
//    .then(response => response.json())
//    .then(response => console.log(response))
//    .catch(err => console.error(err));

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
      getTopCharts: builder.query({ query: () => '/search?q=Zlyj%20Reper%20Zenyk&type=artist' })
   }),
});

export const {
   useGetTopChartsQuery,
} = youtubeMusicAPI