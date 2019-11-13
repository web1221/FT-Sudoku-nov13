export function SudokuBox(cellArray){
  this.row = cellArray;
  this.col = cellArray;
}

SudokuBox.prototype.isNumber = function(){
  var rows = this.row;
  for (var i = 0; i<rows.length; i++){
    if (typeof rows[i] === "string"){
      return "not a number";
    }
  }
};

SudokuBox.prototype.validNumber = function(){
  var row = this.row;
  for (var i=0; i<row.length; i++){
    if ((row[i] > 9) || (row[i] < 0)){
      return "invalid number";
    }
  }
};

SudokuBox.prototype.noRepeats = function(propertyToTest){
  var row = propertyToTest;
  for(var i = 0; i<row.length; i++){
    for(var j = i+1; j<row.length; j++){
      if (row[i] === row[j]){
        return "no repeats";
      }
    }
  }
};

// SudokuBox.prototype.getCol = function(){
//   this.col = [];
// var col1Array = [];
// var col2Array = [];
// var col3Array = [];
// var col4Array = [];
// var col5Array = [];
// var col6Array = [];
// var col7Array = [];
// var col8Array = [];
// var col9Array = [];
//
// for(var i = 0; i < rowArray.length; i++){  //selecting correct array
//   console.log(rowArray[i]);
//   for(var j = 0; j < 1; j++ ){
//     col1Array.push(rowArray[i][0])
//     col2Array.push(rowArray[i][1])
//     col3Array.push(rowArray[i][2])
//     col4Array.push(rowArray[i][3])
//     col5Array.push(rowArray[i][4])
//     col6Array.push(rowArray[i][5])
//     col7Array.push(rowArray[i][6])
//     col8Array.push(rowArray[i][7])
//     col9Array.push(rowArray[i][8])
//   }
// }
// }
