import sqlite3

class stateDAO:
    def __init__(self):
        self.conn = sqlite3.connect("taxModel.db")
        self.cur = self.conn.cursor()

    def state_rate(self, jurisdiction):
        self.cur.execute(f"SELECT * FROM stateRate WHERE jursisidction = {jurisdiction}")
