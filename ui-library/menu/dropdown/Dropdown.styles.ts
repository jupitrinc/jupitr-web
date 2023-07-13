export const dropdownStyles = {
  menu: "relative",
  transition: {
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  },
  menu_option:
    "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
  menu_option_link: "w-full flex px-4 py-2 text-base text-gray-600",
  menu_option_active: "bg-gray-100",
}
