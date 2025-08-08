import {useContext, useRef} from 'react';
import type {WheelEvent, MouseEvent} from 'react';

import { MoviesContext } from '../../../context/MoviesContext/MoveProvider.ts';
import { setHistoryMovies } from '../../../helpers/storage.ts';
import type { IMovie } from '../../../types';
import styles from './moviesList.module.css';

interface IMoviesListProps {
    movies: IMovie[]
}

const MoviesList = ({ movies }: IMoviesListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const { changeSelectedMovie } = useContext(MoviesContext);
    
    const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
        if (e.deltaY !== 0 && scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    };
    
    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        isDragging.current = true;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    };
    
    const handleMouseLeave = () => {
        isDragging.current = false;
    };
    
    const handleMouseUp = () => {
        isDragging.current = false;
    };
    
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !scrollRef.current) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX.current;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
    
    const handleSelectMove = (movie: IMovie) => {
        changeSelectedMovie(movie)
        setHistoryMovies(movie.Id)
    }
    
    return (
        <div className={styles.container}>
            <span>Treading Now</span>
            <div
                ref={scrollRef}
                className={styles.list}
                onWheel={handleWheel}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
            >
                {movies?.map((movie: IMovie) => (
                    <img
                        key={movie.Id}
                        alt={movie.Title}
                        src={movie.CoverImage}
                        className={styles.image}
                        onClick={() => handleSelectMove(movie)}
                    />
                ))}
            </div>
        </div>
    )
}

export default MoviesList;
