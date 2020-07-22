var pro = require('child_process');
var message
process.argv.forEach(function(val, index, array){
        message = val
})
pro.exec("gitbook build ./ ./docs", function (error, stdout, stderr) {
        console.log('gitbook build success');
    });

pro.exec("git add .", function (error, stdout, stderr) {
        console.log('git add all');
    });

pro.exec("git commit -m "+message, function (error, stdout, stderr) {
        console.log('git commit '+message);
    });

pro.exec("git push github master", function (error, stdout, stderr) {
        console.log('git push success');
    });

