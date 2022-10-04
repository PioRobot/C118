var date = new Date()
let display_date= "Fecha: " + date.toLocaleDateString()

$(document).ready(function () {
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
})

var predicted_emotion

//HTML-->JavaScript--->Flask.
//Flask--->JavaScript--->HTML.


//Selector jQuery y la acción click.


$(function () {
    $("#predict_button").click(function () {
        //Llamada a AJAX 
        var input_data={
            "text":$("#text").val()
        }
        $.ajax({
            type:'POST',
            url:'/predict-emotion',
            data:JSON.stringify(input_data),
            dataType:'json',
            contentType:'application/json',
            succes:function(result)
            
              {
                
                // Resultado recibido de Flask ----->JavaScript
                predicted_emotion=result.data.predicted_emotion
                predicted_emotion_img=result.data.predicted_emotion_img
                 // Mostrar resultado usando JavaScript----->HTML
                 $('#prediction').html(predicted_emotion)
                 $('#prediction').css("display","block")

                 $('#emo_img_url').attr(predicted_emotion_img)
                 $('#emo_img_url').css("display","block")

            },
            //Función error 
            error:function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})



