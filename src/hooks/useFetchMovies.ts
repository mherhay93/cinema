import { useContext } from 'react';

import { makeRequest } from '../helpers/requests.ts';
import { MoviesContext } from '../context/MoviesContext/MoveProvider.ts';
import { sortMoviesData } from '../helpers/movies.ts';
import type { IMoviesInterface } from '../types';

export function useFetchMovies() {
   const { setMovies } = useContext(MoviesContext);
   
   return () => {
      makeRequest('__mockData__/data.json').then((res:IMoviesInterface) => {
         const sortedData = sortMoviesData(res)
         setMovies(sortedData);
      })
   }
}
