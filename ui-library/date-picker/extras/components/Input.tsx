import dayjs from "dayjs"
import React, { useCallback, useContext, useEffect, useRef } from "react"
import DatepickerContext from "../contexts/DatepickerContext"
import { dateIsValid } from "../helpers"

const Input: React.FC = () => {
  // Context
  const {
    period,
    dayHover,
    changeDayHover,
    calendarContainer,
    arrowContainer,
    inputText,
    changeInputText,
    hideDatepicker,
    changeDatepickerValue,
    placeholder,
    disabled,
    inputClassName,
  } = useContext(DatepickerContext)

  // UseRefs
  const buttonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      const start = `${inputValue.slice(0, 4)}-${inputValue.slice(
        5,
        7
      )}-${inputValue.slice(8, 10)}`
      const end = `${inputValue.slice(13, 17)}-${inputValue.slice(
        18,
        20
      )}-${inputValue.slice(21, inputValue.length)}`
      const input = inputRef?.current

      if (
        start.length === 10 &&
        end.length === 10 &&
        dateIsValid(new Date(start)) &&
        dateIsValid(new Date(end)) &&
        dayjs(start).isBefore(end)
      ) {
        changeDatepickerValue({
          startDate: start,
          endDate: end,
        })
        changeDayHover(dayjs(end).add(-1, "day").format("YYYY-MM-DD"))
        hideDatepicker()
        if (input) {
          input.blur()
        }
      }
      changeInputText(e.target.value)
    },
    [changeDatepickerValue, changeDayHover, changeInputText, hideDatepicker]
  )

  useEffect(() => {
    const button = buttonRef?.current

    function focusInput(e: Event) {
      e.stopPropagation()
      if (inputRef?.current) {
        inputRef.current.focus()
        if (inputText) {
          changeInputText("")
          if (dayHover) {
            changeDayHover(null)
          }
          if (period.start && period.end) {
            changeDatepickerValue({
              startDate: null,
              endDate: null,
            })
          }
        }
      }
    }

    if (buttonRef?.current) {
      if (button) {
        button.addEventListener("click", focusInput)
      }
    }

    return () => {
      if (button) {
        button.removeEventListener("click", focusInput)
      }
    }
  }, [
    changeDatepickerValue,
    changeDayHover,
    changeInputText,
    dayHover,
    inputText,
    period.end,
    period.start,
  ])

  useEffect(() => {
    const div = calendarContainer?.current
    const input = inputRef.current
    const arrow = arrowContainer?.current

    function showCalendarContainer() {
      if (arrow && div && div.classList.contains("hidden")) {
        div.classList.remove("hidden")
        div.classList.add("block")
        if (window.screen.height - 100 < div.getBoundingClientRect().bottom) {
          div.classList.add("bottom-full")
          div.classList.add("mb-2.5")
          div.classList.remove("mt-2.5")
          arrow.classList.add("-bottom-2")
          arrow.classList.add("border-r")
          arrow.classList.add("border-b")
          arrow.classList.remove("border-l")
          arrow.classList.remove("border-t")
        }
        setTimeout(() => {
          div.classList.remove("translate-y-4")
          div.classList.remove("opacity-0")
          div.classList.add("translate-y-0")
          div.classList.add("opacity-1")
        }, 1)
      }
    }

    if (div && input) {
      input.addEventListener("focus", showCalendarContainer)
    }

    return () => {
      if (input) {
        input.removeEventListener("focus", showCalendarContainer)
      }
    }
  }, [calendarContainer, arrowContainer])

  return (
    <input
      ref={inputRef}
      type="text"
      className={`${inputClassName}`}
      disabled={disabled}
      placeholder={placeholder ? placeholder : "YYYY-MM-DD"}
      value={inputText ? dayjs(inputText).format("MMM D, YYYY") : inputText}
      onChange={handleInputChange}
    />
  )
}

export default Input
