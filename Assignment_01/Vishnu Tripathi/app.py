from flask import Flask, render_template, request,  redirect, url_for
from pymongo import MongoClient
from bson.objectid import ObjectId


app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
client = MongoClient('localhost', 27017)
db = client.student_details


# @app.route("/")
# def home():
#     return render_template("home.html")

@app.route("/")
def form():
    return render_template('home.html')


@app.route('/data', methods=['GET', 'POST'])
def data():
    data = {}
    if request.method == 'POST':
        data['Email'] = request.form['email']
        data['Password'] = request.form['password']

        db.studentDetails.insert_one(data)

    return render_template('userGenerator.html')


if __name__ == '__main__':
    app.run(debug=True)
