from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, template_folder="html")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedback.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.environ.get('SECRET_KEY', 'secret-key-for-flash')

db = SQLAlchemy(app)


class Form(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(254), nullable=False)
    topic = db.Column(db.String(300), nullable=False)
    text = db.Column(db.Text, nullable=False)


with app.app_context():
    db.create_all()

@app.route("/contacts.html", methods=['GET', 'POST'])
def contacts():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        topic = request.form['subject']
        text = request.form['message']

        new_feedback = Form(name=name, email=email, topic=topic, text=text)
        
        try:
            db.session.add(new_feedback)
            db.session.commit()
            flash('Сообщение отправлено. Спасибо за обратную связь!', 'success')
            return redirect(url_for('contacts'))
        except:
            db.session.rollback()
            flash('Произошла ошибка при отправке. Попробуйте позже.', 'error')

    return render_template("contacts.html", title="Обратная связь", active_page="contacts")


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

@app.route("/glossary.html")
def glossary():
    return render_template("glossary.html", title="Глоссарий", active_page="glossary")

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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
