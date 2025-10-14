# ============================
#Base image
# ============================
FROM python:3.12-slim

# Prevent Python from writing pyc files & buffering output
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ============================
#Set working directory
# ============================
WORKDIR /app

# ============================
#Install system dependencies
# ============================
RUN apt-get update && \
    apt-get install -y libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

# ============================
# install Python dependencies
# ============================
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# ============================
#Copy project files
# ============================
COPY . /app/

# ============================
#Set environment variables for Django
# ============================
ENV DJANGO_SETTINGS_MODULE=novaka_backend.settings
ENV PORT=8000

# ============================
#Collect static files
# ============================
# Use `|| true` to ignore if STATIC_ROOT isn't ready yet
RUN python manage.py collectstatic --noinput || true

#Expose Render port

EXPOSE 8000


#Start the app with Gunicorn

CMD ["gunicorn", "novaka_backend.wsgi:application", "--bind", "0.0.0.0:8000"]
