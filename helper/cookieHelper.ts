export const cookieHelper = {
  deleteAll: () => {
    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf("=")
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
  },

  removeByName: (value) => {
    document.cookie = value + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  },

  get: (value: string) => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${value}=`))
      ?.split("=")[1]
  },
}
