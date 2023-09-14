import { useCallback, useEffect, useState } from "react"
import { ISkill } from "state/talent_profile/talentProfile.types"

export const useApplication = (data: ISkill[]) => {
  const [step, setStep] = useState<number>(1)
  const [skills, setSkills] = useState<ISkill[]>([])
  const [videoFile, setVideoFile] = useState<File | null>(null)

  useEffect(() => {
    if (skills.length < 1) {
      const prepareSkills = data?.map((item) => {
        return { ...item, level: 1 }
      })

      setSkills(prepareSkills)
    }
  }, [data])

  const progress = useCallback((step: number) => {
    switch (step) {
      case 1:
        return 50

      case 2:
        return 90

      default:
        return 100
    }
  }, [])

  const nextStep = useCallback(() => {
    setStep(step + 1)
  }, [step])

  const prevStep = useCallback(() => {
    setStep(step > 1 ? step - 1 : 1)
  }, [step])

  const updateSkill = useCallback(
    async (level: number, skill: ISkill) => {
      setSkills(
        skills.map((s) => {
          if (s.id === skill.id) {
            return {
              ...s,
              level: level,
            }
          }
          return s
        })
      )
    },
    [skills]
  )

  return {
    step,
    progress,
    nextStep,
    prevStep,
    skills,
    updateSkill,
    videoFile,
    setVideoFile,
  }
}
