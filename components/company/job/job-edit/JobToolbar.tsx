import { useMemo } from "react"
import { useRouter } from "next/router"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Button } from "ui-library/button/Button"
import { MenuBar } from "ui-library/menu/menu-bar/MenuBar"

const JobToolbar = () => {
  const router = useRouter()
  const { company_job } = useCompanyJobState()
  const { deleteJob } = useCompanyJobAction()

  const options = useMemo(
    () => [
      { name: "Preview", onClick: () => alert("") },
      { name: "Share", onClick: () => alert("") },
      {
        name: "Delete",
        onClick: () => {
          deleteJob(company_job.id)
          router.push("/c/jobs")
        },
      },
    ],
    [company_job.id]
  )

  return (
    <div className="basis-2/3 flex flex-row gap-2 items-center justify-end">
      <Button label="Publish" variant="contained" size="xs" />
      <MenuBar options={options} max_number={0} variant="text" size="xs" />
    </div>
  )
}

export default JobToolbar
