console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2!= 0)
        console.log(i);
    }
}
printOdds(10)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    const aboveSixteen = "Congrats ${username}, you can drive!";
    const belowSixteen = "Sorry ${userName}, but you need to wait until you're ${16 - age}";

    if (age < 16){
        console.log(belowSixteen);
    }else (age >=16);{
        console.log(aboveSixteen);
    }

}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
function findQuadrant(x, y){



    if(typeof x != "number"|| typeof y != "number"){
        console.log("Invalid input");
    }
//Origin Point
    if(x == 0 && y == 0){
        console.log("Origin Point");
    }
//Right Side
else if (x > 0){
    if (y > 0){
        console.log("Quadrant 1");
    }else if (y < 0){
        console.log("Quadrant 4");
    }else {
        console.log("X-axis")
    }
//Left Side
}else if (x < 0){
    if(y>0){
        console.log("Quadrant 2");
    }else if (y<0){
        console.log("Quadrant 3");
    }
 }    
    else if(y == 0){
        console.log("X-axis");
    }
    else if(x == 0){
        console.log("Y-axis");
    }

    return undefined;
}

let x = findQuadrant(3,3);

//Exercise 4
function triangle (side1, side2, side3) {
    if ( (side1 + side2) < side3 || side2 + side3 <side1 || side1 + side3 <side2 ) 
   console.log("Not a triangle")
   else if ( side1 === side3 && side2 === side3 )
   console.log("Equilateral Triangle") 
   else if ( (side1===side2) || (side2 === side3) || (side1 ===side3) )
   console.log("Isosceles triangle")
}
