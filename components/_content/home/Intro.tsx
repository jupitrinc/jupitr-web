import { useRouter } from "next/router"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { Button } from "ui-library/button/Button"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import { urlHelper } from "helper/urlHelper"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"

const Intro = () => {
  const router = useRouter()

  const video = {
    url: "https://res.cloudinary.com/dyfg2jhz8/video/upload/f_auto:video,q_auto/v1/production/company/d75f8ef2-40d4-4b4b-9047-c1b73c55b20d/jobs/d3ba1cf3-0a8d-4c09-9e8c-32eb967613f4/4b61daac-c490-4f3c-9f15-8e42cb527476-1695797858118/qukcglt0ukmuaadrjg59",
    poster:
      "production/company/d75f8ef2-40d4-4b4b-9047-c1b73c55b20d/jobs/d3ba1cf3-0a8d-4c09-9e8c-32eb967613f4/4b61daac-c490-4f3c-9f15-8e42cb527476-1695797858118/qukcglt0ukmuaadrjg59",
  }

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="basis-1/3">
        <Card type="section">
          <div className="flex flex-col gap-10">
            <Header title="Find" subtitle="tech jobs matching your skills" />

            <div className="grid grid-cols-1 gap-5">
              <SkillCard
                skill={{ id: "1", name: "Machine learning", level: 2 }}
              />
              <SkillCard skill={{ id: "2", name: "Typescript", level: 2 }} />
              <SkillCard
                skill={{ id: "3", name: "Cloud computing", level: 2 }}
              />
            </div>
            <Text as="span" size="sm" align="center">
              300+ trending skills
            </Text>
          </div>
        </Card>
      </div>

      <div className="basis-2/3">
        <Card type="section">
          <div className="flex flex-col gap-10">
            <Header title="Join" subtitle="A-player tech teams" />
            <VideoPlayer
              src={video.url}
              poster={urlHelper.videoPosterUrl(video.poster)}
            />
            <div className="flex justify-center">
              <Button
                label="See job"
                variant="outlined"
                arrow
                onClick={() =>
                  router.push("/jobs/d3ba1cf3-0a8d-4c09-9e8c-32eb967613f4")
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Intro

const Header = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1">
      <Text as="span" size="xl2" bold>
        {title}
      </Text>
      <Text as="h1" size="lg">
        <span className="text-gray-500">{subtitle}</span>
      </Text>
    </div>
  )
}
