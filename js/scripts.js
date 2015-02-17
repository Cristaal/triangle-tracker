$(document).ready(function () {
  $('form#new-triangle').submit(function(event) {
    event.preventDefault();

    var input_sideA = parseInt($('input#new_side_a').val());
    var input_sideB = parseInt($('input#new_side_b').val());
    var input_sideC = parseInt($('input#new_side_c').val());

    var newTriangle = {   sideA: input_sideA,
                          sideB: input_sideB,
                          sideC: input_sideC,
                          type: function() {
                            if (this.sideA + this.sideB < this.sideC || this.sideA + this.sideC < this.sideB || this.sideB + this.sideC < this.sideA) {
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
      } else if (newTriangle.type() === 'isoceles'){
        $("ul#isosceles").append("<li><span class='isosceles'>" +
        newTriangle.sideA + ' ' + newTriangle.sideB + ' ' + newTriangle.sideC +"</span></li>");
      } else if (newTriangle.type() === 'scalene'){
        $("ul#scalenes").append("<li><span class='scalene'>" +
        newTriangle.sideA + ' ' + newTriangle.sideB + ' ' + newTriangle.sideC +"</span></li>");
      } 

    $('input#new_side_a').val('');
    $('input#new_side_b').val('');
    $('input#new_side_c').val('');


  });
});
