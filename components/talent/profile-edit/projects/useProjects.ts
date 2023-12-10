import { useState } from "react"
import { useModal } from "ui-library/modal/useModal"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useUserState } from "state/user/useUserState"
import { IProject } from "state/talent_profile/talentProfile.types"

export const useProjects = () => {
  const [viewType, setViewType] = useState<"edit" | "new">("new")
  const [ongoing, setOngoing] = useState<boolean>(false)

  const { user, loading } = useUserState()
  const { modal, showModal, hideModal } = useModal()
  const initialState: IProject = {
    id: "",
    name: "",
    desc: "",
    start_year: "",
    end_year: "",
    link: "",
  }
  const [project, setProject] = useState(initialState)

  const { addProject, deleteProject, updateProject } = useTalentProfileAction()

  const openModal = () => {
    setViewType("new")
    showModal()
  }

  const closeModal = () => {
    setProject(initialState)
    hideModal()
  }

  const onAdd = () => {
    addProject({
      user_id: user.id,
      projects: user.projects,
      newProject: project,
    })

    closeModal()
  }

  const onDelete = (project_id: string) => {
    deleteProject({
      user_id: user.id,
      projects: user.projects,
      project_id: project_id,
    })

    closeModal()
  }

  const onEdit = (project: IProject) => {
    setViewType("edit")
    setProject(project)
    showModal()
  }

  const onUpdate = () => {
    updateProject({
      user_id: user.id,
      projects: user.projects,
      project: project,
    })

    closeModal()
  }

  const onOngoing = () => {
    setOngoing(!ongoing)
    setProject({ ...project, end_year: "" })
  }

  const byStartDate = (a, b) => {
    return b.start_year - a.start_year
  }

  return {
    onAdd,
    onDelete,
    onEdit,
    onOngoing,
    onUpdate,
    byStartDate,
    openModal,
    closeModal,
    modal,
    project,
    setProject,
    user,
    viewType,
    ongoing,
    loading,
  }
}
