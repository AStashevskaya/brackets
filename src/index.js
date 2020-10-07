module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '{', '[', '1', '3', '5']
  const closeBrackets = [')', '}', ']', '2', '4', '6']
  const stack = []
  bracketsConfig = bracketsConfig.toString().split(',')
  let strArr = [...str]
  const dividers = ['|', '7', '8']
  // const dividers = strArr.filter(el => el === '|')
  // if(dividers.length % 2) return false
  // strArr = strArr.filter(el => el !== '|')
  for (let i = 0; i < strArr.length; i++){
    if(!bracketsConfig.includes(strArr[i])) return false 
    if(openBrackets.includes(strArr[i])){
      stack.push(strArr[i])}
           // проверяем является ли элемент дивайдером и если да встречался ли он уже в стэке
    else if (dividers.includes(strArr[i])){
      let find = stack.find(el => el === strArr[i])
      if(!find){
        stack.push(strArr[i])
      } else {
        if(find === strArr[i] && stack.indexOf(find) === stack.length - 1){
          stack.pop()
        }else {
          return false
        }
      }
    } else if(closeBrackets.includes(strArr[i])){
      console.log(closeBrackets.indexOf(strArr[i]), openBrackets.indexOf(stack[stack.length - 1]) )
      if(closeBrackets.indexOf(strArr[i]) === openBrackets.indexOf(stack[stack.length - 1])){
        stack.pop()
      }
    }
  }
  if(!stack.length) return true 
  return false
}
