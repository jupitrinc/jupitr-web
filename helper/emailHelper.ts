export const emailHelper = {
  isEmailValid: (value: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true
    } else {
      return false
    }
  },
}
