import type {ISidebarMenuItem} from '../types';

import homeIcon from '../assets/icons/home_icon.png';
import searchIcon from '../assets/icons/search_icon.png';
import tvShowsIcon from '../assets/icons/video_icon.png';
import moviesIcon from '../assets/icons/movies_icon.png';
import cinemaIcon from '../assets/icons/cinema_icon.png';
import historyIcon from '../assets/icons/history_icon.png';

export const sidebarMenu: ISidebarMenuItem[] = [
    {
        id: '1',
        name: 'Search',
        href: '/search',
        icon: searchIcon
    },
    {
        id: '2',
        name: 'Home',
        href: '/',
        icon: homeIcon
    },
    {
        id: '3',
        name: 'TV Shows',
        href: '/tv_shows',
        icon: tvShowsIcon
    },
    {
        id: '4',
        name: 'Movies',
        href: '/movies',
        icon: moviesIcon
    },
    {
        id: '5',
        name: 'Genres',
        href: '/genres',
        icon: cinemaIcon
    },
    {
        id: '6',
        name: 'Watch Later',
        href: '/watch_later',
        icon: historyIcon
    }
]
