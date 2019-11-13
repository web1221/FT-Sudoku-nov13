import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { SudokuBox } from './sudoku.js';

$(document).ready(function(){
  $('form#sudoku').submit(function(event){
    event.preventDefault();
    let row1Array = [];
    let row2Array = [];
    let row3Array = [];
    let row4Array = [];
    let row5Array = [];
    let row6Array = [];
    let row7Array = [];
    let row8Array = [];
    let row9Array = [];

    let col1Array = [];
    let col2Array = [];
    let col3Array = [];
    let col4Array = [];
    let col5Array = [];
    let col6Array = [];
    let col7Array = [];
    let col8Array = [];
    let col9Array = [];

    var cellValue;
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
    // var newSudoku = new SudokuBox(rowArray)


  });
});
