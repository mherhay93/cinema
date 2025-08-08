import {createContext} from 'react';
import type { Dispatch, SetStateAction} from 'react';

import type {IMovie, IMoviesInterface} from "../../types";

export interface IMoviesContextType {
    movies: IMoviesInterface;
    setMovies: Dispatch<SetStateAction<IMoviesInterface>>;
    changeSelectedMovie: (movies: IMovie) => void;
}

export const MoviesContext = createContext<IMoviesContextType>(
    {
        movies: {} as IMoviesInterface,
        setMovies: () => {},
        changeSelectedMovie: () => {},
    } as unknown as IMoviesContextType
);
