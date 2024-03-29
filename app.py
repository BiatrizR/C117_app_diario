from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
# escrever a rota para predict-emotion
    
    if not input_text:
        response = {
                    "status": "error",
                    "message": "Digite um texto para prever a emoção associada a ele!"
                  }
        return jsonify(response)
    else:  
        predicted_emotion,predicted_emotion_img_url = predict(input_text)
        
        # Resposta a enviar se o input_text não for indefinido
        response = {
                    "status": "success",
                    "data": {
                            "predicted_emotion": predicted_emotion,
                            "predicted_emotion_img_url": predicted_emotion_img_url
                            }  
                   }

        # Enviar resposta         
        return jsonify(response)
       
app.run(debug=True)



    
