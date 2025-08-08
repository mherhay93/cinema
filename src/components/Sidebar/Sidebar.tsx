import {sidebarMenu} from '../../resources';
import avatar from '../../assets/images/avatar.webp';
import ProfileInfo from '../ProfileInfo/ProfileInfo.tsx';
import SidebarItem from './SidebarItem/SidebarItem.tsx';
import SidebarFooter from './SidebarFooter/SidebarFooter.tsx';
import styles from './sidebar.module.css';

const Sidebar = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <ProfileInfo customStyles={styles.profile} avatar={avatar} name='User Name'/>
                    <nav className={styles.navbar}>
                        {sidebarMenu.map((menuItem) => (
                            <SidebarItem
                                key={menuItem.id}
                                name={menuItem.name}
                                icon={menuItem.icon}
                                href={menuItem.href}
                                activeElementStyle={styles.active}
                            />
                        ))}
                    </nav>
                </div>
                <SidebarFooter customStyles={styles.footer}/>
            </div>
        </div>
    )
}

export default Sidebar;
