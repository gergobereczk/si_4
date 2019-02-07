from flask import Flask, session, redirect, url_for, escape, request, render_template, make_response

app = Flask(__name__)


@app.route('/set-cookie')
def cookie_insertion():
    redirect_to_index = redirect('/')
    response = make_response(redirect_to_index)
    response.set_cookie('cookie-name', value='values')
    return response


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/fizzbuzz')
def fizzbuzz():
    return render_template("fizzbuzz.html")

@app.route('/search')
def search():
    return render_template("search.html")

@app.route('/bootstrap_teszt1')
def boostrap_teszt1():
    return render_template("index2.html")

@app.route('/dom_teszt1')
def dom_teszt1():
    return render_template("dom_test.html")

@app.route('/si_event')
def si_event():
    return render_template("si_event.html")


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )