import Skills from "./Skills"
import IntroVideo from "./IntroVideo"
import SectionHeader from "./SectionHeader"

const Sections = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 p-10">
      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <SectionHeader
            title="Get more job interviews with jupitr."
            subtitle=""
            highlight="job interviews"
          />
        </div>
      </section>

      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <IntroVideo />
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
