
var roman = function(number) {
  if(number > 3999) {
    return false
  }
  var romanConversions = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  var romanized = "";
  for(var prop in romanConversions) {
      while(number >= romanConversions[prop]) {
        romanized += prop;
        number -= romanConversions[prop];
      }
   }
  return romanized;

}
  


$(document).ready(function(){

  $("form#roman").submit(function(event){
    event.preventDefault();
    var num = parseInt($("input#num").val());
    var result = roman(num);
    $(".type").text(" ");
    $(".number").text(" ");
   
    if(!result) {
      $(".number").text(num);
      $(".type").text("nothing!It can't be converted! Too big!");
    } else {
      $(".type").text(result);
    }

    $("#result").show();

  });//end of submit event
});//end of file