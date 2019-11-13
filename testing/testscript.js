function SudokuBox(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9){
  this.row = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9],
  this.column = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
}

// SudokuBox.prototype.noRepeats = function(){
//   var row = this.row;
//   // var column = this.column;
//
//   for(var i = 0; i<row.length; i++){
//     console.log("FirstLoop:", row[i]);
//
//     for(var j = i+1; j<row.length; j++){
//       console.log("Second Loop: ", row[j]);
//       console.log(row[i] === row[j]);
//       if (row[i] === row[j]){
//         return "HEY NOW";
//       }
//     }
//   }
// };
// SudokuBox.prototype.validNumber = function(){
//   var row = this.row;
//   for (var i=0; i<row.length; i++){
//     if ((row[i] > 9) || (row[i] < 0)){
//       return "invalid number";
//     }
//   }
// };
//
// var newBox = new SudokuBox(1,2,3,4,4,6,7,8,9)
// var newBox = new SudokuBox(1,2,3,4,4,6,7,8,9)
// var newBox = new SudokuBox(1,2,3,4,4,6,7,8,9)
// var newBox = new SudokuBox(1,2,3,4,4,6,7,8,9)
// newBox.noRepeats();
// newBox.validNumber()
//
//
// boxobject (row1 2 3 4 5 6 7 8 9 eeathsjkhakjg){
//   this.row = row 1
//   this.row = row 2
//   this.row = row 3
//   this.row = row 4
//   this.row = row 5
// this.row = row 6
//   this.row = row 7
//   this.row = row 8
//   this.row = row 9
// etcccc
//   this.col =  1
//   this.col =  2
//   this.col =  3
//   this.col =  4
//   this.col =  5
//   this.col =  6
//   this.col =  7
//   this.col =  8
//   this.col =  9
// }
//
// segment (cell1, cell1 cell1 cell1 cell1 cell1 cell1 cell1 cell1 ){
//
//
// }


$(document).ready(function(){
  $('form#sudoku').submit(function(event){
    event.preventDefault();
    var row1Array = [];
    var row2Array = [];
    var row3Array = [];
    var row4Array = [];
    var row5Array = [];
    var row6Array = [];
    var row7Array = [];
    var row8Array = [];
    var row9Array = [];

      // for (j = 0; j <= 9; j++){  //populate each row array
      //   var currentCell = parseInt($("input.row1").val());
      //   row1Array.push(currentCell);
      // }

    let row1 = new SudokuBox(row1Array);

    var cellValue
    for(var i = 0; i <= 80; i++){
      if(i <= 8){
        cellValue = parseInt($('input#cell-'+ i).val());
        row1Array.push(cellValue);
    } else if(i <= 17 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row2Array.push(cellValue);
    } else if(i <= 26 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row3Array.push(cellValue);
    } else if(i <= 35 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row4Array.push(cellValue);
    } else if(i <= 44 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row5Array.push(cellValue);
    } else if(i <= 53 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row6Array.push(cellValue);
    } else if(i <= 62 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row7Array.push(cellValue);
    } else if(i <= 71 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row8Array.push(cellValue);
    } else if(i <= 80 ){
        cellValue = parseInt($('input#cell-'+ i).val());
        row9Array.push(cellValue);
    }
  }

  let rowArray = [row1Array, row2Array, row3Array, row4Array, row5Array, row6Array, row7Array, row8Array, row9Array];
  console.log(rowArray);

  var col1Array = [];
  var col2Array = [];
  var col3Array = [];
  var col4Array = [];
  var col5Array = [];
  var col6Array = [];
  var col7Array = [];
  var col8Array = [];
  var col9Array = [];

  for(var i = 0; i < rowArray.length; i++){  //selecting correct array
    console.log(rowArray[i]);
    for(var j = 0; j < 1; j++ ){
      col1Array.push(rowArray[i][0])
      col2Array.push(rowArray[i][1])
      col3Array.push(rowArray[i][2])
      col4Array.push(rowArray[i][3])
      col5Array.push(rowArray[i][4])
      col6Array.push(rowArray[i][5])
      col7Array.push(rowArray[i][6])
      col8Array.push(rowArray[i][7])
      col9Array.push(rowArray[i][8])
    }
  }

let colArray = [col1Array, col2Array, col3Array, col4Array, col5Array, col6Array, col7Array, col8Array, col9Array];
  console.log(colArray);

  });
});
