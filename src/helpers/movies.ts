import type {IMovie, IMoviesInterface} from '../types';
import { getFromSessionStorage, MOVIES_KEY } from './storage.ts';

export function sortMoviesData(moviesData: IMoviesInterface): IMoviesInterface {
    const storageIds = getFromSessionStorage(MOVIES_KEY)
    const movies = moviesData.TendingNow

    if (storageIds) {
        const ids = JSON.parse(storageIds)
        const sortedMovies: IMovie[] = ids.reduce((acc: IMovie[], id: string, index: number) => {
            const foundMovie = movies.find(movie => movie.Id === id)
            if (foundMovie) {
                acc[index] = foundMovie
            }
            return acc
        }, [])
        
        const rest = movies.filter(movie => !ids.includes(movie.Id));
        const result = [...sortedMovies, ...rest]
        return {
            Featured: result[0],
            TendingNow: result,
        };
    } else {
        return {
            Featured: moviesData.Featured,
            TendingNow: movies,
        };
    }
}
