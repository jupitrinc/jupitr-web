import React from "react"
import { Edit, ExternalLink } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { Divider } from "ui-library/content/divider/Divider"
import { Text } from "ui-library/text/Text"
import { urlHelper } from "helper/urlHelper"
import {
  IProject,
  ITalentProfile,
} from "state/talent_profile/talentProfile.types"

interface props {
  projects: ITalentProfile["projects"] | undefined
}

const Projects = ({ projects }: props) => {
  const byStartDate = (a, b) => {
    return b.start_year - a.start_year
  }

  return (
    <Card type="section">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 items-baseline gap-1 text-center">
          <Divider />
          <Text as="h1" size="lg">
            Portfolio
          </Text>
          <Divider />
        </div>

        <div className="flex flex-col gap-5">
          {projects
            ?.sort(byStartDate)
            .map((project) => <Project key={project.id} project={project} />)}
        </div>
      </div>
    </Card>
  )
}

export default Projects

export const Project = ({
  project,
  onEdit,
}: {
  project: IProject
  onEdit?: () => void
}) => {
  return (
    <Card type="static">
      <div className="flex flex-col gap-5 p-3">
        {onEdit && (
          <div className="absolute right-1 top-1">
            <Button
              onClick={onEdit}
              icon={<Edit className="h-4 w-4" />}
              size="xs"
              variant="text"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center gap-2">
              <Text as="h2" size="lg">
                {project.name}
              </Text>

              {project.link && !onEdit && (
                <a
                  href={urlHelper.websiteUrl(project.link)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    icon={<ExternalLink className="h-4 w-4" />}
                    variant="text"
                  />
                </a>
              )}
            </div>

            <Text as="span" size="sm">
              {project.start_year} -{" "}
              {project.end_year ? project.end_year : "Now"}
            </Text>
          </div>

          {project.desc && (
            <Text as="p" size="sm">
              {project.desc}
            </Text>
          )}
        </div>
      </div>
    </Card>
  )
}
