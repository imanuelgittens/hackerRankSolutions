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

function migratoryBirds(n, ar) {
    // Complete this function
    var smallest = 0;
    var returnType = '';
    var birds = {
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0,
      type5: 0
    };
    var i;
    for(i = 0; i < n; i++){
      if(ar[i]=== 1){
        birds.type1++
      }else if(ar[i] === 2){
        birds.type2++;
      }else if(ar[i] === 3){
        birds.type3++;
        
      }else if(ar[i] === 4){
        birds.type4++;
        
      }else if(ar[i] === 5){
        birds.type5++;
      }
    }
    for(var bird in birds){
      if(birds[bird] > smallest){
        smallest = birds[bird];
        returnType = bird.slice(bird.length - 1);
      }
    }
    return parseInt(returnType);
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}
