import { Fragment, useMemo, useRef, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { ChevronsUpDown, Plus } from "lucide-react"
import { MultiselectProps } from "./Multiselect.types"
import { multiselectStyles } from "./Multiselect.styles"
import { Label } from "../label/Label"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"

export const Multiselect: React.FC<MultiselectProps> = (multiselect) => {
  const styles = multiselectStyles
  const [query, setQuery] = useState<string>("")
  const buttonRef = useRef<HTMLButtonElement>(null)

  const filteredOptions = useMemo(
    () =>
      query === ""
        ? multiselect.options
        : multiselect.options.filter((value) =>
            value.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          ),
    [query, multiselect.options]
  )

  const handleInputChange = (e) => {
    if (e.target.value.length < 30) {
      setQuery(e.target.value)
      multiselect.onChange?.(e.target.value)
    }
  }

  const addOption = (option: string) => {
    multiselect.addOption?.(option)
    setQuery("")

    if (buttonRef.current) {
      buttonRef.current.click()
    }
  }

  return (
    <Combobox onChange={multiselect.onSelect}>
      <div className={styles.container}>
        {multiselect.label && (
          <Label
            htmlFor=""
            value={multiselect.label}
            invalid={multiselect.invalid}
          />
        )}
        <div className={styles.multiselect}>
          <Combobox.Input
            placeholder={multiselect.placeholder}
            className={styles.input}
            onChange={handleInputChange}
            value={query}
          />
          <Combobox.Button className={styles.button} ref={buttonRef}>
            <ChevronsUpDown className="text-gray-600 w-5 h-5" />
          </Combobox.Button>
        </div>

        {multiselect.options && multiselect.options.length > 0 && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className={styles.options}>
              {filteredOptions.length === 0 && query !== "" ? (
                <div className={styles.option.noResult}>
                  <div className="flex flex-row gap-5 items-center justify-between flex-wrap">
                    <Text as="span">
                      No results found for &quot;{query}&quot;
                    </Text>

                    {multiselect.allowAddOption && query.trim().length > 1 && (
                      <Button
                        label="Add"
                        size="xs"
                        icon={<Plus className="h-4 w-4" />}
                        onClick={() => addOption(query.trim())}
                      />
                    )}
                  </div>
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      active ? styles.option.active : styles.option.default
                    }
                    value={option}
                  >
                    {option.name}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        )}
      </div>
    </Combobox>
  )
}
