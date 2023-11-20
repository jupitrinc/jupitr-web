import Upskill from "./Upskill"
import VideoJob from "./VideoJob"
import VideoJobApplication from "./VideoJobApplication"
import Brands from "./brands"

const Sections = () => {
  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto p-10">
      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <Brands />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <VideoJob />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <VideoJobApplication />
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div className="basis-full">
          <Upskill />
        </div>
      </section>
    </div>
  )
}

export default Sections
