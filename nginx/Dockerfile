FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

# Salin HTML, CSS, JS dari frontend
COPY --from=builder /app /usr/share/nginx/html
