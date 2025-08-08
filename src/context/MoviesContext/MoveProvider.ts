import {createContext} from 'react';
import type { Dispatch, SetStateAction} from 'react';

import type { IMoviesInterface } from "../../types";

export interface IMoviesContextType {
    movies: IMoviesInterface;
    setMovies: Dispatch<SetStateAction<IMoviesInterface>>;
}

export const MoviesContext = createContext<IMoviesContextType>(
    {
        movies: {} as IMoviesInterface,
        setMovies: () => {},
    } as unknown as IMoviesContextType
);
