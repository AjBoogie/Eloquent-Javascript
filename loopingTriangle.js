/*

Eloquent Javascript: Chapter 2, Excercise "Looping a Triangle"

Write a loop that makes seven calls to console.log to output the following triangle: 

#
##
###
####
#####
######
#######
            
            
 */



var counter = 0;
var output = "#";
while (counter < 7) {
  console.log(output);
  output = output + "#";
  counter++;
}