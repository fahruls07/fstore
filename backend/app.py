from flask import Flask, request
app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def handle_form():
    data = request.form
    print("Form masuk:", data)
    return "Terima kasih sudah mendaftar!"
