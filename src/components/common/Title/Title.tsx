import styles from './title.module.css'
import { splitTextForTitle } from '../../../utils/text.ts';

interface ITitleProps {
    text: string
}

const Title = ({ text }: ITitleProps) => {
    const { startText, endText } = splitTextForTitle(text)
    
    return (
        <div className={styles.title}>
          <span className={styles.startText}>{startText}</span>
          { endText && <span>{endText}</span> }
        </div>
    )
}

export default Title;
