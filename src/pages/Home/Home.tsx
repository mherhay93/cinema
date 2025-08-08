import playIcon from '../../assets/icons/play-button.svg'
import Title from '../../components/common/Title/Title.tsx';
import Button from '../../components/common/Button/Button.tsx';

const Home = () => {
    return (
        <div>
            <Title text='The dfsdfds dfds' />
            <Button name='Play' icon={playIcon} />
            <Button name='More Info' variant='secondary' />
        </div>
    )
}

export default Home;
