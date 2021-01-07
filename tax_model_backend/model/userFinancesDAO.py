import sqlite3

class UserFinancesDAO:
    def __init__(self):
        self.conn = sqlite3.connect("taxModel.db")
        self.cur = self.conn.cursor()
        # connection to DB

    def add_user_finances(self, data):
        self.cur.execute(f"INSERT INTO userFinances (username, firstName, lastName, jurisdictionState, yearlyIncome, taxDue) VALUES (?,?,?,?,?,?);", data)
        self.conn.commit()

    def delete_user_fianances(self, username):
        self.cur.execute(f"DELETE FROM userFinances WHERE username={username};")
        self.conn.commit()
    
    def get_user_finances(self, username):
        user_finances = self.cur.execute(f"SELECT id, username, annualIncome, jurisdiction, federalTaxDue, stateTaxDue FROM userFinances WHERE username={username};")
        for finances in user_finances:
            user_finance_info = UserFinances(finances[0], finances[1], finances[2], finances[3], finances[4], finances[5])
            return user_finance_info
        self.conn.commit()

    def update_user_fedstate_tax (self, username, fed_tax, state_tax):
        self.cur.execute(f"UPDATE userFinances SET federalTaxDue={fed_tax}, stateTaxDue={state_tax} WHERE username={username};")
        self.conn.commit()

class UserFinances:
    def __init__ (self,id=0, username=None, user_annual_income=0,user_jurisdiction=None,user_federal_tax_due=0,user_state_tax_due=0):
        self.id = id
        self.username = username
        self.user_annual_income = user_annual_income
        self.user_jurisdiction = user_jurisdiction
        self.user_federal_tax_due = user_federal_tax_due
        self.user_state_tax_due = user_state_tax_due