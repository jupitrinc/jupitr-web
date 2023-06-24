import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ModalProps } from "./Modal.types"
import { Button } from "ui-library/button/Button"
import { modalStyles } from "./Modal.styles"
import { X } from "lucide-react"

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const styles = modalStyles
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={styles.dialog_child1.enter}
          enterFrom={styles.dialog_child1.enterFrom}
          enterTo={styles.dialog_child1.enterTo}
          leave={styles.dialog_child1.leave}
          leaveFrom={styles.dialog_child1.leaveFrom}
          leaveTo={styles.dialog_child1.leaveTo}
        >
          <div className={styles.dialog_child1.fixed_container} />
        </Transition.Child>

        <div className={styles.dialog_child2.container1}>
          <div className={styles.dialog_child2.container2}>
            <Transition.Child
              as={Fragment}
              enter={styles.dialog_child2.enter}
              enterFrom={styles.dialog_child2.enterFrom}
              enterTo={styles.dialog_child2.enterTo}
              leave={styles.dialog_child2.leave}
              leaveFrom={styles.dialog_child2.leaveFrom}
              leaveTo={styles.dialog_child2.leaveTo}
            >
              <Dialog.Panel className={styles.dialog_panel}>
                <div className={styles.dialog_panel_div}>
                  <Button
                    icon={<X className={styles.close_icon} />}
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
