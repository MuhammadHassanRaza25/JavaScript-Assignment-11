// Task 1
document.write(`<br> <br>`)
document.write(`<h1>Task 1: Full Name</h1>`)

var userName1 = prompt('Task 1','Enter Your First Name')
var userName2 = prompt('Task 1','Enter Your Last Name')
let fullName = userName1+' '+userName2
document.write(`<h3>👋🏻 Welcome ${fullName}</h3>`)


// Task 2
document.write(`<br> <br>`)
document.write(`<h1>Task 2: Length Of String</h1>`)

let userMobile = prompt('Task 2','Enter Your Favorite Mobile Phone Model')
let userMobilelength = userMobile.length
document.write(`<h3>My Favorite Phone Is: ${userMobile}</h3>`)
document.write(`<h3>Length Of String: ${userMobilelength}</h3>`)


// Task 3
document.write(`<br> <br>`)
document.write(`<h1>Task 3: Find The Index Of Letter</h1>`)

var letter = 'Pakistani'
document.write(`<h3>Word:${letter} </h3>`)

var findIndex = letter.indexOf('n')
document.write(`<h3>Index Of 'n': ${findIndex}</h3>`)


//Task 4
document.write(`<br> <br>`)
document.write(`<h1>Task 4: Find The Last Index Of Letter</h1>`)

var letter2 = 'Hello World'
document.write(`<h3>Word: ${letter2} </h3>`)

var findIndex2 = letter2.lastIndexOf('l')
document.write(`<h3>Last Index Of 'l': ${findIndex2}</h3>`)


//Task 5
document.write(`<br> <br>`)
document.write(`<h1>Task 5: Find The Character</h1>`)

var char = 'Pakistani'
document.write(`<h3>String: ${char} </h3>`)

var findChar = char.charAt(3)
document.write(`<h3>Char At Index 3: ${findChar} </h3>`)


// Task 6
document.write(`<br> <br>`)
document.write(`<h1>Task 6: Repeat Q1 Using String concat() Method</h1>`)

var repeat1 = 'Muhammad '
var repeat2 = 'Hassan Raza'

let concat = repeat1.concat(repeat2)
document.write(`<h3>${concat}</h3>`)


// Task 7
document.write(`<br> <br>`)
document.write(`<h1>Task 7: Repalce</h1>`)

var city = 'Hyderabad'
document.write(`<h3>City: ${city}</h3>`)

var repalceCity = city.replace('Hyder','Islam')
document.write(`<h3>After Replacement: ${repalceCity}</h3>`)


// Task 8
document.write(`<br> <br>`)
document.write(`<h1>Task 8: Repalce 'and 'to '&'</h1>`)

var message = 'Ali and Sami are best friends. They play cricket and football together'
document.write(`<h3>Message: ${message}</h3>`)

var messageReplace = message.replace(/and/g,'&')
document.write(`<h3>Message After Replacement: ${messageReplace}</h3>`)


// Task 9
document.write(`<br> <br>`)
document.write(`<h1>Task 9: Convert String To Number</h1>`)

let num = '472'
document.write(`<h3>Value: ${num}</h3>`)
document.write(`<h3>Type: ${typeof(num)}</h3>`)

let convert = Number(num)
document.write(`<h3>Value: ${convert}</h3>`)
document.write(`<h3>Type: ${typeof(convert)}</h3>`)


// Task 10
document.write(`<br> <br>`)
document.write(`<h1>Task 10: Convert To Capital Case</h1>`)

var t10 = prompt('Task 10: Convert To Capital Case','Enter Dry Fruits Name')
document.write(`<h3>User Input: ${t10}</h3>`)

var capitalT10 = t10.toUpperCase()
document.write(`<h3>Upper Case: ${capitalT10}</h3>`)


// Task 11
document.write(`<br> <br>`)
document.write(`<h1>Task 11: Convert Into Title Case</h1>`)

var t11 = prompt('Task 11: Convert Into Title Case','Enter Fruits Name')
document.write(`<h3>User Input: ${t11}</h3>`)

var firstChar = t11.slice(0,1).toUpperCase()
var otherChar = t11.slice(1).toLowerCase()
var fullChar = firstChar+otherChar
document.write(`<h3>Title Case: ${fullChar}</h3>`)


// Task 12
document.write(`<br> <br>`)
document.write(`<h1>Task 11: Convert Number To String</h1>`)

let number = 35.36
document.write(`<h3>Number: ${number}</h3>`)

let conVert = number.toString()
document.write(`<h3>String: ${conVert}</h3>`)


// Task 13
document.write(`<br> <br>`)
document.write(`<h1>Task 13: Valid Username </h1>`)

var valid = prompt('Task 13: Valid username','Enter Username')
if(valid == ',' || '.' || '@' || '!'){
    alert('❗ Please Enter a Valid username')
}


// Task 14
document.write(`<br> <br>`)
document.write(`<h1>Task 14: Bakery Items</h1>`)

let user_search = prompt("🎉 Welcome to our bakery. What do you want to order sir/ma'am? ").toLowerCase()
let items = ['cake','apple pie','cookie','chips','patties']


for (let i = 0; i < items.length; i++) {
    if(user_search == items[i]){
        alert(`${items[i]} is available at index ${i} in our bakery`)
    }
}


// Task 15
document.write(`<br> <br>`)
document.write(`<h1>Task 15: Password</h1>`)

let passWord = prompt('Task 15: Password','Enter a Password')
if(passWord.length>=6){
    alert(`Password Entered: ${passWord} ✅`)
    document.write(`<h3>Password Entered: ${passWord} ✅</h3>`)
}
else{
    alert('It must at least 6 characters long')
}


// Task 16
document.write(`<br> <br>`)
document.write(`<h1>Task 16: Convert String To Array</h1>`)

var university = 'University of Karachi'
var convertArr = university.split()
document.write(convertArr)
console.log(convertArr);


// Task 17
document.write(`<br> <br>`)
document.write(`<h1>Task 17: Display Last Character</h1>`)


var userName = 'Pakistan'
document.write('User Input:'+ ' '+userName, '<br>')
document.write('Last Character:'+' '+userName.charAt(userName.length-1))
