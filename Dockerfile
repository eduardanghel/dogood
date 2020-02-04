# start from an official image
FROM python:3.7.6

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/backend/src
WORKDIR /opt/services/backend/src

# copy our project code
COPY . /opt/services/backend/src

# install our dependencies
RUN pip install -r backend/requirements.txt --cache-dir /opt/app/pip_cache

# Collect static files
RUN backend/manage.py collectstatic --no-input

# expose the port 8000
EXPOSE 8000

# define the default command to run when starting the container
CMD ["gunicorn", "--chdir", "backend", "--bind", ":8000", "backend.wsgi:application"]