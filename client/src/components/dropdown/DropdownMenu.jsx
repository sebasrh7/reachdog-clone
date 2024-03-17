const DropdownMenu = ({ children }) => {
  return (
    <div className="absolute right-3 top-20 z-10 min-w-52 origin-top-right rounded-md bg-white dark:bg-[#24262F] border border-gray-300 dark:border-[#373A45] outline-none focus:outline-none">
      <div className="p-3 ">
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;