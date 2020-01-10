from flask import Flask, render_template, json, jsonify


app = Flask('app')


@app.route('/')
def index_page():
  return render_template('index.html')


@app.route('/health')
def health_check():
  return "ok"


@app.route('/chat/lasi')
def ielasit_chatu():
  chata_rindas=[]
  with open("chats.txt","r", encoding="UTF-8") as f:
    for rinda in f:
      chata_rindas.append(rinda)
  return jsonify({"chats":chata_rindas})

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000, debug=True)