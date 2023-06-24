export const numberHelper = {
  formatLargeNumber: (num: number) => {
    const length = num.toString().length
    let number = num.toString()

    if (length == 4) {
      return number.charAt(0) + "k" //2000
    } else if (length == 5) {
      return number.substring(0, 2) + "k" //12000
    } else if (length == 6) {
      return number.substring(0, 3) + "k" //120000
    } else if (length == 7) {
      return number.substring(0, 1) + "m" //1,200,000
    } else if (length == 8) {
      return number.substring(0, 2) + "m" //12,200,000
    } else if (length == 9) {
      return number.substring(0, 3) + "m" //121,200,000
    } else {
      return number
    }
  },

  formatNumber: (num: number) => {
    return num.toLocaleString("en-GB")
  },
}
