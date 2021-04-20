class Addition {
    static add(a,b) {
    let c=a+b;
    return c;
}
multiply(a,b) {
    let c=a*b;
    return c;
}
}
let c=Addition.add(10,20)
console.log(c)
let add=new Addition();
let result=add.multiply(20,9)
console.log(result)

