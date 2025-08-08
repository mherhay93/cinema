import {createContext} from 'react';
import type { Dispatch, SetStateAction} from 'react';

import type {IMovie, IMoviesInterface} from "../../types";

export interface IMoviesContextType {
    videoEnd: boolean;
    isStartedVideo: boolean;
    movies: IMoviesInterface;
    changeSelectedMovie: (movies: IMovie) => void;
    setVideoEnd: Dispatch<SetStateAction<boolean>>;
    setIsStartedVideo: Dispatch<SetStateAction<boolean>>;
    setMovies: Dispatch<SetStateAction<IMoviesInterface>>;
}

export const MoviesContext = createContext<IMoviesContextType>(
    {
        videoEnd: true,
        isStartedVideo: false,
        setMovies: () => {},
        setVideoEnd: () => {},
        movies: {} as IMoviesInterface,
        setIsStartedVideo: () => {},
        changeSelectedMovie: () => {},
    } as unknown as IMoviesContextType
);
