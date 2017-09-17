function processData(input) {
    //Enter your code here
    var InArr = input.split(/[\n']/)
    var total = InArr[0], power = InArr[1];
    var result = powerSum(total, power, 1);
    process.stdout.write("" + result + "\n");
} 

function powerSum(total, power, n){
      var value = total - (Math.pow(n, power));
      //termination condition
      if(value < 0){
        return 0;
      }
      //base condition
      else if(value === 0){
        return 1;
      //recursive condition
      }else{
        return powerSum(value, power, n+1) + powerSum(total, power, n+1);
      }
    }

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
