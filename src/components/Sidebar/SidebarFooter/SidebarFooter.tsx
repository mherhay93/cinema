import cn from 'classnames';

import styles from './sidebarFooter.module.css';

interface ISidebarFooterProps {
    customStyles?: string;
}

const SidebarFooter = ({ customStyles }: ISidebarFooterProps) => {
    return (
        <ul className={cn(customStyles, styles.container)}>
            <li>Language</li>
            <li>Get Help</li>
            <li>Exit</li>
        </ul>
    )
}

export default SidebarFooter;
