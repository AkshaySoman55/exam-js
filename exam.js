//id , brand , model , type , pricePerDay, available]
const carBooking =[

        [1,"Toyota", "Corolla" , "Sedan" ,50 ,10],
        [2,"Honda", "Civic" , "Sedan ",55 ,8],
        [3,"Ford","Mustang" , "SportsCar" ,80 ,5],
        [4,"Jeep", "Wrangler" , "SUV" ,70 ,7],
        [5,"Nissan", "Altima" , "Sedan",45,12]
];



//print all car brands
carBooking.forEach(item=>console.log(item[1]))
console.log(`--------------------------------`);

//print total no cars avilable
console.log(`total no cars avilable`);
no=carBooking.map(item=>item[5]).reduce((a1,b1)=>a1+b1)
console.log(no);
console.log(`--------------------------------`);


//print sedan car details
console.log(carBooking[1]);
console.log(`--------------------------------`);


//print cars with prize per day <60
carBooking.filter(item=>item[4]>60).forEach(cars=>console.log(cars[2]))
console.log(`--------------------------------`);

//print details of jeep wrangler
console.log(carBooking[3]);
console.log(`--------------------------------`);

//sort cars based on the decending order of the prize per day
carBooking.sort((a,b)=>b[4]-a[4]).forEach(cars=>console.log(cars[2]))
console.log(`--------------------------------`);

//sort cars based on ascending order of avilable cars
carBooking.sort((a,b)=>a[5]-b[5]).forEach(cars=>console.log(cars[2]))
console.log(`--------------------------------`);

//find the car with most avilablity
cars=carBooking.reduce((item1,item2)=>item1[5]>item2>[5]?item1:item2)
console.log(cars[2]);
console.log(`--------------------------------`);

//calcute the revenue if all the cars are rented for a day
console.log(`revenue if all the cars are rented for a day`);
revenue=carBooking.map(item=>item[4]).reduce((a1,b1)=>a1+b1)
console.log(revenue);
console.log(`--------------------------------`);

//count the numbere of sedan cars
console.log(`the number of sedan cars`);
car=carBooking.map(item=>item[5])
console.log(cars[5]);
console.log(`--------------------------------`);

//print all car brands
carBooking.forEach(item=>console.log(item[1]))
console.log(`--------------------------------`);

//find the total no of avilable cars
console.log(`total no of avilable cars`);
total=carBooking.map(item=>item[5]).reduce((a1,a2)=>a1+a2)
console.log(total);
console.log(`--------------------------------`);

//find the car with least avilablity
cars=carBooking.reduce((item1,item2)=>item1[5]<item2<[5]?item1:item2)
console.log(cars[2]);
console.log(`--------------------------------`);

//check if there is any car with a prize per day exactly 55
cars=carBooking.some(item=>item[4]=55)
console.log(cars?`yes`:`no`);
