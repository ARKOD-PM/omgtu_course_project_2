from flask import Flask, render_template

app = Flask(__name__, template_folder="html")

@app.route("/index.html")
@app.route("/")
def index():
    return render_template("index.html", title="Главная", active_page="index")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
