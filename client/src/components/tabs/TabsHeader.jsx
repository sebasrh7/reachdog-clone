import { Tab } from "./index.tabs";
//importar css
import './TabsHeader.css';
import handleScroll from '../../utils/scrollHandler';
// Componente TabsHeader
const TabsHeader = ({ tabs, activeTab, onChange }) => {

    document.addEventListener('scroll', handleScroll);

    return (
        <header id="tabsHeader" className="tabs-header">
            <nav className="p-1 bg-white dark:bg-[#1f1e24]">
                <ul className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap rounded-md ">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            tab={tab}
                            active={activeTab}
                            onChange={onChange}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default TabsHeader;
