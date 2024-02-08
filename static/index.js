//Crie a variável de data
var date = new Date()
let display_date = "Data: " + date.toLocaleDateString('pt-BR', {weekday: 'short', year:'numeric', month:'short', day:'numeric'})

//Carregue o DOM HTML
$(document).ready(function(){
    $("#display_date").html(display_date)
})

//Defina a variável para armazenar a emoção prevista
let predicted_emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML


//seletor jQuery e ação de clique

$(function () {
    $("#predict_button").click(function () {
        //chamada AJAX
        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        //escrever chamada ajax
        $.ajax({
          
            },
            //Função de erro
            error: function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})

