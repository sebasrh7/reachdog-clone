import { lazy, Suspense, useState } from 'react';
import Skeleton from '../loading/Skeleton';
import Button from '../button/Button';
import { FaSyncAlt } from 'react-icons/fa';
import dilay from '../../utils/dilay';

const LazyCard = lazy(() => dilay(import('../card/Card')));

const TabPanel = ({ label, content }) => {

    const [visibleProducts, setVisibleProducts] = useState(10);

    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 5); // Load 4 more products
    };

    return (
        <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl font-medium">{label}</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {content.slice(0, visibleProducts).map((product) => (
                    <Suspense fallback={
                        <div className='flex flex-col gap-1'>
                            <Skeleton width="100%" height="100%" className="rounded-2xl aspect-square " />
                            <Skeleton width="100%" height="16px" className="rounded-md mt-2 " />
                            <Skeleton width="80%" height="16px" className="rounded-md " />
                            <Skeleton width="60%" height="16px" className="rounded-md mb-2 " />
                        </div>
                    } key={product.id}>
                        <LazyCard key={product.id} data={product} />
                    </Suspense>
                ))}
            </div>
            {content.length > visibleProducts && (
                <Button
                    variant='text'
                    onClick={handleLoadMore}
                    className=" mx-auto mt-4 text-xs text-green-400 hover:bg-green-400 hover:text-white border border-green-400"
                >
                    <FaSyncAlt className="inline-block " /> Load More
                </Button>
            )}
        </div>
    );
};

export default TabPanel;
