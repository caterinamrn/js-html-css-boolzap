// function messaggio() {
//   var messaggio = $("#messaggio").value();
//   console.log(messaggio);
// }

function init() {
  var target = $(".chat");
  // console.log(target);

  // search conatti
  $("#contatto_search").on("keyup",function () {
    console.log("prova");
    var value = $(this).val().toLowerCase();
    console.log(value);

    $("#lista_contatti li").filter(function () {
      console.log($(this).children(".nome_accesso").children("h4"));
      $(this).toggle($(this).children(".info_contatto_chat").children(".nome_accesso").children("h4").text().toLowerCase().indexOf(value) > -1)
    });
  });


  // scrivi un messaggio e ti arriva una risposta
  $("#messaggio").keypress(function () {

    // console.log(event.which);
    if (event.which == 13) {
    var  messaggio = $("#messaggio").val();
    target.append("<div class=\"messaggio inviato\">"+ messaggio +"<span class= \"ora\">now</span></div>");
    $("#messaggio").val("");

    setTimeout( function () {
      target.append("<div class=\"messaggio ricevuto\"> ok <span class= \"ora\">now</span></div>");
    } , 3000);
    }

  })
}



$(document).ready(init);
