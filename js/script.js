// prova ad usare il .clone
//usa funzione per trovare l'ora e scriverla nel messaggio


// function messaggio() {
//   var messaggio = $("#messaggio").value();
//   console.log(messaggio);
// }

// seleziona contatto
function selContattoeChat() {
  $("#lista_contatti li").click(function () {
    var precedente = $("li.selezionato");
    var precedente_nome = $("#conversazione h4.active");
    var precedente_img = $("#conversazione img.active");
    var precedente_chat = $("#conversazione .chat.active");
    // console.log(precedente);
    console.log(precedente_nome,precedente_img,precedente_chat);
    precedente.removeClass("selezionato");
    $(this).addClass("selezionato");
     var selezionato = $(this).data("id");
    console.log(selezionato);
    var elementi_conversazione = $("#conversazione").find("*");
    // console.log(elementi_conversazione);

    elementi_conversazione.each(function () {
      if ($(this).data("id")== selezionato){
        console.log(this);
        precedente_nome.removeClass("active");
        precedente_img.removeClass("active");
        precedente_chat.removeClass("active")

        $(this).addClass("active");
      }

    });
  });
}

// function elimina opzioni_messaggio
function cancelMsg() {
  $(document).on("click",".opzioni_messaggio", function(){
    console.log("click");
    $(this).next("ul").toggle();
  });
  $(document).on("click",".delete",function () {
    $(this).parents(".messaggio").hide();
    console.log("cancella");
  })
}


// ricerca contatti
function cercaContatto() {
  $("#contatto_search").on("keyup",function() {
    console.log("prova");
    var value = $(this).val().toLowerCase();
    console.log(value);

    $("#lista_contatti li").filter(function () {
      console.log($(this).children(".nome_accesso").children("h4"));
      $(this).toggle($(this).children(".info_contatto_chat").children(".nome_accesso").children("h4").text().toLowerCase().indexOf(value) > -1)
    });
  });
}
// messaggio e risposta
function sendMsgAndAnswer() {
  $("#messaggio").keypress(function () {
    var target = $(".chat.active");
    // console.log(event.which);
    if (event.which == 13) {
    var  messaggio = $("#messaggio").val();
    target.append("<div class=\"messaggio inviato\">"+ messaggio +"<span class= \"ora\">now</span><i class=\"fas fa-chevron-down opzioni_messaggio\"></i><ul class=\"opzioni_messaggio_dropdown\"><li>Message info</li><li class=\"delete\">Delete message</li></ul></div> " );
    $("#messaggio").val("");
  // nella setTimeout non posso mettere un argomento alla funzone chiamata,posso usare funzione anonima e richiamarla
    setTimeout( function () {
      var target = $(".chat.active");
      target.append("<div class=\"messaggio ricevuto\"> ok <span class= \"ora\">now</span><i class=\"fas fa-chevron-down opzioni_messaggio\"></i><ul class=\"opzioni_messaggio_dropdown\"><li>Message info</li><li class=\"delete\">Delete message</li></ul></div>");
    } , 1000);
    }

  });
}

function init() {

  // console.log(target);
  cancelMsg();
  selContattoeChat();
  // search conatti
  cercaContatto();
  sendMsgAndAnswer()

}



$(document).ready(init);
