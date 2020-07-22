var shell = require("shelljs");

var message
process.argv.forEach(function(val, index, array){
        message = val
})

shell.exec("gitbook build ./ ./docs")
console.log("gitbook build")

shell.exec("git add .")
console.log("git add all")

shell.exec("git commit -m "+message)
console.log("git commit")

shell.exec("git push github master")
console.log("git push")