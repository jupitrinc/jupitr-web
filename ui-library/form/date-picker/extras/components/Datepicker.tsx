import dayjs from "dayjs"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Calendar from "./Calendar"
import Input from "./Input"
import DatepickerContext from "../contexts/DatepickerContext"
import { formatDate, nextMonth, previousMonth } from "../helpers"
import useOnClickOutside from "../hooks"
import { Period } from "../types"
import { Arrow } from "./utils"

interface Props {
  value: {
    startDate: string | Date | null
    endDate: string | Date | null
  } | null
  onChange: (
    value: {
      startDate: string | Date | null
      endDate: string | Date | null
    } | null
  ) => void
  placeholder?: string
  i18n?: string
  disabled?: boolean
  inputClassName?: string | null
  containerClassName?: string | null
}

const Datepicker: React.FC<Props> = ({
  value = null,
  onChange,
  placeholder = null,
  i18n = "en",
  disabled = false,
  inputClassName = null,
  containerClassName = null,
}) => {
  // Ref
  const containerRef = useRef<HTMLDivElement>(null)
  const calendarContainerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  // State
  const [firstDate, setFirstDate] = useState<dayjs.Dayjs>(dayjs())
  const [period, setPeriod] = useState<Period>({
    start: null,
    end: null,
  })
  const [secondDate, setSecondDate] = useState<dayjs.Dayjs>(
    nextMonth(firstDate)
  )
  const [dayHover, setDayHover] = useState<string | null>(null)
  const [inputText, setInputText] = useState<string>("")

  // Custom Hooks use
  useOnClickOutside(containerRef, () => {
    const container = containerRef.current
    if (container) {
      hideDatepicker()
    }
  })

  // Functions
  const hideDatepicker = useCallback(() => {
    const div = calendarContainerRef.current
    const arrow = arrowRef.current
    if (arrow && div && div.classList.contains("block")) {
      div.classList.remove("block")
      div.classList.remove("translate-y-0")
      div.classList.remove("opacity-1")
      div.classList.add("translate-y-4")
      div.classList.add("opacity-0")
      setTimeout(() => {
        div.classList.remove("bottom-full")
        div.classList.add("hidden")
        div.classList.add("mb-2.5")
        div.classList.add("mt-2.5")
        arrow.classList.remove("-bottom-2")
        arrow.classList.remove("border-r")
        arrow.classList.remove("border-b")
        arrow.classList.add("border-l")
        arrow.classList.add("border-t")
      }, 300)
    }
  }, [])

  const firstGotoDate = useCallback(
    (date: dayjs.Dayjs) => {
      const newDate = dayjs(formatDate(date))
      const reformatDate = dayjs(formatDate(secondDate))
      if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
        setSecondDate(nextMonth(date))
      }
      setFirstDate(date)
    },
    [secondDate]
  )

  const previousMonthFirst = useCallback(() => {
    setFirstDate(previousMonth(firstDate))
  }, [firstDate])

  const nextMonthFirst = useCallback(() => {
    firstGotoDate(nextMonth(firstDate))
  }, [firstDate, firstGotoDate])

  const changeFirstMonth = useCallback(
    (month: number) => {
      firstGotoDate(
        dayjs(`${firstDate.year()}-${month < 10 ? "0" : ""}${month}-01`)
      )
    },
    [firstDate, firstGotoDate]
  )

  const changeFirstYear = useCallback(
    (year: number) => {
      firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`))
    },
    [firstDate, firstGotoDate]
  )

  useEffect(() => {
    const container = containerRef.current
    const calendarContainer = calendarContainerRef.current
    const arrow = arrowRef.current

    if (container && calendarContainer && arrow) {
      const detail = container.getBoundingClientRect()
      const screenCenter = window.innerWidth / 2
      const containerCenter = (detail.right - detail.x) / 2 + detail.x

      if (containerCenter > screenCenter) {
        arrow.classList.add("right-0")
        arrow.classList.add("mr-3.5")
        calendarContainer.classList.add("right-0")
      }
    }
  }, [])

  useEffect(() => {
    if (value && value.startDate && value.endDate) {
      const startDate = dayjs(value.startDate)
      const endDate = dayjs(value.endDate)
      const validDate = startDate.isValid() && endDate.isValid()
      const condition =
        validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate))
      if (condition) {
        setPeriod({
          start: formatDate(startDate),
          end: formatDate(endDate),
        })
        setInputText(`${formatDate(startDate)}`)
      }
    }

    if (value && value.startDate === null && value.endDate === null) {
      setPeriod({
        start: null,
        end: null,
      })
    }
  }, [value])

  const contextValues = useMemo(() => {
    return {
      primaryColor: "blue",
      calendarContainer: calendarContainerRef,
      arrowContainer: arrowRef,
      hideDatepicker,
      period,
      changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
      dayHover,
      changeDayHover: (newDay: string | null) => setDayHover(newDay),
      inputText,
      changeInputText: (newText: string) => setInputText(newText),
      updateFirstDate: (newDate: dayjs.Dayjs) => firstGotoDate(newDate),
      changeDatepickerValue: onChange,
      placeholder,
      i18n,
      value,
      disabled,
      inputClassName,
      containerClassName,
    }
  }, [
    dayHover,
    firstGotoDate,
    hideDatepicker,
    i18n,
    inputText,
    onChange,
    period,
    placeholder,
    value,
    disabled,
    inputClassName,
    containerClassName,
  ])

  return (
    <DatepickerContext.Provider value={contextValues}>
      <div
        className={`relative w-full text-gray-700 ${containerClassName}`}
        ref={containerRef}
      >
        <Input />

        <div
          className="absolute z-10 mt-[1px] hidden translate-y-4 text-sm opacity-0 transition-all duration-300 ease-out lg:text-xs 2xl:text-sm"
          ref={calendarContainerRef}
        >
          <Arrow ref={arrowRef} />

          <div className="mt-2.5 rounded-xl border border-gray-300 bg-white px-1 py-0.5 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-white">
            <div className="flex flex-col py-2 lg:flex-row">
              <div
                className={
                  "flex flex-col items-stretch space-y-4 pr-2 md:flex-row md:space-x-1.5 md:space-y-0 md:pl-1 lg:pr-1"
                }
              >
                <Calendar
                  date={firstDate}
                  onClickPrevious={previousMonthFirst}
                  onClickNext={nextMonthFirst}
                  changeMonth={changeFirstMonth}
                  changeYear={changeFirstYear}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DatepickerContext.Provider>
  )
}

export default Datepicker
