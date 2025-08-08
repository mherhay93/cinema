import cn from 'classnames';

import styles from './profileInfo.module.css';

interface IProfileInfoProps {
    name: string;
    avatar: string;
    customStyles?: string;
}

const ProfileInfo = ({ name, avatar, customStyles }: IProfileInfoProps) => {
    return (
        <div className={cn(customStyles, styles.container)}>
            <img className={styles.avatar} src={avatar} alt='avatar'/>
            <span className={styles.name}>{name}</span>
        </div>
    )
}

export default ProfileInfo;
