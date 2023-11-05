import { DollarSign, PoundSterling } from "lucide-react"

const Currency: React.FC<{ countryCode?: string }> = ({
  countryCode = "GB",
}) => {
  const className = "h-5 w-5 text-gray-600"

  return countryCode !== "GB" ? (
    <DollarSign className={className} />
  ) : (
    <PoundSterling className={className} />
  )
}

export default Currency
