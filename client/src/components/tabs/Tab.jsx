// Componente Tab
const Tab = ({ tab, active, onChange }) => {
    return (
        <li
            className={`flex items-center justify-center text-center min-w-40 w-full h-full py-3 antialiased leading-relaxed select-none cursor-pointer ${active === tab.value ? 'bg-green-400/30 text-green-400 rounded-md shadow border border-green-400' : 'border border-transparent'}`}
            onClick={() => onChange(tab.value)}
        >
            <div className="flex flex-col items-center gap-1 text-base font-normal">
                {tab.icon}
                {tab.label}
            </div>
        </li>
    );
};

export default Tab;

