import { type ReactNode, useMemo, useState } from 'react';
import { MoviesContext } from './MoveProvider.ts';
import type { IMoviesInterface } from '../../types';

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<IMoviesInterface>({} as IMoviesInterface)
    
    const values = useMemo(() => ({
        movies,
        setMovies,
    }), [movies])
    
    return (
        <MoviesContext.Provider value={values}>
            {children}
        </MoviesContext.Provider>
    );
};
