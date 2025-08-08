import type { ReactNode } from 'react';

import Sidebar from '../../Sidebar/Sidebar.tsx';
import styles from './layout.module.css';

interface ILayoutProps {
    children?: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className={styles.container}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout;
