import { type ReactNode, useMemo, useState } from 'react';

import type {IMovie, IMoviesInterface} from '../../types';
import { MoviesContext } from './MoveProvider.ts';

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<IMoviesInterface>({} as IMoviesInterface)
    
    const changeSelectedMovie = (selectedMovie: IMovie) => {
      setMovies(prevMovies => ({...prevMovies, Featured: selectedMovie}))
    }
    
    const values = useMemo(() => ({
        movies,
        setMovies,
        changeSelectedMovie
    }), [movies])
    
    return (
        <MoviesContext.Provider value={values}>
            {children}
        </MoviesContext.Provider>
    );
};
