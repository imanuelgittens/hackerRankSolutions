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

function plusMinus(n, arr){
    var pos = 0;
    var neg = 0;
    var zer = 0;
    var i;
    for(i = 0; i < n; i++){
        if(arr[i] > 0){
            pos++;
        }else if(arr[i] === 0){
            zer++;
        }else{
            neg++;
        }
    }
    var posResult = pos/n;
    var negResult = neg/n;
    var zeroResult = zer/n;
    
    return posResult + '\n' + negResult + '\n' + zeroResult;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = plusMinus(n, arr);
    process.stdout.write("" + result + "\n");
}
