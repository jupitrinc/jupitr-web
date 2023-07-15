import { Fragment, useEffect, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import { Pill } from "ui-library/pill/Pill"
import { SuggesterProps } from "./Suggester.types"
import { suggesterStyles } from "./Suggester.styles"

export const Suggester: React.FC<SuggesterProps> = ({ data }) => {
  const styles = suggesterStyles
  const [list, setList] = useState<{ id: string; name: string }[]>([])
  const [selected, setSelected] = useState<
    { id: string; name: string } | undefined
  >(undefined)
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (selected) {
      addSelected()
    }
  }, [selected])

  const addSelected = () => {
    if (selected) {
      const isAlreadySelected = list.some((item) => item.id === selected.id)
      if (!isAlreadySelected) setList((prevList) => [...prevList, selected])
      setSelected(undefined)
      setQuery("")
    }
  }

  const filteredValues =
    query === ""
      ? data
      : data.filter((value) =>
          value.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

  return (
    <div>
      <Combobox
        value={selected?.name ?? ""}
        onChange={(value) => {
          const selectedValue = data.find((item) => item.name === value)
          setSelected(selectedValue)
        }}
      >
        <div className={styles.container}>
          <div className={styles.suggester}>
            <Combobox.Input
              placeholder="Type in the industry you work with"
              className={styles.input}
              onChange={(event) => setQuery(event.target.value)}
              value={query}
            />
            <Combobox.Button className={styles.button}>
              <ChevronDown />
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
              {filteredValues.length === 0 && query !== "" ? (
                <div className={styles.option.noResult}>Nothing found.</div>
              ) : (
                filteredValues.map((value) => (
                  <Combobox.Option
                    key={value.id}
                    className={({ active }) =>
                      active ? styles.option.active : styles.option.default
                    }
                    value={value.name}
                  >
                    <span>{value.name}</span>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div className={styles.pillContainer}>
        {list.map((item) => (
          <Pill key={item.id} label={item.name} />
        ))}
      </div>
    </div>
  )
}
