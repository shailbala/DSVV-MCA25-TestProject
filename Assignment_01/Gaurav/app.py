from flask import Flask, render_template, request, redirect
import random
import string

app = Flask(__name__)

def generate_username():
    letters = ''.join(random.choices(string.ascii_lowercase, k=6))
    digits = ''.join(random.choices(string.digits, k=2))
    return letters + digits

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/newUser', methods=['POST'])
def user_name_generator():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        username = generate_username()
        return render_template('uname.html', name=name, email=email, username=username)

if __name__ == '__main__':
    app.run(debug=True)