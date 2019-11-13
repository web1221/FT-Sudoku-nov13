import { SudokuBox } from './../src/sudoku.js';

describe('SudokuBox', () => {

  test('should check if any numbers are  strings', () => {
    var row = new SudokuBox([1,2,"3",4,5,6,7,8,9])
    expect(row.isNumber()).toEqual("not a number");
  });
  test('should check if any numbers are valid', () => {
    var row = new SudokuBox([1,2,13,4,-5,6,7,8,9])
    expect(row.validNumber()).toEqual("invalid number");
  });
  test('should check if any row numbers repeat', () => {
    var box = new SudokuBox([9,9,9,9,9,9,9,9,9])
    expect(box.noRepeats(box.row)).toEqual("no repeats");
  });
});
