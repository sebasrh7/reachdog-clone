import { Tab } from "./index.tabs";
//importar css
import './TabsHeader.css';
import handleScroll from '../../utils/scrollHandler';
// Componente TabsHeader
const TabsHeader = ({ tabs, activeTab, onChange }) => {

    document.addEventListener('scroll', handleScroll);

    return (
        <header id="tabsHeader" className="tabs-header py-3">
            <nav className="dark:bg-[#24262F] rounded-xl">
                <ul className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap ">
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
