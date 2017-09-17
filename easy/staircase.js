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

function stairCase(n){
  var i,j, k;
  var result = '';
  for(i = n - 1; i >= 0; i--){
    for(j = 0; j < i; j++){
      result += ' '
    }
    for(k = 0; k < n-i; k++){
      result += '#';
    }
    result += '\n';
  }
  
  return result;
}

function main() {
    var n = parseInt(readLine());
    var result = stairCase(n);
    process.stdout.write("" + result + "\n");
}
