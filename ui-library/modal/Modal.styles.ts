export const modalStyles = {
  dialog: "",
  dialog_child1: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    fixed_container:
      "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
  },
  dialog_child2: {
    container1: "fixed inset-0 z-10 overflow-y-auto",
    container2: "flex min-h-full justify-center text-center items-center p-5",
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  },
  dialog_panel:
    "relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg p-5",
  dialog_panel_div: "absolute top-2 right-2",
  close_icon: "w-7 h-7 text-gray-600",
}
