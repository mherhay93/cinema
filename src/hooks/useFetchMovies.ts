import {useContext} from 'react';

import {makeRequest} from '../utils/requests.ts';
import {MoviesContext} from '../context/MoviesContext/MoveProvider.ts';

export function useFetchMovies() {
   const { setMovies } = useContext(MoviesContext);
   
   return () => {
      makeRequest('__mockData__/data.json').then(res => setMovies(res))
   }
}
