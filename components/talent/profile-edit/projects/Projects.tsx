import React from "react"
import { Plus } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Card } from "ui-library/content/card/Card"
import { SectionHeader } from "ui-library/content/section-header/SectionHeader"
import { Modal } from "ui-library/modal/Modal"
import { Text } from "ui-library/text/Text"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { NumberInput } from "ui-library/form/number-input/NumberInput"
import SectionVisibility from "../SectionVisibility"
import { Project } from "../../profile/Projects"
import { Toggle } from "ui-library/form/toggle/Toggle"
import { useProjects } from "./useProjects"

const Projects = () => {
  const {
    onAdd,
    onDelete,
    onEdit,
    onOngoing,
    onUpdate,

    modal,
    openModal,
    closeModal,

    project,
    setProject,
    viewType,
    ongoing,
    user,
    loading,

    byStartDate,
  } = useProjects()

  return (
    <>
      <Card type="section">
        <div className="absolute right-1 top-1">
          <SectionVisibility section="projects" />
        </div>
        <div className="flex flex-row items-center justify-between gap-1">
          <SectionHeader title="Portfolio" />
          <Button
            label={"Add project"}
            size="xs"
            onClick={openModal}
            variant="outlined"
            icon={<Plus className="h-4 w-4" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-5">
          {user.projects
            ?.sort(byStartDate)
            .map((project) => (
              <Project
                key={project.id}
                project={project}
                onEdit={() => onEdit(project)}
              />
            ))}
        </div>
      </Card>

      <Modal open={modal} onClose={closeModal}>
        <div className="flex min-h-[18rem] flex-col gap-5 overflow-auto">
          <Text as="span" size="xl">
            {`${viewType === "edit" ? "Edit" : "Add"} project`}
          </Text>

          <div className="flex flex-col gap-3 p-1">
            <TextInput
              name="project-name"
              placeholder=""
              label="Name"
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              maxLength={100}
            />

            <div className="flex flex-row items-center gap-3">
              <NumberInput
                label="Year started"
                name="project-start"
                value={Number(project.start_year)}
                onChange={(e) =>
                  setProject({ ...project, start_year: e.target.value })
                }
              />

              <NumberInput
                label="Year ended"
                name="project-end"
                value={Number(project.end_year)}
                onChange={(e) =>
                  setProject({ ...project, end_year: e.target.value })
                }
                disabled={ongoing}
              />

              <div className="flex items-center pt-8">
                <Toggle
                  checked={ongoing}
                  size="base"
                  label="Ongoing"
                  onChange={onOngoing}
                />
              </div>
            </div>

            <Textarea
              name="project-desc"
              label="Description"
              value={project.desc}
              onChange={(e) => setProject({ ...project, desc: e.target.value })}
              maxLength={250}
            />

            <TextInput
              name="project-link"
              placeholder=""
              label="Website"
              value={project.link}
              onChange={(e) => setProject({ ...project, link: e.target.value })}
            />

            <div className="mt-5 flex flex-row justify-between">
              <Button
                label="Save"
                loading={loading}
                onClick={viewType === "new" ? onAdd : onUpdate}
              />

              {viewType === "edit" && (
                <Button
                  label="Delete"
                  loading={loading}
                  variant="text"
                  color="dangerous"
                  onClick={() => onDelete(project.id)}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Projects
