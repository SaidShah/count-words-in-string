
var fs = require('fs');
var array = fs.readFileSync('myText.txt').toString().replace(/[.,"\n]/g,"").replace(/\?/g," ")
let stringArr = array.split(" ")
let words = {}
for(let i = 0;i<stringArr.length;i++){
	if(words[stringArr[i]]){
		let counter = words[stringArr[i]]
		counter++
		words[stringArr[i]]=counter
	}else{
		words[stringArr[i]]=1
	}
}
let newArr = []
for(let key in words){
	newArr.push({word: key, counter: words[key]})
}

let sortedList = function(givenArr){
	return givenArr.sort((a,b)=>{return b.counter - a.counter})
}

console.log(sortedList(newArr))
