import playIcon from '../../assets/icons/play_button.svg'
import Title from '../../components/common/Title/Title.tsx';
import Button from '../../components/common/Button/Button.tsx';
import Layout from '../../components/layouts/Layout/Layout.tsx';

const Home = () => {
    return (
        <Layout>
            <Title text='The dfsdfds dfds'/>
            <Button name='Play' icon={playIcon}/>
            <Button name='More Info' variant='secondary'/>
        </Layout>
    )
}

export default Home;
