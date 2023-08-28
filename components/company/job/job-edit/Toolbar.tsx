import { useCallback, useMemo } from "react"
import { useRouter } from "next/router"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { Button } from "ui-library/button/Button"
import { MenuBar } from "ui-library/menu/menu-bar/MenuBar"
import { JobStatusEnum } from "state/company_job/companyJob.types"

const Toolbar = () => {
  const router = useRouter()

  const { company_job } = useCompanyJobState()
  const { deleteJob, updateStatus } = useCompanyJobAction()

  const options = useMemo(
    () => [
      // { name: "Preview", onClick: () => alert("") },
      // { name: "Share", onClick: () => alert("") },
      {
        name: "Close",
        onClick: () => {
          updateStatus({ job_id: company_job.id, status: JobStatusEnum.closed })
          router.push("/c/jobs")
        },
      },
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

  const toggleStatus = useCallback(() => {
    updateStatus({
      job_id: company_job.id,
      status:
        company_job.status === JobStatusEnum.open
          ? JobStatusEnum.paused
          : JobStatusEnum.open,
    })
  }, [company_job])

  return (
    <div className="basis-2/3 flex flex-row gap-2 items-center justify-end">
      <Button
        label={company_job.status === "open" ? "Pause" : "Publish"}
        variant={company_job.status === "open" ? "text" : "contained"}
        onClick={toggleStatus}
      />
      <MenuBar options={options} max_number={0} variant="text" size="xs" />
    </div>
  )
}

export default Toolbar
