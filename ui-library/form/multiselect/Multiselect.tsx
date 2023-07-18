import { Fragment, useEffect, useState } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import { Pill } from "ui-library/pill/Pill"
import { MultiselectProps } from "./Multiselect.types"
import { multiselectStyles } from "./Multiselect.styles"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"

export const Multiselect: React.FC<MultiselectProps> = ({ options }) => {
  const styles = multiselectStyles
  const { addIndustry, removeIndustry } = useCompanyProfileAction()
  const {
    company_profile: { industry },
  } = useCompanyProfileState()
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
      const isAlreadySelected =
        industry && industry.some((item) => item.id === selected.id)
      if (!isAlreadySelected) addIndustry(selected)
      setSelected(undefined)
      setQuery("")
    }
  }

  const filteredValues =
    query === ""
      ? options
      : options.filter((value) =>
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
          const selectedValue = options.find((item) => item.name === value)
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
              <ChevronDown className="text-gray-500 w-4 h-4" />
            </Combobox.Button>
          </div>
          {options && options.length && (
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
          )}
        </div>
      </Combobox>
      <div className={styles.pillContainer}>
        {industry &&
          industry.map((item) => (
            <Pill
              key={item.id}
              label={item.name}
              type="clickable"
              onClick={() => removeIndustry(item)}
            />
          ))}
      </div>
    </div>
  )
}
