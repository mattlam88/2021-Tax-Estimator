import sqlite3

class stateDAO:
    def __init__(self):
        self.conn = sqlite3.connect("taxModel.db")
        self.cur = self.conn.cursor()

    def get_state_rate(self, jurisdiction):
        rates = self.cur.execute(f"SELECT jurisdiction, stateAvgRate FROM stateRate WHERE jursisidction = {jurisdiction};")
        for rate in rates:
            state_rate = stateAvgRate(rate[0], rate[1])
            return state_rate    
        self.conn.commit()

    def update_state_rate(self,new_state_rate, jurisdiction):
        self.cur.execute(f"UPDATE stateRate SET stateAvgRate={new_state_rate} WHERE jurisdiction={jurisdiction};")
        self.conn.commit()


class stateAvgRate:
    def __init__(self, jurisdiction=None, state_rate=0):
        self.jurisdiction = jurisdiction
        self.state_rate = state_rate
