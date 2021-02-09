import sqlite3
import csv

conn = sqlite3.connect("taxModel.db")
c = conn.cursor()

c.execute("""DROP TABLE IF EXISTS stateRate;""")
c.execute("""DROP TABLE IF EXISTS trumpBidenRates""")

c.execute(
    """
    CREATE TABLE stateRate (
        id INTEGER PRIMARY KEY,
        jurisdiction TEXT,
        stateAvgRate REAL 
    );
    """
)

with open("tax_model_backend/database/2020-state-tax-rates.csv","r") as state_rates:
    reader_file = csv.reader(state_rates)
    for row in reader_file:
        c.execute("""INSERT INTO stateRate ("jurisdiction", "stateAvgRate") VALUES (?,?);""", row)

c.execute(
    """
    CREATE TABLE trumpBidenRates (
        id INTEGER PRIMARY KEY,
        presidentBracket TEXT,
        fedTaxRate REAL,
        incomeBracket TEXT 
    );
    """
)

with open("tax_model_backend/database/Biden_Trump_tax_rates.csv","r") as fed_rates:
    reader_file = csv.reader(fed_rates)
    for row in reader_file:
        c.execute("""INSERT INTO trumpBidenRates ("presidentBracket", "fedTaxRate", "incomeBracket") VALUES (?,?,?);""", row)

conn.commit()
c.close()

print("Looks like we're all good to go!")
