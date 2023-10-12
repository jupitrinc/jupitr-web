import { GetServerSidePropsContext } from "next"
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs"
import { TalentAppLayout } from "layouts/TalentAppLayout"
import { urlHelper } from "helper/urlHelper"
import talentJobService from "services/talent/talentJobService"
import { useEffect, useMemo } from "react"
import { useTalentJobAction } from "state/talent_job/useTalentJobAction"
import { NoMatchFound } from "ui-library/content/no-match-found/NoMatchFound"
import { ITalentJob } from "state/talent_job/talentJob.types"
import PageHead from "layouts/components/PageHead"
import JobView from "components/talent/job/JobView"

export default function TalentPublicJob({
  job,
  domain,
}: {
  job: ITalentJob
  domain: string
}) {
  const { setJob } = useTalentJobAction()

  useEffect(() => {
    if (job.id) setJob(job)
  }, [])

  const ogUrl = useMemo(
    () =>
      job.id
        ? urlHelper.ogImageUrl({
            domain: domain,
            company_logo: urlHelper.imageUrl(job.company.logo) as string,
            title: job.title,
          })
        : undefined,

    [job.id]
  )

  if (job.id) {
    return (
      <>
        <PageHead
          title={`${job.title} - ${job.company.name}`}
          description="Apply now"
          image={ogUrl}
          robots="index, follow"
        />
        <TalentAppLayout>
          <div className="flex flex-col gap-5 max-w-2xl mx-auto">
            <div className="w-full">
              <JobView />
            </div>
          </div>
        </TalentAppLayout>
      </>
    )
  } else {
    return (
      <div className="flex justify-center mt-20">
        <NoMatchFound
          message="Job no longer available"
          link="/jobs"
          label="Find similar jobs"
        />
      </div>
    )
  }
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { jobId } = context.query
  const protocol =
    context.req.headers.host && context.req.headers.host.includes("localhost")
      ? "http"
      : "https"

  const domain = `${protocol}://${context.req.headers.host}`
  const supabase = createPagesServerClient(context)
  const { getJobQuery } = talentJobService()

  const { data } = await supabase
    .from("jobs")
    .select(getJobQuery)
    .eq("id", jobId)
    .eq("status", "open")
    .not("company_id", "is", null)
    .single()

  return {
    props: {
      job: data ?? {},
      domain: domain,
    },
  }
}
