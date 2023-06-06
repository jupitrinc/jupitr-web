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
  randomHash: () => (Math.random() + 1).toString(36).substring(7),
}
