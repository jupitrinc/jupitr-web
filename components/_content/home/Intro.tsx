import { Text } from "ui-library/text/Text"
import { themeStyles } from "ui-library/_theme/Theme.styles"
import "./intro.style.css"
const Intro = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="basis-full">
        <section
          id="hero"
          className=" h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <div className={"mb-4"}>
              {" "}
              <Text as={"h1"} size={"xl4"} bold={true}>
                Join{" "}
                <span className={`${themeStyles.textColor.gradient}`}>
                  A-player{" "}
                </span>
                tech teams
              </Text>
            </div>

            <Text as={"h2"} size={"base"} align={"center"}>
              Discover opportunities beyond the ordinary. Join jupitr today to
              connect with mission-driven
              <span className="block">
                tech teams and redefine your professional journey.
              </span>
            </Text>
          </div>
        </section>
        <section className="mb-20" id="community">
          <div className="mb-16">
            <Text as={"h1"} size={"xl4"} align={"center"} bold={true}>
              Join jupitr community
            </Text>
          </div>

          <div className="text-center grid grid-cols-1 md:grid-cols-3 ">
            <div className="mb-5 sm:mb-0">
              <h1 className="text-2xl  font-bold  mb-4 sm:mb-7 text-transparent bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text">
                Find a Job
              </h1>
              <Text as="p" size={"base"}>
                Explore roles through engaging videos, connecting with
                <span className="block">
                  opportunities that align with your skills and aspirations.
                </span>
              </Text>
            </div>
            <div className="mb-5 sm:mb-0">
              <h1 className="text-2xl font-bold  mb-4 sm:mb-7 text-transparent bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text">
                Upskill
              </h1>
              <Text as="p" size={"base"}>
                Elevate your skills and stay at the forefront of innovation.
              </Text>
            </div>
            <div className="mb-5 sm:mb-0">
              <h1 className="text-2xl font-bold mb-4 sm:mb-7 text-transparent bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text">
                Innovate
              </h1>
              <Text as="p" size={"base"}>
                Unlock a World of Possibilities.
              </Text>
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="mb-16">
            <Text as={"h1"} size={"xl4"} align={"center"} bold={true}>
              Video-Powered Jobs
            </Text>
          </div>
          <Text as={"h2"} size={"lg"} align={"center"}>
            Hear directly from your future team members about the job,
            challenges, and company culture
          </Text>
        </section>
        <section>
          <div className="mb-16">
            <Text as={"h1"} size={"xl4"} align={"center"} bold={true}>
              Your Ideal Match
            </Text>
          </div>
          <Text as={"h2"} size={"lg"} align={"center"}>
            Explore roles that precisely fit your skills and expertise level.
            Jupitr ensures your career journey is tailored to perfection.
          </Text>
        </section>
      </div>
    </div>
  )
}

export default Intro
