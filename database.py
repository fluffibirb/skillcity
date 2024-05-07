from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def initialize_app(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@127.0.0.1:3306/projectdatabase'
    db.init_app(app)