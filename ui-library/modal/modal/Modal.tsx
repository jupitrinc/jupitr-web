import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ModalProps } from "./Modal.types"
import { Button } from "ui-library/button/Button"
import { XCircleIcon } from "ui-library/icons/Icons"

export const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center text-center items-center p-5">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg p-5">
                <div className="absolute top-2 right-2">
                  <Button
                    icon={<XCircleIcon className="w-7 h-7" />}
                    label=""
                    onClick={() => onClose(false)}
                  />
                </div>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
