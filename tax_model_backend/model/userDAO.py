import sqlite3

class UserDAO:
    def __init__(self):
        self.conn = sqlite3.connect("taxModel.db")
        self.cur = self.conn.cursor()
    
    def add_user(self, id, username, first_name, last_name, jurisdiction_state, user_annual_income, tax_due):
        self.cur.execute(f"INSERT")
        self.conn.commit()

    def delete_user(self, id):
        self.cur.execute(f"DELETE FROM user WHERE id = {id};")
        self.conn.commit()

    def get_user(self, username):
        user_data = self.cur.execute(f"SELECT username, firstName, lastName, jurisdictionState, yearlyIncome, taxDue FROM user WHERE username={username};")
        for data in user_data:
            user = User(data[0], data[1], data[2], data[3], data[4])
            return user   
        self.conn.commit()

    def update_user(self, username, first_name, last_name, jursisidction_state, user_annual_income, tax_due):
        self.cur.execute(f"UPDATE user SET firstName={first_name}, lastName={last_name}, jurisdictionState={jurisdiction_state}, yearlyIncome={user_annual_income}, taxDue={tax_due};")
        self.conn.commit()

    def update_user_tax_due(self, username, tax_due):
        self.cur.execute(f"UPDATE user SET taxDue={tax_due} WHERE username={username};")
        self.conn.commit()

class User:
    def __init__(self, id=0, username=None, first_name=None, last_name=None, jurisdiction_state=None, user_annual_income=0, tax_due=0):
        self.id = id
        self.username = username
        self.first_name = first_name
        self.last_name = last_name
        self.jurisdiction_state = jurisdiction_state
        self.user_annual_income = user_annual_income
        self.tax_due = tax_due