import React, { useMemo } from "react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { ITalentJob } from "state/talent_job/talentJob.types"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { useTalentJobState } from "state/talent_job/useTalentJobState"

const ListSwiper = ({ jobs }: { jobs: ITalentJob[] }) => {
  const { talent_job } = useTalentJobState()
  const { setJob } = useTalentJobAction()

  const activeJob = useMemo(
    () => jobs.findIndex((job) => job.id === talent_job.id),
    [talent_job]
  )

  return (
    <div className="md:hidden fixed left-0 bottom-0 flex flex-row justify-between w-full ga-5 p-3 bg-gray-100 border-t border-gray-900/10 items-center">
      <Button
        label="Prev"
        size="base"
        variant="text"
        onClick={() => setJob(jobs[activeJob - 1])}
        disabled={activeJob === 0}
      />

      <Text as="span" size="sm">{`${activeJob + 1}/${jobs.length}`}</Text>

      <Button
        label="Next"
        size="base"
        variant="text"
        onClick={() => setJob(jobs[activeJob + 1])}
        disabled={activeJob + 1 === jobs.length}
      />
    </div>
  )
}

export default ListSwiper
