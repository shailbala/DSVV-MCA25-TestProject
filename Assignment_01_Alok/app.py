from flask import Flask, render_template, request, redirect, url_for
import random
import string

app = Flask(__name__)

# function for generating username
def generate_username():
    creative_words = ["lazy", "genius", "handsome", "mysterious", "goofy", "joker", "sarcastic", "wise", "hilarious", "idiot"]
    
    word = random.choice(creative_words) + "_no."
    
    digits = ''.join(random.choices(string.digits, k=2))
    
    username = word + digits
    return username

print(generate_username()) 


# for home route
@app.route('/')
def home():
    return render_template('home.html')

# for new User route
@app.route('/newUser', methods=['POST'])
def new_user():
    name = request.form['name']
    email = request.form['email']
    username = generate_username()
    return render_template('user_name_generator.html', name=name, email=email, username=username)

if __name__ == '__main__':
    app.run(debug=True)
