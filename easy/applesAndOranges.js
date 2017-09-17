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

function applesAndOranges(s,t,a,b,m,n){
    var i, j;
    var applesOnHouse = 0;
    var orangesOnHouse = 0;
    var appleDistance = 0;
    var orangeDistance = 0;
    for(i = 0; i < m.length; i++){
        appleDistance = a + m[i];
        if(appleDistance >= s &&  appleDistance <= t){
            applesOnHouse++;
        }
    }
    
    for(j = 0; j < n.length; j++){
        orangeDistance = b + n[j];
        if(orangeDistance >= s &&  orangeDistance <= t){
            orangesOnHouse++;
        }
    }
    
    return applesOnHouse + '\n' + orangesOnHouse;
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    
    var applesOnHouse = apple.filter(function(apple) {
        return (a + apple >= s) && (a + apple <= t);
    });
 
    var orangesOnHouse = orange.filter(function(orange) {
        return (b + orange >= s) && (b + orange <= t);
    });
 
    console.log(applesOnHouse.length);
    console.log(orangesOnHouse.length);

}
