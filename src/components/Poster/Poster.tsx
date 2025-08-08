import { useHandlePoster } from '../../hooks/useHandlePoster.ts';
import MoviesList from './MoviesList/MoviesList.tsx';
import MovieInfo from './MovieInfo/MovieInfo.tsx';
import styles from './poster.module.css';


const Poster = () => {
    const movies = useHandlePoster()
    
    if (!movies) {
        return <span>No data</span>;
    }
    
    const { Featured, TendingNow } = movies;
    
    return (
        <div style={{backgroundImage: `url("${Featured?.CoverImage}")`}} className={styles.container}>
            <MovieInfo movie={movies.Featured}/>
            <MoviesList movies={TendingNow}/>
        </div>
    )
}

export default Poster;
