import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import {
  ScrollAnimation,
  ScrollAnimationItem,
} from "ui-library/content/scroll-animation/ScrollAnimation"
import SectionHeader from "./SectionHeader"

const Upskill = () => {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader
        title="Upskill with jupitr community"
        subtitle="Stay on top of the latest tech skills, tools and tips."
        highlight="Upskill"
      />

      <div className="max-w-sm sm:max-w-5xl">
        <ScrollAnimation>
          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard
                skill={{ id: "1", name: "Machine learning", level: 1 }}
              />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "2", name: "TypeScript", level: 1 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard
                skill={{ id: "3", name: "Cloud computing", level: 1 }}
              />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "React", level: 1 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "Terraform", level: 1 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48 p-1">
              <SkillCard skill={{ id: "3", name: "Rust", level: 1 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "AWS", level: 1 }} />
            </div>
          </ScrollAnimationItem>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Upskill
