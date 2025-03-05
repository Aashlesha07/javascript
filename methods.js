let arr = [1,2,3,4,5,6];

arr.forEach (function print (val){
    console.log(val);
})

//array function
arr.forEach ((val, index) => {
    console.log(val, index);
})

//map
arr.map((val) =>{
    console.log(val , "using map")
})
//map using return value
let mapfun = arr.map((val) =>{
    return val*val;
})
console.log(mapfun)

//filter
let filterarr = arr.filter((val) =>{
    return val%2 === 0;
})
console.log(filterarr);

//reduce
let reducefun = arr.reduce((prev , curr) =>{
    return prev + curr;
})
console.log(reducefun);
//max value
let maxvalue = arr.reduce((prev , curr) =>{
    return prev > curr ? prev : curr;
})
console.log(maxvalue);