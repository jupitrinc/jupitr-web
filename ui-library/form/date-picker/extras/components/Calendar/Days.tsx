import dayjs from "dayjs"
import React, { useCallback, useContext } from "react"
import isBetween from "dayjs/plugin/isBetween"
import DatepickerContext from "../../contexts/DatepickerContext"
import { formatDate, nextMonth, previousMonth } from "../../helpers"

dayjs.extend(isBetween)

interface Props {
  calendarData: {
    date: dayjs.Dayjs
    days: {
      previous: number[]
      current: number[]
      next: number[]
    }
  }
  onClickPreviousDays: (day: number) => void
  onClickDay: (day: number) => void
  onClickNextDays: (day: number) => void
}

const Days: React.FC<Props> = ({
  calendarData,
  onClickPreviousDays,
  onClickDay,
  onClickNextDays,
}) => {
  // Contexts
  const { primaryColor, period, changePeriod, dayHover, changeDayHover } =
    useContext(DatepickerContext)

  // Functions
  const currentDateClass = useCallback(
    (item: number) => {
      const itemDate = `${calendarData.date.year()}-${
        calendarData.date.month() + 1
      }-${item >= 10 ? item : "0" + item}`
      if (formatDate(dayjs()) === formatDate(dayjs(itemDate)))
        return "text-blue-500"
    },
    [calendarData.date]
  )

  const activeDateData = useCallback(
    (day: number) => {
      const fullDay = `${calendarData.date.year()}-${
        calendarData.date.month() + 1
      }-${day}`
      let className = ""

      if (
        dayjs(fullDay).isSame(period.start) &&
        dayjs(fullDay).isSame(period.end)
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className = ` bg-blue-500 text-white font-medium rounded-full`
      } else if (dayjs(fullDay).isSame(period.start)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className = ` bg-blue-500 text-white font-medium ${
          dayjs(fullDay).isSame(dayHover) && !period.end
            ? "rounded-full"
            : "rounded-l-full"
        }`
      } else if (dayjs(fullDay).isSame(period.end)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className = ` bg-blue-500 text-white font-medium ${
          dayjs(fullDay).isSame(dayHover) && !period.start
            ? "rounded-full"
            : "rounded-r-full"
        }`
      }

      return {
        active:
          dayjs(fullDay).isSame(period.start) ||
          dayjs(fullDay).isSame(period.end),
        className: className,
      }
    },
    [calendarData.date, dayHover, period.end, period.start]
  )

  const hoverClassByDay = useCallback(
    (day: number) => {
      let className = currentDateClass(day)
      const fullDay = `${calendarData.date.year()}-${
        calendarData.date.month() + 1
      }-${day >= 10 ? day : "0" + day}`

      if (period.start && period.end) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (dayjs(fullDay).isBetween(period.start, period.end, "day", "[)")) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return ` bg-blue-100 ${currentDateClass(day)} dark:bg-white/10`
        }
      }

      if (!dayHover) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return className
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (
        period.start &&
        dayjs(fullDay).isBetween(period.start, dayHover, "day", "[)")
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className = ` bg-blue-100 ${currentDateClass(day)} dark:bg-white/10`
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (
        period.end &&
        dayjs(fullDay).isBetween(dayHover, period.end, "day", "[)")
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        className = ` bg-blue-100 ${currentDateClass(day)} dark:bg-white/10`
      }

      if (dayHover === fullDay) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const bgColor = "bg-blue-500"
        // @ts-ignore
        className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
          period.start ? "rounded-r-full" : "rounded-l-full"
        }`
      }

      return className
    },
    [calendarData.date, currentDateClass, dayHover, period.end, period.start]
  )

  const buttonCass = useCallback(
    (day: number) => {
      const baseClass =
        "flex items-center justify-center w-full h-12 lg:w-10 lg:h-10"
      return `${baseClass}${
        !activeDateData(day).active
          ? ` ${hoverClassByDay(day)}`
          : activeDateData(day).className
      }`
    },
    [activeDateData, hoverClassByDay]
  )

  const hoverDay = useCallback(
    (day: number, type: string) => {
      const object = {
        previous: previousMonth(calendarData.date),
        current: calendarData.date,
        next: nextMonth(calendarData.date),
      }
      const newDate = object[type as keyof typeof object]
      const newHover = `${newDate.year()}-${newDate.month() + 1}-${
        day >= 10 ? day : "0" + day
      }`

      if (period.start && !period.end) {
        if (dayjs(newHover).isBefore(dayjs(period.start))) {
          changePeriod({
            start: null,
            end: period.start,
          })
        }
        changeDayHover(newHover)
      }

      if (!period.start && period.end) {
        if (dayjs(newHover).isAfter(dayjs(period.end))) {
          changePeriod({
            start: period.end,
            end: null,
          })
        }
        changeDayHover(newHover)
      }
    },
    [calendarData.date, changeDayHover, changePeriod, period.end, period.start]
  )

  return (
    <div className="my-1 grid grid-cols-7 gap-y-0.5">
      {calendarData.days.previous.map((item, index) => (
        <button
          type="button"
          key={index}
          className="flex h-12 w-full items-center justify-center text-gray-400 lg:h-10 lg:w-10"
          onClick={() => onClickPreviousDays(item)}
          onMouseOver={() => {
            hoverDay(item, "previous")
          }}
        >
          {item}
        </button>
      ))}

      {calendarData.days.current.map((item, index) => (
        <button
          type="button"
          key={index}
          className={buttonCass(item)}
          onClick={() => {
            onClickDay(item)
          }}
          onMouseOver={() => {
            hoverDay(item, "current")
          }}
        >
          {item}
        </button>
      ))}

      {calendarData.days.next.map((item, index) => (
        <button
          type="button"
          key={index}
          className="flex h-12 w-full items-center justify-center text-gray-400 lg:h-10 lg:w-10"
          onClick={() => {
            onClickNextDays(item)
          }}
          onMouseOver={() => {
            hoverDay(item, "next")
          }}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Days
