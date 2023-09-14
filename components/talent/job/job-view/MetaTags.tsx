import { urlHelper } from "helper/urlHelper"
import { url } from "inspector"
import PageMetaTags from "layouts/components/PageMetaTags"
import { useMemo } from "react"
import { ITalentJob } from "state/talent_job/talentJob.types"

interface props {
  job: ITalentJob
}

const MetaTags = ({ job }: props) => {
  const description = useMemo(() => {
    const skills = job.skills?.map(function (skill) {
      return skill.name
    })

    return skills?.join(", ")
  }, [job.skills])

  return (
    <PageMetaTags
      title={`${job.title} | ${job.company.name}`}
      description={description}
      keywords={`${description}, tech, job`}
      robots="index, nofollow"
      image={urlHelper.imageUrl(job.company.logo)}
      video={urlHelper.videoUrl(job.company_videos[0]?.video_url)}
    />
  )
}

export default MetaTags
