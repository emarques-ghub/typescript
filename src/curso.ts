console.log("Hello World! A TypeScript course...");

var scope = "global"; 
function checkscope() {
    var scope = "local"; 
    return scope;
}

console.log("valor: " + checkscope());