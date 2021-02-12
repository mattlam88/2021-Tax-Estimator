import sqlite3

class StateDAO:
    def __init__(self):
        self.conn = sqlite3.connect("/Users/mattlam/Documents/Coding Bootcamp/Group Project - Tax Model/taxModel.db")
        self.cur = self.conn.cursor()

    def get_state_rate(self, jurisdiction):
        rates = self.cur.execute(f"SELECT jurisdiction, stateAvgRate FROM stateRate WHERE jursisidction = '{jurisdiction}';")
        for rate in rates:
            state_rate = StateAvgRate(rate[0], rate[1])
            return state_rate    
        self.conn.commit()


class StateAvgRate:
    def __init__(self, jurisdiction=None, state_rate=0):
        self.jurisdiction = jurisdiction
        self.state_rate = state_rate
