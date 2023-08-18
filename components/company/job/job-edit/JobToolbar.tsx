import { Button } from "ui-library/button/Button"
import { MenuBar } from "ui-library/menu/menu-bar/MenuBar"

const JobToolbar = () => {
  const options = [
    { name: "Preview", onClick: () => alert("") },
    { name: "Share", onClick: () => alert("") },
    { name: "Archive", onClick: () => alert("") },
  ]

  return (
    <div className="basis-2/3 flex flex-row gap-2 items-center justify-end">
      <Button label="Publish" variant="contained" />
      <MenuBar options={options} max_number={1} variant="text" />
    </div>
  )
}

export default JobToolbar
