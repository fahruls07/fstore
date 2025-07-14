from flask import Flask, request, send_from_directory, jsonify, abort
import os

app = Flask(__name__)

# Folder tempat gambar disimpan
IMAGE_FOLDER = os.path.join(app.root_path, "static")
ALLOWED_IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}

@app.route("/submit", methods=["POST"])
def submit():
    nama = request.form.get("nama")
    email = request.form.get("email")
    wa = request.form.get("wa")
    print(f"[SUBMIT] Nama: {nama}, Email: {email}, WA: {wa}")
    return "Terima kasih! Kami akan segera hubungi Anda."

@app.route("/images/<filename>")
def serve_image(filename):
    _, ext = os.path.splitext(filename.lower())

    if ext not in ALLOWED_IMAGE_EXTENSIONS:
        abort(403, description="Forbidden: file type not allowed")

    file_path = os.path.join(IMAGE_FOLDER, filename)
    if os.path.exists(file_path):
        return send_from_directory(IMAGE_FOLDER, filename)
    else:
        return jsonify({"error": "File not found"}), 404

@app.route("/health")
def health():
    return "OK"
