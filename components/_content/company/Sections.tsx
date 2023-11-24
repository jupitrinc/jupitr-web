import SectionHeader from "../home/SectionHeader"
import GetStarted from "./GetStarted"
import Skills from "./Skills"
import VideoJobApplication from "./VideoJobApplication"

const Sections = () => {
  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto p-10">
      <GetStarted />

      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <SectionHeader
            title="Looking for A-player tech talent?"
            highlight="A-player"
            subtitle=""
          />
        </div>
      </section>

      <section>
        <div>
          <VideoJobApplication />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <Skills />
        </div>
      </section>
    </div>
  )
}

export default Sections
