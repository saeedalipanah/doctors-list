export const OECValidation = (enteredValue) => {
  //Only English Characters Validation 
  return /^[A-Za-z\s]+$/.test(enteredValue)
}

export const emailValidation = (enteredValue) => {
  //email Validation 
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredValue)
}