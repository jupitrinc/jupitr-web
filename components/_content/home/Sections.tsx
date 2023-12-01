import Upskill from "./Upskill"
import VideoJob from "./VideoJob"
import VideoJobApplication from "./VideoJobApplication"
import Brands from "./brands"

const Sections = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 p-10">
      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <Brands />
        </div>
      </section>

      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <VideoJob />
        </div>
      </section>

      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <VideoJobApplication />
        </div>
      </section>

      <section className="flex h-screen items-center justify-center">
        <div className="basis-full">
          <Upskill />
        </div>
      </section>
    </div>
  )
}

export default Sections
