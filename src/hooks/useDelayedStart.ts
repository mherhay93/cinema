import { useContext, useEffect } from 'react';

import { MoviesContext } from '../context/MoviesContext/MoveProvider.ts';

export const useDelayedStart = (delay?: number) => {
    const {isStartedVideo, setIsStartedVideo, setVideoEnd, videoEnd} = useContext(MoviesContext)
    
    const handleEnded = () => {
        setIsStartedVideo(false)
        setVideoEnd(true)
    }
    
    useEffect(() => {
        const id = setTimeout(() => setIsStartedVideo(true), delay);
        if (videoEnd) {
            clearTimeout(id);
        }
        return () => clearTimeout(id);
    }, [isStartedVideo, videoEnd]);
    
    return {
        handleEnded,
        isStartedVideo
    };
};
