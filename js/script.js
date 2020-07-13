// function messaggio() {
//   var messaggio = $("#messaggio").value();
//   console.log(messaggio);
// }


function init() {
  var target = $(".chat");
  console.log(target);
  $("#messaggio").keypress(function () {
    // console.log(event.which);
    if (event.which == 13) {
    var  messaggio = $("#messaggio").val();
    target.append("<div class=\"messaggio inviato\">"+ messaggio +"<span class= \"ora\">now</span></div>");
    $("#messaggio").val("");
    }
    console.log(messaggio);

    // target.append( messaggio)
  })
}



$(document).ready(init);
