import { TabPanel } from './index.tabs';
// Componente TabsBody
const TabsBody = ({ tabs, activeTab }) => {

  return (
      <>
        <TabPanel {...tabs.find(tab => tab.value === activeTab)} />
      </>
  );

};

export default TabsBody;