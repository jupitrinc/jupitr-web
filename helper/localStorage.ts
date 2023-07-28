// TODO crear tipado para la utilidad

export const LocalStorage = {
  /**
   * Determine if browser supports local storage.
   *
   * @return {boolean}
   */
  isSupported() {
    return typeof Storage !== "undefined"
  },

  /**
   * Check if key exists in local storage.
   *
   * @param {string} key
   * @return {boolean}
   */
  hasItem(key) {
    return localStorage.hasOwnProperty(key)
  },

  /**
   * Retrieve an object from local storage.
   *
   * @param {string} key
   * @return {any}
   */
  getItem(key) {
    const item = localStorage.getItem(key)

    if (typeof item !== "string") return item

    if (item === "undefined") return undefined

    if (item === "null") return null

    // Check for numbers and floats
    if (/^'-?\d{1,}?\.?\d{1,}'$/.test(item)) return Number(item)

    // Check for numbers in scientific notation
    if (/^'-?\d{1}\.\d+e\+\d{2}'$/.test(item)) return Number(item)

    // Check for serialized objects and arrays
    if (item[0] === "{" || item[0] === "[") return JSON.parse(item)

    return item
  },

  /**
   * Save some value to local storage.
   *
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  setItem(key, value) {
    if (typeof key !== "string") {
      throw new TypeError(
        `localStorage: Key must be a string. (reading '${key}')`
      )
    }

    if (typeof value === "object" || typeof value === "array") {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
  },

  /**
   * Remove element from local storage.
   *
   * @param {string} key
   * @return {void}
   */
  removeItem(key) {
    localStorage.removeItem(key)
  },
}
