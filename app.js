//  CHP # 13 to 15

// var stdNames = []
// console.log(stdNames)

// var stdNames = new Array()
// console.log(stdNames)

// var arr = ["latif"]
// document.write(arr)

// var arr = [10]
// document.write(arr)


// for (var i = 0; i <= 10; i++){
// document.write("Hello World" + "<br>")
// }

// var stdArr = ["latif", "khalid", "javed", "nadeem", "asad", "akbar", 1, 2, 3, 4, 5,]
// for (var i = 0; i <=stdArr.length; i++)
// {
//     document.write(stdArr + "<br>")
// }

// var qual = ["<br> SSC", "<br> HSC", "<br> BCS", "<br> BS", "<br> BCOM", "<br> MS", "<br> M. Phil.", "<br> PhD"]
// {document.write( "<h1>Qualificaton</h1>" + qual)}

// var stdArr = ["Micheal", "John", "Tony"]
// var score = [320, 230, 480]
// var marks = [500]
// var percent1 = [score[0]*100/marks]
// var percent2 = [score[1]*100/marks]
// var percent3 = [score[2]*100/marks]
// document.write("score of" + " " + stdArr[0] + " " + "is" + " " + score[0] + "." + " " + "Percentage:" + percent1 + "%")
// document.write("<br>")
// document.write("score of" + " " + stdArr[1] + " " + "is" + " " + score[1] + "." + " " + "Percentage:" + percent2 + "%")
// document.write("<br>")
// document.write("score of" + " " + stdArr[2] + " " + "is" + " " + score[2] + "." + " " + "Percentage:" + percent3 + "%")


// var color = ["red", "blue", "black", "yellow", "white"]
// document.write("<h1>" + "COLOR:" + "<br>" + color + "</h1>")

// var addBeg= prompt("Add color in begining")
// color.unshift(addBeg)
// document.write("<h1>" + "ADD COLOR:" + "<br>" + color + "</h1>")

// var addEnd= prompt("Add color in End")
// color.push(addEnd)
// document.write("<h1>" + "ADD COLOR:" + "<br>" + color + "</h1>")

// var addBeg1= prompt("Add first color in begining")
// var addBeg2= prompt("Add second color in begining")
// color.unshift(addBeg1 + "," + addBeg2)
// document.write("<h1>" + "ADD COLOR:" + "<br>" + color + "</h1>")

// color.shift(0)
// document.write(color)

// color.pop(0)
// document.write(color)

// var indNum= prompt("Add index number to add")
// var lengthNum= prompt("Add length number to add")
// var colorName = prompt("Add color Names with comma")
// color.splice(indNum, lengthNum, colorName)
// document.write("<h1>" + "ADD COLOR:" + "<br>" + color + "</h1>")


// var indNum= prompt("Add index number to remove color")
// var lengthNum= prompt("Add length number to remove colors")
// color.splice(indNum, lengthNum,)
// document.write("<h1>" + "REMOVE COLORS:" + "<br>" + color + "</h1>")

// var score = [320, 230, 480, 120]
// document.write(score.sort())

// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"]
// document.write(cities)
// document.write("<br>")
// var copyArr = cities.slice(2,4)
// document.write(copyArr)

// var arr = ["This","is","my","cat"]
// document.write("<h1> Array: </h1>" + "<br>" + arr)
// document.write("<br>")
// document.write("<h1> string: </h1>")
// document.write("<br>")
// document.write(arr.join(" "))

// var arr = []
// document.write("<h1> Devices </h1>")
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("moniter")
// document.write(arr)
// document.write("<h1> Out </h1>" + arr[0])
// document.write("<h1> Out </h1>" + arr[1])
// document.write("<h1> Out </h1>" + arr[2])
// document.write("<h1> Out </h1>" + arr[3])

// var arr = []
// document.write("<h1> Devices </h1>")
// arr.push("keyboard")
// arr.push("mouse")
// arr.push("printer")
// arr.push("moniter")
// document.write(arr)
// document.write("<h1> Out </h1>" + arr[3])
// document.write("<h1> Out </h1>" + arr[2])
// document.write("<h1> Out </h1>" + arr[1])
// document.write("<h1> Out </h1>" + arr[0])



// var select = document.getElementById("arr");
// var elmts = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// // Main function
// function GFG_Fun() {
//     for (var i = 0; i < elmts.length; i++) {
//         var optn = elmts[i];
//         var el = document.createElement("option");
//         el.textContent = optn;
//         el.value = optn;
//         select.appendChild(el);
//     }
//     down.innerHTML = "Elements Added";
// }


// CHP # 17-20

// var activities = [[]]

// var activities = [
//     [1,2,3],

//     [0,1,2],

//     [1,0,1],
// ];
// console.table(activities)

// for(i=1; i <= 10; i++)
// document.write(i)

// var table = +prompt("Enter a number to show its multiplication table")
// var tablelength = +prompt("Enter length multiplication table")
// for (var i = 1; i <= tablelength; i++) {
//     document.write(table + " x" + " " + i + " " + " = " + " " + table * i + "<br />")

// }

// var table = (2)
// for (var i = 1; i <= 15; i++){
//     document.write(table + " x" + " " + i + " " + " = " + " " + table * i + "<br />")
// }

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " " + fruits[i], "<br >")
// }


// for (var i=1; i<=15; i++)
// document.write(i + ",")

// for (var i=10; i>1; i--)
// document.write(i + ",")
    

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(i + ",")
//     }
// }


// for (var i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i + ",")
//     }
// }

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
// document.write(i + "k" + "," )}
//     }

// var bakeryItem = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt("Welcome to ABC bakery.What do you want to order Sir/Ma'am")
// var isMatch = false
// for (var i = 0; i < bakeryItem.length; i++) {
//     if (bakeryItem[i] === userInput) {
//         isMatch = true
//         document.write(userInput + " " + "is avaiable at index " + i + " in our bakery <br />")
//         break;
//     }
// }
// if (isMatch === false) {
//     document.write("We are sorry. " + userInput + " is not available in our bakery")
// }


// var num = [24, 53, 78, 91, 12,]
// var temp = 0
// for (var i = 0; i < num.length; i++) {
//     if (temp < num[i]) {
//         temp = num[i]
//     }
// }
// document.write("The largest number is ", temp)


// var num = [24, 53, 78, 91, 12,]
// var temp = num[0]
// for (var i = 0; i < num.length; i++) {
//     if (temp > num[i]) {
//         temp = num[i]
//     }
// }
// document.write("The smallest number is ", temp)


// var table = (5)
// for (var i = 1; i <= 20; i++){
//     document.write(table * i + "\n")
// }
