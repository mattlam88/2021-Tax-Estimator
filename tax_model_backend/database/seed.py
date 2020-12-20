import sqlite3
import csv

conn = sqlite3.connect("taxModel.db")
c = conn.cursor()

c.execute("""DROP TABLE IF EXISTS stateRate;""")

c.execute(
    """
    CREATE TABLE stateRate (
        id INTEGER PRIMARY KEY,
        jurisdiction TEXT,
        stateRate REAL 
    );
    """
)

with open("tax_model_backend/database/2020-state-tax-rates.csv","r") as state_rates:
    reader_file = csv.reader(state_rates)
    for row in reader_file:
        c.execute("""INSERT INTO stateRate ("jurisdiction", "stateRate") VALUES (?,?);""", row)

conn.commit()
c.close()

print("Looks like we're all good to go!")
