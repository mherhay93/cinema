import { useHandlePoster } from '../../hooks/useHandlePoster.ts';
import MovieInfo from './MovieInfo/MovieInfo.tsx';
import styles from './poster.module.css';


const Poster = () => {
    const movies = useHandlePoster()
    
    if (!movies) {
        return <span>No data</span>;
    }
    
    const {Featured} = movies;
    
    return (
        <div style={{backgroundImage: `url("${Featured?.CoverImage}")`}} className={styles.container}>
            <MovieInfo movie={movies.Featured}/>
        </div>
    )
}

export default Poster;
