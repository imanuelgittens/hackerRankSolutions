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

function minMaxSum(arr){
  var n = arr.length;
  var i, j;
  var result = [];
  var temp = 0;
  for(i = 0; i < n; i++){
    for(j = 0; j < n;){
      if(j === i){
        j++;
      }else{
        temp += arr[j];
        j++;
      }
    }
    result.push(temp);
    temp = 0;
  }
  result.sort();
  return result[0] + ' ' + result[result.length - 1];
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = minMaxSum(arr);
    process.stdout.write("" + result + "\n");
}
