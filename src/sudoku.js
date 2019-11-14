export function SudokuBox(cellArray){
  this.row = cellArray;
}

SudokuBox.prototype.isNumber = function(){
  var rows = this.row;
  for (var i = 0; i<rows.length; i++){
    if (typeof rows[i] === "string"){
      // return "not a number";
      return false;
    }
  }
  return true;
};

SudokuBox.prototype.validNumber = function(){
  var row = this.row;
  for (var i=0; i<row.length; i++){
    if ((row[i] > 9) || (row[i] < 0)){
      // return "invalid number";
      return false;
    }
  }
  return true;
};

SudokuBox.prototype.noRepeats = function(){
  var row = this.row;
  for(var i = 0; i<row.length; i++){
    for(var j = i+1; j<row.length; j++){
      if (row[i] === row[j]){
        // return "no repeats";
        return false;
      }
    }
  }
  return true;
};
