import { RepoCardProps } from "./RepoCard.types"
import { Pill } from "../pill/Pill"
import { numberHelper } from "helper/numberHelper"
import { dateHelper } from "helper/dateHelper"
import { IoMdStarOutline } from "react-icons/io"

export const RepoCard: React.FC<RepoCardProps> = (card) => {
  const { formatLargeNumber } = numberHelper
  const { prettyDate } = dateHelper

  return (
    <article
      className=" flex flex-col flex-wrap space-y-3"
      data-testid="repo-card"
    >
      <div>
        <div className="flex flex-row flex-wrap space-x-3">
          <a
            aria-label="link to github repository"
            target="_blank"
            rel="noreferrer"
            href={card.data.html_url}
            className="text-blue-500 hover:underline inline-block"
          >
            <h2 className="text-blue-500 font-medium mb-1">
              {card.data.full_name}
            </h2>
          </a>

          {card.data.watchers && (
            <div className="flex justify-start items-center mb-1">
              <IoMdStarOutline className="inline h-5 w-5 text-yellow-500" />
              <span className="text-xs text-gray-500">
                {formatLargeNumber(card.data.watchers)}
              </span>
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm">{card.data.description}</p>
      </div>

      {card.data.topics.length > 0 && (
        <ul className="flex flex-auto flex-wrap">
          {card.data.topics.map((topic) => (
            <li key={topic} className="my-2 mr-2">
              <Pill label={topic} />
            </li>
          ))}
        </ul>
      )}

      <p className="text-gray-400 text-xs font-light space-x-2">
        <span> Created on {prettyDate(card.data.created_at)}</span>
        <span className="text-xs text-gray-500 px-2 py-1">
          {card.data.language}
        </span>
      </p>

      <hr className="h-px bg-gray-100 border-0" />
    </article>
  )
}
