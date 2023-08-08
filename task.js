// problem number - 5 
// write a function which is return only positive value form an array until cannot getting a first negative value.If gets negative value then loop will stop.
function onlyPositive(positive) {
    let positiveNum = []
    for (let i = 0; i < positive.length; i++) {
        const element = positive[i];
        if (element < 0) {
              break
        }else if (element > 0) {
            positiveNum.push(element)
        }
    }
       return positiveNum
}
const arrayNum = [10,20,3,40,25,15,-10,30,12,18]
const positiveValue = onlyPositive(arrayNum)
console.log("only positive number is =",positiveValue);


// problem number 4
// write a function named bestfriend and return a biggest best friend name form an array.

function bestFriend(name) {
    let myBestFriendName = name[0]
    for (let i = 1; i < name.length; i++) {
        const myFriend = name[i];
        if (myFriend.length > myBestFriendName.length) {
              myBestFriendName = myFriend
        }
    }
    return myBestFriendName
}

const friendName = ['arif','shahadat','masum','healal uddin','Md Rayhan reza','abul bashar','aubl kashem']
const myBestFriend = bestFriend(friendName)
console.log("My best friend name is =",myBestFriend);


// problem number 3 
// write a Function which named paperRequirement.it's taken three parameter first one is how much copy needed of book1.and second and third one is like first one but the different is books name like(book2 , book3).
// Req-1 -- 100 pages needed for creating book1
// Req-1 -- 200 pages needed for creating book2
// Req-1 -- 300 pages needed for creating book3

function paperRequirement(book1,book2,book3) {
    const book1PagesNeed = 100 * book1;
    const book2PagesNeed = 200 * book2;
    const book3PagesNeed = 300 * book3;
    const totalBookPagesNeed = book1PagesNeed + book2PagesNeed + book3PagesNeed;
    return totalBookPagesNeed;
}
const bookNeed = paperRequirement(3,2,5)
console.log("total pages need for three books =",bookNeed)

// problem number 2
// write a function which name is centimeterToMeter . it's taken one parameter,whice name is centimeter

function centimeterToMeter(centimeter) {
    const  toMeter  = 0.01
    const  meter = centimeter * toMeter
    return meter
}
const centimeter = 1000
const meterResult =  centimeterToMeter(centimeter)
console.log(centimeter, "centimeter =",meterResult, "meter");

// problem number 1 
// // write a function which name is feetToInch . it's taken one parameter,whice name is feet

function feetToInch(feet) {
    const inch= 12
    const inches = feet * inch;
    return inches
}

const feet = 10;
const feetResult = feetToInch(feet)
console.log(feet , feet == 1 ? "foot =":"feet =", feetResult,"inches");