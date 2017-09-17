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

function getRecord(s){
    // Complete this function
    var lowCount = 0, highCount = 0;
    var mostPoints = s[0];
    var leastPoints = s[0];
    for(i = 1; i < s.length; i++){ //start from 1 because we already set the 0 element.
      if(s[i] < leastPoints){
        leastPoints = s[i];
        lowCount++;
      }else if(s[i] > mostPoints){
        mostPoints = s[i];
        highCount++;
      }
    }
    
    return [highCount, lowCount];
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}
