import { useContext, useEffect } from 'react';

import { MoviesContext } from '../context/MoviesContext/MoveProvider.ts';
import { useFetchMovies } from './useFetchMovies.ts';

export const useHandlePoster = () => {
    const fetchMovies = useFetchMovies();
    const { movies } = useContext(MoviesContext);
    
    useEffect(() => {
        fetchMovies();
    }, []);
    
    return movies;
}
