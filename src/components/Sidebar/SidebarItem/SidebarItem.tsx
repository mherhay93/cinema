import cn from 'classnames';

import { checkActivePath } from '../../../helpers/navigation.ts';
import styles from './sidebarItem.module.css';

interface ISidebarItemProps {
    name: string;
    icon: string;
    href: string;
    activeElementStyle: string
}

const SidebarItem = ({ name, icon, href, activeElementStyle }: ISidebarItemProps) => {
    const isCurrentPath = checkActivePath(href);
    
    return (
        <a className={cn(styles.container, { [activeElementStyle]: isCurrentPath })} href={href}>
            <img className={styles.icon} src={icon} alt={name} />
            <span className={styles.name}>{name}</span>
        </a>
    )
}

export default SidebarItem;
