import playIcon from '../../../assets/icons/play_button.svg'
import { formatToHourMinute } from '../../../utils/date.ts';
import type { IMovie } from '../../../types';
import Button from '../../common/Button/Button.tsx';
import Title from '../../common/Title/Title.tsx';
import styles from './movieInfo.module.css'

interface IMovieInfoProps {
    movie: IMovie
}

const MovieInfo = ({ movie }: IMovieInfoProps) => {
   if (!movie) {
       return <span>No data</span>;
   }
   
    return (
        <div className={styles.container}>
            <span className={styles.movie}>Movie</span>
            <Title text={movie.Title} />
            <div className={styles.contentInfo}>
                <span>{movie.ReleaseYear}</span>
                <span>{movie.MpaRating}</span>
                <span>{formatToHourMinute(+movie.Duration)}</span>
            </div>
            <span className={styles.description}>{movie.Description}</span>
         <div className={styles.buttons}>
             <Button name='Play' icon={playIcon}/>
             <Button name='More Info' variant='secondary'/>
         </div>
        </div>
    )
}

export default MovieInfo;
