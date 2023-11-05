import { DollarSign, PoundSterling } from "lucide-react"

const Currency: React.FC<{ countryCode?: string }> = ({
  countryCode = "GB",
}) => {
  return countryCode !== "GB" ? (
    <DollarSign className="h-5 w-5" />
  ) : (
    <PoundSterling className="h-5 w-5" />
  )
}

export default Currency
