from flask import Flask, request, send_from_directory, jsonify, abort
import os

app = Flask(__name__)

# Ekstensi gambar yang diperbolehkan
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
    image_dir = os.path.join(app.root_path, "static")
    _, ext = os.path.splitext(filename.lower())

    if ext not in ALLOWED_IMAGE_EXTENSIONS:
        abort(403, description="Forbidden: file type not allowed")

    file_path = os.path.join(image_dir, filename)
    if os.path.exists(file_path):
        return send_from_directory(image_dir, filename)
    else:
        return jsonify({"error": "File not found"}), 404
