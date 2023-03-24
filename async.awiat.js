// synchronous - one after another

// asynchronus - can happen at the same time


// sync
console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

console.log("------------------------------------------------");
// async
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},2000)

console.log("Ice Cream")


// callback

function One(param, arg1, arg2){
    // do something
}


function Two(arg){
    // do something
}

// function One() is a callback function
Two(One)




// Ice-cream shop

// Steps

// 1 place order
// 2 Cut fruit
// 3 Add water
// 4 Start machine
// 5 Select container
// 6 Select toppings
// 7 Serve Ice-cream


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],

    holder : ["cone", "cup", "stick"],

    toppings : ["chocolate", "peanuts"],

 };
