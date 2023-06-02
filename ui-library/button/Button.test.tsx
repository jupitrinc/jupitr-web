import { Button } from "./Button"
import { render, screen, fireEvent } from "@testing-library/react"

// test type: unit
test("Button component", () => {
  const handleClick = jest.fn()

  // renders
  const label = "click me"
  render(<Button label={label} onClick={handleClick} />)

  const button = screen.getByRole("button")

  // has label
  expect(button.textContent).toBe(label)

  // onClick event works + not disabled
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
