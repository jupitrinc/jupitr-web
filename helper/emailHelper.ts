export const emailHelper = {
  isEmailValid: (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(value)
  },
}
