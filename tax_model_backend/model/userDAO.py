import sqlite3

class UserDAO:
    def __init__(self):
        self.conn = sqlite3.connect("taxModel.db")
        self.cur = self.conn.cursor()
    
    def add_user(self, username):
        self.cur.execute(f"INSERT")
        self.conn.commit()

    def delete_user(self, username):
        self.cur.execute(f"INSERT")
        self.conn.commit()

    def get_user(self, username):
        user_data = self.cur.execute(f"SELECT username, firstName, lastName, jurisdictionState, yearlyIncome, taxDue FROM user WHERE username={username};")
        for data in user_data:
            user = User(data[0], data[1], data[2], data[3], data[4])
            return user   
        self.conn.commit()

class User:
    def __init__(self, username=None, first_name=None, last_name=None, jurisdiction_state=None, user_annual_income=0, tax_due=0):
        self.username = username
        self.first_name = first_name
        self.last_name = last_name
        self.jurisdiction_state = jurisdiction_state
        self.user_annual_income = user_annual_income
        self.tax_due = tax_due