from flask import Flask, jsonify, render_template, request,  redirect, url_for
from pymongo import MongoClient
import random
import string


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
client = MongoClient('localhost', 27017)
db = client.student_details

@app.route("/", methods=['GET','POST'])
def form():
    if request.method == 'POST':
        email = request.form.get('email')
        return redirect(url_for('data'))
    return render_template('home.html')


@app.route('/data', methods=['GET'])
def data():
    email = request.args.get('email')

    return render_template('userGenerator.html')

@app.route('/generate_username', methods=['GET'])
def generate_username():
    characters = string.ascii_lowercase
    numbers = string.digits
    word = ''.join(random.choice(characters) for _ in range(6))
    word += ''.join(random.choice(numbers) for _ in range(2))
    return jsonify({'username': word})

if __name__ == '__main__':
    app.run(debug=True)
