FROM python:3.9

WORKDIR /app

# The port the flask app is running on. 
EXPOSE 5050 

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt 

COPY . ./

CMD ["python","main.py"]