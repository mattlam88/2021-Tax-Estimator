import sqlite3

conn = sqlite3.connect("taxModel.db")
c = conn.cursor()

c.execute("""DROP TABLE IF EXISTS stateRate;""")

c.execute(
    """
    CREATE TABLE creditCardDetails (
        id INTEGER PRIMARY KEY,
        jurisdiction TEXT,
        stateRate REAL 
    );
    """
)

conn.commit()
c.close()

print("Looks like we're all good to go!")
