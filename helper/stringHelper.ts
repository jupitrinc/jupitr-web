export const stringHelper = {
  getInitials: (str: string) => {
    if (!str) {
      return ""
    } else {
      const parts = str.split(" ")
      let initials = ""
      for (let i = 0; i < parts.length && i < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0]
        }
      }
      return initials.toUpperCase()
    }
  },
  isEmpty: (str: string) => {
    if (!str || str === undefined) return false
    return str.trim() === ""
  },

  sentenceCase: (str: string) => {
    const words = str.trim().split(" ")
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1)
      })
      .join(" ")
  },
  randomHash: () => (Math.random() + 1).toString(36).substring(7),
}
