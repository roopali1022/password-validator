function validatePassword(password) {
  if (password.length < 8) {
    return false
  }
  return checkLowerCaseLetter(password) && checkUpperCaseLetter(password) && checkNumber(password) && checkSymbol(password)
}
function checkLowerCaseLetter(password) {
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  return password.split('').some(element => letters.includes(element))
}
function checkUpperCaseLetter(password) {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return password.split('').some(element => letters.includes(element))
}
function checkNumber(password) {
  var numbers = '0123456789'
  return password.split('').some(element => numbers.includes(element))
}
function checkSymbol(password) {
  var symbols = '!@#$%^&*'
  return password.split('').some(element => symbols.includes(element))
}
module.exports = validatePassword