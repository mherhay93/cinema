import { type SyntheticEvent, useEffect, useRef } from 'react';
import { TRAILER_STATUS, VIDEO_TYPE } from '../../../helpers/constants.ts';
import styles from './movieTrailer.module.css';

interface IMovieTrailerProps {
    src: string;
    play: boolean;
    setPlay: () => void;
}

const MovieTrailer = ({ src, play, setPlay }: IMovieTrailerProps) => {
    
    const videoRef = useRef<HTMLVideoElement | null>(null);
    
    const handlePlay = (e: SyntheticEvent<HTMLVideoElement>) => {
        if (e.type === TRAILER_STATUS) {
            setPlay();
        }
    }
    
    useEffect(() => {
        if (play && videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn('Autoplay prevented:', error);
                });
            }
        } else if (!play && videoRef.current) {
            videoRef.current.pause();
        }
        }, [play, src]);
    
    return (
        <video onEnded={handlePlay} ref={videoRef} className={styles.container} muted>
            <source src={src} type={VIDEO_TYPE}/>
            Your browser does not support the video tag.
        </video>
    )
}

export default MovieTrailer;
