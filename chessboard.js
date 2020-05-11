/* 

Chessboard


When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.


 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #


*/



let size = 8;
let chessboard = "";

//newline character for new row
for(let i=0; i<size; i++){
    //print out values at each column
    for(let j=0; j<size; j++){
        if((i+j)%2==0){
            chessboard = chessboard + " "
        }
        else{
            chessboard = chessboard + "#";
        }  
    }
    chessboard = chessboard + "\n";
}

console.log(chessboard);

