import Hero from '../components/hero/Hero';
import Tabs from '../components/tabs/Tabs';
import useData from '../hooks/useData';
import Loading from '../components/loading/Loading';

const Home = () => {

    const { data, isLoading } = useData();

    return (
        <>
            <main className="w-full max-w-[1162px] mx-auto my-0 px-2 py-0">
                <Hero />
                {
                    isLoading ? <Loading /> : <Tabs data={data} />
                }
            </main>
        </>
    )
}

export default Home