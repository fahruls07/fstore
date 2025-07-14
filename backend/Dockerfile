FROM python:3.10

WORKDIR /app
COPY app.py /app
COPY static /app/static

RUN pip install flask

ENV FLASK_APP=app.py
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]