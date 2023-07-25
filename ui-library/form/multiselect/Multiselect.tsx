import { Fragment, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { ChevronsUpDown } from "lucide-react"
import { MultiselectProps } from "./Multiselect.types"
import { multiselectStyles } from "./Multiselect.styles"
import { Label } from "../label/Label"

export const Multiselect: React.FC<MultiselectProps> = (multiselect) => {
  const [query, setQuery] = useState<string>("")
  const styles = multiselectStyles

  const filteredOptions =
    query === ""
      ? multiselect.options
      : multiselect.options.filter((value) =>
          value.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

  return (
    <Combobox onChange={multiselect.onChange}>
      <div className={styles.container}>
        {multiselect.label && <Label htmlFor="" value={multiselect.label} />}
        <div className={styles.multiselect}>
          <Combobox.Input
            placeholder={multiselect.placeholder}
            className={styles.input}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <Combobox.Button className={styles.button}>
            <ChevronsUpDown className="text-gray-600 w-5 h-5" />
          </Combobox.Button>
        </div>

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
                No results found for "{query}"
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
      </div>
    </Combobox>
  )
}
