
// // find leap year and insert those year into the new array
// function findLeapYear(year) {
//   let is_leap_year = [];
//   for (let i = 0; i < year.length; i++) {
//     const isLeapYear = year[i];
//     if (
//       (isLeapYear % 4 === 0 && isLeapYear % 100 !== 0) ||
//       isLeapYear % 400 === 0
//     ) {
//       is_leap_year.push(isLeapYear);
//     }
//   }
//   return is_leap_year;
// }
// const years = [2023, 2024, 2025, 2028, 2030, 2040, 2012, 1900, 1800];
// const leap_year = findLeapYear(years);
// console.log("this year is a leap year : ", leap_year);

// // Output can be extracted from objects using four types of methods
// const mouse = {
//   name: "micky",
//   small: true,
// };

// const bird = {
//   name: "small",
//   mouse: mouse,
// };

// console.log("1st way to get name", mouse.name);
// console.log("2nd way to get name", mouse["name"]);
// console.log("3rd way to get name", bird.mouse.name);
// console.log("4th way to get name", bird["mouse"]["name"]);

// // five problem tasks given programming hero for increase my skill

// // Task number -1
// // write a code, which is find the small number in array.
// const num = [6414, 5624, 3743, 4343, 100, 7786, 78, 3434, 4545];

// let smallNum = num[0];

// for (let i of num) {
//   if (i < smallNum) {
//     smallNum = i;
//   }
// }
// console.log("the small number is ", smallNum);

// // Task number -2
// // Write a code and find the smallest number among the three numbers

// const num1 = 10;
// const num2 = 5;
// const num3 = 15;

// if (num1 < num2 && num1 < num3) {
//   console.log(num1, "is a smallest number");
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2, "is a smallest number");
// } else {
//   console.log(num3, "is a smallest number");
// }

// //  Task number -3
// // Write a function named exam_marks().and which take a parameter for the function.
// // then Take a number of arrays inside the parameter.and get the average number of total marks.

// function exam_marks(marks) {
//   let allMarks = 0;
//   let averageMark = 0;
//   for (let serialAllMark of marks) {
//     allMarks += serialAllMark;
//     averageMark = allMarks / marks.length;
//   }
//   return averageMark;
// }

// const totalMarks = [70, 66, 55, 90, 80, 77, 86, 91, 61, 95];
// const yourAverageMark = exam_marks(totalMarks);
// console.log("your average marks is", yourAverageMark);

// // problem 5
// // write a function and find the second largest number in an array.

// function getSecondLargestNum(num) {
//   let firstLargestNum = num[0]; // 75
//   let secondLargestNum = num[0]; // 74

//   for (const numIterate of num) {
//     if (numIterate > firstLargestNum) {
//       secondLargestNum = firstLargestNum;
//       firstLargestNum = numIterate;
//     } else {
//       if (numIterate > secondLargestNum && numIterate < firstLargestNum) {
//         secondLargestNum = numIterate;
//       }
//     }
//   }
//   return secondLargestNum;
// }

// const arrNumber = [31, 15, 73, 34, 70, 24, 79, 54, 18, 30, 60, 59, 80, 74];
// const result = getSecondLargestNum(arrNumber);
// console.log("second highest number :", result);


// //  get out duplicate name and added main name

// const friendsName = [
//   "shahadat",
//   "atik",
//   "bashar",
//   "kasem",
//   "sehab",
//   "masum",
//   "arif",
//   "atik",
//   "bashar",
//   "kasem",
//   "jannat",
//   "habiba",
// ];

// let unicName = [];
// for (let i = 0; i < friendsName.length; i++) {
//   const allfndName = friendsName[i];
//   if (unicName.includes(allfndName) === false) {
//     unicName.push(allfndName);
//   }
// }

// console.log(unicName);

// //
// let  notDivideNum =  []
// for (let i = 1; i <= 50; i++) {

//   const number = i;
//   if (number % 3 == 0 && number % 5 === 0) {
//     console.log("foobar");
//   }
//    else if (number % 3 === 0) {
//     console.log("foo. becasuse this number is ", number);
//   } 
//   else if (number % 5 === 0) {
//     console.log("bar");
//   }
  
//    else {
//     console.log(i,'this number are not divided by 3,4 and 5');
//   }
// }



// // if ticket numbers less than 100. per ticket price will be 100taka.
// // if ticket numbers more than 100 .but less than 200. first 100 tiket will be 100tk.
// // but res ticket will be 90 tk.
// // if tecket numbers more than 200 + .per ticket price will be 70 tk.

// /*
//      number of tikcet 100 --- 100tk
//      number of ticket 101 to 200 --- 90tk.
//      number of ticket 201 + --- 70tk
// */


// function ticketPrice(quantity) {
//      const per_100_Rate = 100;
//      const per101_200_ticket = 90;
//      const per_200_more_ticket = 70;

//      if (quantity <= 100) {
//          const  price =  quantity * per_100_Rate
//          return price;
//      } 
//      else if (quantity > 100  && quantity <= 200) {
//               const first100Price =  100 * per_100_Rate
//               const  resTicktetQuantity = quantity -100;
//               const resTicktetPrice = resTicktetQuantity * per101_200_ticket
//               const totalPrice =  first100Price + resTicktetPrice
//               return totalPrice;

//      } else if (quantity > 200) {
//         const first100Price =  100 * per_100_Rate
//         const second200Price =  100 * per101_200_ticket;

//         const restickectof200MoreQuanity = quantity - 200;
//         const restTicketPriceOf200More = restickectof200MoreQuanity * per_200_more_ticket;
//         const totalticktPrice = first100Price + second200Price + restTicketPriceOf200More
//         return totalticktPrice;
//      }
// }

// const allTicketPrice =  ticketPrice(210)
// console.log("Ticket price =",allTicketPrice);

