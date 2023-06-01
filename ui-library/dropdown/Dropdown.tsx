import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { DropdownProps } from "./Dropdown.types"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const Dropdown: React.FC<DropdownProps> = (dropdown) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={
          "justify-center rounded-lg px-3 py-1 text-sm ring-1 ring-gray-200 hover:ring-gray-300 text-gray-500 active:ring-gray-300 focus:outline-none"
        }
        data-testid="dropdown"
      >
        {dropdown.label}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropdown.options.map((option) => (
            <Menu.Item key={option.label}>
              {({ active }) => (
                <button
                  onClick={option.onClick}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "w-full flex px-3 py-1 text-sm text-gray-500"
                  )}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
