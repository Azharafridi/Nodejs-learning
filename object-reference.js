const obj1 = {
    name : "Bruce Wayne",
};

const obj2 = obj1;

obj2.name = "clark kent";

console.log(obj1);
// the above will obj2 will affact the obj1..

// using this way will not affect one obj by the other obj let's see
const obj3 = {
    name : "azhar",
}

let obj4 = obj3;
obj4 = "hamza ali";

console.log(obj3);