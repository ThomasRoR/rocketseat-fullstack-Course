function seNoiFica(a) {
    let result;
    if (a >= 18) {
        result = "ta safe";
        console.log("Maior de idade");
    } else {
        result = "da caquita";
        console.log("Menor de idade");
    }
    return result;
}
console.log(seNoiFica(17));

let showMessage = function() {
    return "Hello, World!";
}

console.log(showMessage());

let xsqdl = () => "Arrow function here!";
console.log(xsqdl());

let xesqdl = (e) =>  { return e + " ,lol"; }

console.log(xesqdl('ce e nenem'));///

function execute(task, callback) {
    console.log("Starting task..." , task);
    callback();
}

function callback(){
    console.log("Task completed!");
}
execute('1', callback)

execute('2', function(){
    console.log("Anonymous task completed!");
});

execute('3', () => {
    console.log("Arrow function task completed!");
});

