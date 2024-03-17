import Button from '../button/Button';

const DropdownToggle = ({ toggleDropdown, icon }) => {
    return (
        <Button
            onClick={toggleDropdown}
            variant="text"
            className="focus:outline-none rounded-0"
        >
            {icon}
        </Button>
    );
}

export default DropdownToggle;