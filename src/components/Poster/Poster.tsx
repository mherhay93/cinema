import { useDelayedStart } from '../../hooks/useDelayedStart.ts';
import { useHandlePoster } from '../../hooks/useHandlePoster.ts';
import { TRAILER_DELAY } from '../../helpers/constants.ts';
import MovieTrailer from './MovieTrailer/MovieTrailer.tsx';
import MoviesList from './MoviesList/MoviesList.tsx';
import MovieInfo from './MovieInfo/MovieInfo.tsx';
import styles from './poster.module.css';


const Poster = () => {
    const movies = useHandlePoster()
    const { isStartedVideo, handleEnded } = useDelayedStart(TRAILER_DELAY)
    
    if (!movies) {
        return <span>No data</span>;
    }
    
    const { Featured, TendingNow } = movies;
    
    return (
        <div style={{backgroundImage: !isStartedVideo ? `url("${Featured?.CoverImage}")` : 'none'}} className={styles.container}>
            {isStartedVideo && <MovieTrailer setPlay={handleEnded} play={isStartedVideo} src={Featured?.VideoUrl} />}
            <MovieInfo movie={movies.Featured}/>
            <MoviesList movies={TendingNow}/>
        </div>
    )
}

export default Poster;
