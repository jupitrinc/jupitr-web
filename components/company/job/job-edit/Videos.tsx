import React from "react"
import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import AddVideos from "./videos/AddVideos"
import VideoCard from "./videos/VideoCard"
import { CompanyVideosContextProvider } from "state/company_videos/CompanyVideosContext"

export const Videos = () => {
  const { videos } = useCompanyJobState()

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <SectionHeader title="Videos" />

        <CompanyVideosContextProvider>
          <AddVideos />
        </CompanyVideosContextProvider>
      </div>

      {videos &&
        videos.map((video) => <VideoCard key={video.id} video={video} />)}
    </Card>
  )
}
