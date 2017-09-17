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

function solve(grades){
    // Complete this function
    var result = [];
    var i;
    for(i = 0; i < grades.length; i++){
      if(grades[i] < 38){
        result.push(grades[i]);
      }else{
        var temp = grades[i];
        while(temp%5 !== 0){
          temp++;
        }
        if(temp - grades[i] < 3){
          result.push(temp);
        }else{
          result.push(grades[i]);
        }
      }
    }
    return result;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
    


}
