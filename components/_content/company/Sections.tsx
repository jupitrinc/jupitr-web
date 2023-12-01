import SectionHeader from "../home/SectionHeader"
import GetStarted from "./GetStarted"
import Skills from "./Skills"
import VideoJobApplication from "./VideoJobApplication"

const Sections = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 p-10">
      <GetStarted />

      <section className="flex h-screen items-center justify-center">
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

      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <Skills />
        </div>
      </section>
    </div>
  )
}

export default Sections
