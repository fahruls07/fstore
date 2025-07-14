FROM python:3.10-slim

WORKDIR /app
COPY app.py ./
COPY static ./static

RUN pip install flask

EXPOSE 5000
CMD ["python", "app.py"]