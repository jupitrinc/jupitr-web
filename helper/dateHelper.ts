import moment from "moment"

export const dateHelper = {
  currentYear: () => {
    const now = new Date()
    return now.getFullYear()
  },
  prettyDate: (timestamp: string) => {
    return moment(new Date(timestamp)).format("LL")
  },
}
