import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ModalProps } from "./Modal.types"
import { Button } from "ui-library/button/Button"
import { modalStyles } from "./Modal.styles"
import { XCircle } from "lucide-react"

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={modalStyles.dialog} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={modalStyles.dialog_child1.enter}
          enterFrom={modalStyles.dialog_child1.enterFrom}
          enterTo={modalStyles.dialog_child1.enterTo}
          leave={modalStyles.dialog_child1.leave}
          leaveFrom={modalStyles.dialog_child1.leaveFrom}
          leaveTo={modalStyles.dialog_child1.leaveTo}
        >
          <div className={modalStyles.dialog_child1.fixed_container} />
        </Transition.Child>

        <div className={modalStyles.dialog_child2.container1}>
          <div className={modalStyles.dialog_child2.container2}>
            <Transition.Child
              as={Fragment}
              enter={modalStyles.dialog_child2.enter}
              enterFrom={modalStyles.dialog_child2.enterFrom}
              enterTo={modalStyles.dialog_child2.enterTo}
              leave={modalStyles.dialog_child2.leave}
              leaveFrom={modalStyles.dialog_child2.leaveFrom}
              leaveTo={modalStyles.dialog_child2.leaveTo}
            >
              <Dialog.Panel className={modalStyles.dialog_panel}>
                <div className={modalStyles.dialog_panel_div}>
                  <Button
                    icon={<XCircle className={modalStyles.close_icon} />}
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
