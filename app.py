from flask import Flask, render_template

app = Flask(__name__, template_folder="html")

@app.route("/index.html")
@app.route("/")
def index():
    return render_template("index.html", title="Главная", active_page="index")

@app.route("/history1.html")
def history1():
    return render_template("history1.html", title="Питер Нортон", active_page="history1")

@app.route("/history2.html")
def history2():
    return render_template("history2.html", title="CVX-2", active_page="history2")

@app.route("/history3.html")
def history3():
    return render_template("history3.html", title="Адам Лэнза", active_page="history3")

@app.route("/virtual_recovery.html")
def virtual_recovery():
    return render_template("virtual_recovery.html", title="Программное восстановление", active_page="virtual_recovery")

@app.route("/physical_recovery.html")
def physical_recovery():
    return render_template("physical_recovery.html", title="Физическое восстановление", active_page="physical_recovery")

@app.route("/files_remove.html")
def files_remove():
    return render_template("files_remove.html", title="Удаление данных", active_page="files_remove")

@app.route("/rem_program/ccleaner.html")
def ccleaner():
    return render_template("rem_program/ccleaner.html", title="CCleaner", active_page="ccleaner")

@app.route("/rem_program/eraser.html")
def eraser():
    return render_template("rem_program/eraser.html", title="Eraser", active_page="eraser")

@app.route("/rem_program/file_shredder.html")
def file_shredder():
    return render_template("rem_program/file_shredder.html", title="File Shredder", active_page="file_shredder")

@app.route("/rec_program/easeusdrw.html")
def easeusdrw():
    return render_template("rec_program/easeusdrw.html", title="EaseUS DRW", active_page="easeusdrw")

@app.route("/rec_program/hetmanpr.html")
def hetmanpr():
    return render_template("rec_program/hetmanpr.html", title="Hetman PR", active_page="hetmanpr")

@app.route("/rec_program/r-studio.html")
def r_studio():
    return render_template("rec_program/r-studio.html", title="R-Studio", active_page="r-studio")

@app.route("/rec_program/recuva.html")
def recuva():
    return render_template("rec_program/recuva.html", title="Recuva", active_page="recuva")

@app.route("/glossary.html")
def glossary():
    return render_template("glossary.html", title="Глоссарий", active_page="glossary")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
