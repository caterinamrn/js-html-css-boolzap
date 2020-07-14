// function messaggio() {
//   var messaggio = $("#messaggio").value();
//   console.log(messaggio);
// }

function risposta() {
  setTimeout(function (where) {
    where.append("<div class=\"messaggio ricevuto\">"+ ok +"<span class= \"ora\">now</span></div>");
  }, 1000);
}


function init() {
  var target = $(".chat");
  console.log(target);
  $("#messaggio").keypress(function () {
    // console.log(event.which);
    if (event.which == 13) {
    var  messaggio = $("#messaggio").val();
    target.append("<div class=\"messaggio inviato\">"+ messaggio +"<span class= \"ora\">now</span></div>");
    $("#messaggio").val("");
    // risposta(target);
    setTimeout(function (where) {
      target.append("<div class=\"messaggio ricevuto\">ok<span class= \"ora\">now</span></div>");
    }, 1000);
    }
    console.log(messaggio);

    // target.append( messaggio)
  })
}



$(document).ready(init);
