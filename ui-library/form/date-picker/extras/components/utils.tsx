import React, { useCallback } from "react"

interface IconProps {
  className: string
}

interface Button {
  children: JSX.Element | JSX.Element[]
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  roundedFull?: boolean
  padding?: string
}

export const ChevronLeftIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  )
}

export const DoubleChevronLeftIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  )
}

export const ChevronRightIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  )
}

export const DoubleChevronRightIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
      />
    </svg>
  )
}

// eslint-disable-next-line react/display-name,@typescript-eslint/ban-types
export const Arrow = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-20 ml-[1.2rem] mt-0.5 h-4 w-4 rotate-45 border-l border-t border-gray-300 bg-white dark:border-slate-600 dark:bg-slate-800"
    />
  )
})

export const RoundedButton: React.FC<Button> = ({
  children,
  onClick,
  roundedFull = false,
  padding = "py-[0.55rem]",
}) => {
  // Functions
  const getClassName = useCallback(() => {
    const defaultClass = !roundedFull
      ? `w-full tracking-wide transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-xl focus:ring-1 focus:ring-gray-200`
      : `transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1 focus:ring-gray-200`

    return defaultClass
  }, [padding, roundedFull])

  return (
    <button type="button" className={getClassName()} onClick={onClick}>
      {children}
    </button>
  )
}
