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

function diagonalDiff(n, arr){
  var i;
  var j = n - 1;
  var primaryDiagonal = 0;
  var secondaryDiagonal = 0;
  for(i = 0; i < n; i++){
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][j];
    j--;
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
  
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var result = diagonalDiff(n, a);
    console.log(result);
}
