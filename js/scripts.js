$(document).ready(function () {
  $('form#new-triangle').submit(function(event) {
    event.preventDefault();

    var inputSideA = parseInt($('input#new-side-a').val());
    var inputSideB = parseInt($('input#new-side-b').val());
    var inputSideC = parseInt($('input#new-side-c').val());
    debugger;

    var newTriangle = {   sideA: inputSideA,
                          sideB: inputSideB,
                          sideC: inputSideC,
                          type: function() {
                            if (isNaN(this.sideA) || isNaN(this.sideB) || isNaN(this.sideC)) {
                              return "Please enter a set of three numbers";
                            } else if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
                              return "This is not a triangle";
                            } else if (this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideB + this.sideC < this.sideA) {
                              return "This is not a triangle";
                            } else if (this.sideA === this.sideB && this.sideA === this.sideC) {
                              return "equilateral";
                            } else if ((this.sideA === this.sideB) && (this.sideA !== this.sideC) || (this.sideA === this.sideC) && (this.sideA !== this.sideB) || (this.sideB === this.sideC && sideB !== this.sideA)) {
                              return "isoceles";
                            } else {
                              return "scalene";
                            }
                          }
                        };
                            // debugger;

    if (newTriangle.type() === 'equilateral') {
        $("ul#equilaterals").append("<li><span class='equilateral'>" +
        newTriangle.sideA + ' ' + newTriangle.sideB + ' ' + newTriangle.sideC +"</span></li>");
      } else if (newTriangle.type() === 'isoceles') {
        $("ul#isosceles").append("<li><span class='isosceles'>" +
        newTriangle.sideA + ' ' + newTriangle.sideB + ' ' + newTriangle.sideC +"</span></li>");
      } else if (newTriangle.type() === 'scalene') {
        $("ul#scalenes").append("<li><span class='scalene'>" +
        newTriangle.sideA + ' ' + newTriangle.sideB + ' ' + newTriangle.sideC +"</span></li>");
      } else if (newTriangle.type() === 'Please enter a set of three numbers') {
        alert("Please enter a set of three numbers");
      } else {
        alert("That is not a triangle");
      }

    $('input#new-side-a').val('');
    $('input#new-side-b').val('');
    $('input#new-side-c').val('');


  });
});
