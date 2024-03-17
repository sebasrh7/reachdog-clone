import { useFilters } from '../../hooks/useFilters'; // Importar el hook useFilters
import { TabsHeader, TabsBody } from './index.tabs'; // Importar los componentes TabsHeader y TabsBody

const Tabs = ({ data }) => {

    const { filters, setFilters } = useFilters();

    const handleChangeTab = (category) => {
        setFilters(prevState => ({
            ...prevState,
            category: category
        }));
    };

    return (
        <section className="py-8">
            <TabsHeader tabs={data} activeTab={filters.category} onChange={handleChangeTab} />
            <TabsBody tabs={data} activeTab={filters.category} />
        </section>
    );
};

export default Tabs;
