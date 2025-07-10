from flask import Flask, request

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    nama = request.form["nama"]
    email = request.form["email"]
    wa = request.form["wa"]
    print(f"Pendaftaran reseller baru: {nama} | {email} | {wa}")
    return "Terima kasih! Kami akan hubungi Anda."
