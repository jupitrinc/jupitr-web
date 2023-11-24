import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import {
  ScrollAnimation,
  ScrollAnimationItem,
} from "ui-library/content/scroll-animation/ScrollAnimation"
import SectionHeader from "../home/SectionHeader"

const Skills = () => {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader
        title="Granular skills"
        subtitle="Find the right talent with the right skill level."
        highlight="skills"
      />

      <div className="max-w-sm sm:max-w-5xl">
        <ScrollAnimation>
          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard
                skill={{ id: "1", name: "Machine learning", level: 2 }}
              />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "2", name: "TypeScript", level: 2 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard
                skill={{ id: "3", name: "Cloud computing", level: 2 }}
              />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "React", level: 2 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "Terraform", level: 2 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48 p-1">
              <SkillCard skill={{ id: "3", name: "Rust", level: 2 }} />
            </div>
          </ScrollAnimationItem>

          <ScrollAnimationItem>
            <div className="w-48">
              <SkillCard skill={{ id: "3", name: "AWS", level: 2 }} />
            </div>
          </ScrollAnimationItem>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Skills
