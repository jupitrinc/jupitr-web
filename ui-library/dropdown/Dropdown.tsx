import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { DropdownProps } from "./Dropdown.types"
import { OptimisedImage } from "ui-library/image/Image"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { EllipsisHorizontalIcon } from "ui-library/icons/Icons"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const Dropdown: React.FC<DropdownProps> = (dropdown) => {
  return (
    <Menu as="div" className="relative">
      {dropdown.type === "tab" && (
        <Menu.Button
          disabled={dropdown.disabled}
          className={`justify-center ${
            dropdown.label ? "rounded-xl" : "rounded-full"
          } px-2 py-2 text-sm text-gray-500 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:outline-none`}
        >
          {dropdown.label ? (
            dropdown.label
          ) : (
            <EllipsisHorizontalIcon className="h-6 w-6" />
          )}
        </Menu.Button>
      )}

      {dropdown.type === "avatar" && (
        <Menu.Button className="flex rounded-full text-sm ring-2 ring-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">{dropdown.label}</span>
          <OptimisedImage
            className={
              dropdown.imgClassName
                ? dropdown.imgClassName
                : "h-10 w-10 rounded-full"
            }
            src={dropdown.imgSrc ? dropdown.imgSrc : ""}
            alt={dropdown.imgAlt ? dropdown.imgAlt : "image"}
          />
        </Menu.Button>
      )}

      {dropdown.type === "placeholder" && (
        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <Avatar
            name_initials={dropdown.label ? dropdown.label : ""}
            size={10}
          />
        </Menu.Button>
      )}

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
                    "w-full flex px-4 py-2 text-sm text-gray-700"
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
