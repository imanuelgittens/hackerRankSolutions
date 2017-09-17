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

function timeConversion(s) {
    // Complete this function
    var result = '';
    var time = s.slice(0, s.length - 2);
    var timeArr = time.split(':');
    var hour = timeArr[0];
    var period = s.slice(s.length - 2);
    if(period === 'AM'){
      if(hour === '12'){
        hour = '00';
        timeArr[0] = hour.toString();
        result = timeArr.join(':');
      }else{
        result = time;
      }
    }else{
      if(hour === '12'){
        hour = '00';
      }
      var hourConverted = parseInt(hour) + 12;
      timeArr[0] = hourConverted.toString();
      result = timeArr.join(':');
    }
    return result;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
