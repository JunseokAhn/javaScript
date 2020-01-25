var age = 20
console.log(age)
alert("첫번째 경고")
var age = 'wow'
console.log(age)
alert("두번째 경고")

/*
 * 일항연산자 typeof 이항연산자 +-* / % 삼항연산자 (10>20)? alert("크다") : alert("작다")
 */

var a = 10
var b = 20
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

var c = "문자"
console.log(c + a)
console.log(b + c)
console.log(c + "열")
var a = 10
var b = '2'
console.log(a + b)// 102, string형식
console.log(a * b) // 자동형변환
b = '2a'
console.log(a * b) // not a Number NaN

var a = 10
var b = "10"
console.log(a == b)
console.log(a === b)
var c = 20
var d = "20"
console.log(c != d)
console.log(c !== d)
var a = 10
var b = 20;
(a > b) ? alert("크다") : alert("크지않다")
var str = "i have a dream!"
console.log(str[2])
str[0] = 'I' //안바뀌고 에러도 안난다
