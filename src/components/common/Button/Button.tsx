import cn from 'classnames'

import type { TButtonVariant } from '../../../types';
import styles from './Button.module.css'

interface IButtonProps {
    name: string
    variant?: TButtonVariant
    icon?: string
}

const Button = ({ name, variant = 'primary', icon }: IButtonProps) => {
    return (
        <button className={cn(styles.button, styles[variant])}>
            {icon && <img alt='icon' src={icon}/>}
            {name}
        </button>
    )
}

export default Button;
