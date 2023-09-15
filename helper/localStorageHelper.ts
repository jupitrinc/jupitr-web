export enum LocalStorageItemEnum {
  user = "user",
  industries = "industries",
  skills = "skills",
}

export const localStorageHelper = {
  isSupported() {
    return typeof Storage !== "undefined"
  },

  hasItem(key) {
    return localStorage.hasOwnProperty(key)
  },

  getItem(key) {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key)

      if (typeof item !== "string") return item

      if (item === "undefined") return undefined

      if (item === "null") return null

      if (/^'-?\d{1,}?\.?\d{1,}'$/.test(item)) return Number(item)

      if (/^'-?\d{1}\.\d+e\+\d{2}'$/.test(item)) return Number(item)

      if (item[0] === "{" || item[0] === "[") return JSON.parse(item)

      return item
    }
  },

  setItem(key, value) {
    if (typeof key !== "string") {
      throw new TypeError(
        `localStorage: Key must be a string. (reading '${key}')`
      )
    }

    if (typeof value === "object" || Array.isArray(value)) {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
  },

  removeItem(key) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  },
}
