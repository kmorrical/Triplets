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

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    
    var aliceScore = 0
    var bobScore = 0
    
    if (a0 > b0) {
        aliceScore +=1;
    }
    else if (b0 > a0) {
        bobScore += 1;
    }
    else {
        bobScore += 0;
        aliceScore += 0;
    }
    
    //console.log(aliceScore);
    //console.log(bobScore);
    
    if (a1 > b1) {
        aliceScore +=1;
    }
    else if (b1>a1) {
        bobScore += 1;
    }
    else {
        bobScore += 0;
        aliceScore += 0;
    }
   //console.log(aliceScore);
    //console.log(bobScore);
    
    if (a2>b2){
        aliceScore +=1;
    }
    else if (b2>a2) {
        bobScore += 1;
    }
    else {
        bobScore += 0;
        aliceScore += 0;
    }
    
    //console.log(aliceScore);
    //console.log(bobScore);
    
    var aScore = aliceScore.toString();
    var bScore = bobScore.toString();
    console.log(aliceScore + " " + bobScore);
    
}
