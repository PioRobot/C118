from flask import Flask, render_template, request, jsonify
from model_prediction import *

app = Flask(__name__)

text=""
predicted_emotion=""
predicted_emotion_img=""

#Renderizar la página HTML
@app.route("/")
def home():
    entries = show_entry()
    return render_template("index.html", entries=entries)
    
#Predecir emoción
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Obtener el texto ingresado del requerimiento POST.
   
    input_text=request.json.get("text");
    if not input_text:
       response={
       #return jsonify({
        "status":"error",
        "mesage":"no escribiste prro"
       }#),400
       return jsonify(response)
    else:  

        preicted_emotion,predicted_emotion_img=predict(input_text)
        # Enviar respuesta.    
        response={    
            "data":{"predicted_emotion":predicted_emotion,
            "predicted:emotion_img":predicted_emotion_img},
            "status":"succes"
        }
        return jsonify(response)
        
#API O RUTA PARA GUARDAR ENTRADA


    #Obtener la fecha, predecir emoción y texto ingresado por el usuario para guardar la entrada
   
           
                
if __name__ == "__main__":
    app.run(debug=True)



