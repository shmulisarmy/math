from flask import Flask, render_template


app = Flask(__name__)

@app.route('/algebra')
def algebra():
    return render_template('algebra.html')
@app.route('/multiplication')
def multiplication():
    return render_template('multiplication.html')



if __name__ == '__main__':
    app.run()