import sqlite3

class FedDAO:
    def __init__(self):
        self.conn = sqlite3.connect("/Volumes/Samsung USB/Projects/2021-Tax-Model-Project/taxModel.db")
        self.cur = self.conn.cursor()

    def get_fed_rates(self):
        fed_tax_info = self.cur.execute(f"SELECT presidentBracket, fedTaxRate, incomeBracket FROM trumpBidenRates;")
        fed_tax_rates = {}

        for rate in fed_tax_info:
            president_bracket = rate[0]
            fed_tax_rates[president_bracket] = FedTaxRate(rate[0], rate[1], rate[2])
        return fed_tax_rates 


class FedTaxRate:
    def __init__(self, president_bracket, fed_tax_rate, income_bracket):
        self.president_bracket = president_bracket
        self.fed_tax_rate = fed_tax_rate
        self.income_bracket = income_bracket
