process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function simpleArraySum(n, ar) {
    // Complete this function
    var i;
    var res = 0;
    for(i = 0; i < n; i++){
        res += ar[i];
    }
    return res;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}
