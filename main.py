from flask import Flask, render_template


app = Flask(__name__)


@app.route('/algebra')
def algebra():
    return render_template('algebra.html')


@app.route('/addition')
def addition():
    return render_template('addition.html')

@app.route('/multiplication')
def multiplication():
    table_size = 6
    table = [[0 for col in range(table_size)] for row in range(table_size)]
    return render_template('multiplication.html', table=table)

@app.route('/')
def home():
    return render_template('index.html')




if __name__ == '__main__':
    app.run(debug=True)