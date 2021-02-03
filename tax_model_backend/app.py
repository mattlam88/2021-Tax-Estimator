from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.tax_logic import BidenTax, TrumpTax
from model.stateDAO import StateDAO, StateAvgRate
from model.userDAO import UserDAO, User
from model.userDAO import UserFinancesDAO, UserFinances
import jsons

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/federalTaxComparison', method=['POST', 'GET'])
def federal_income_tax_comp(self):
    #Top Left Graph (Bar Graph)
    request_data = request.json()
    print(request_data)
    
    biden_tax_service = BidenTax()
    trump_tax_service = TrumpTax()

    user_income = request_data['income']

    # User's federalincome tax output
    user_biden_tax = biden_tax_service.calc_fed_tax(user_income)
    user_trump_tax = trump_tax_service.calc_fed_tax(user_income)

    # Will need to confirm if we are using $400k as the proxy or $1m
    tax_due = {
        'user_biden_tax': user_biden_tax,
        'user_trump_tax': user_trump_tax
    }

    return tax_due


@app.route('federalTaxRateComparison', method=['GET', 'POST'])
def get_federal_tax_rate_comparison(self):
    # Will need to create a new table with the Trump rates vs Biden rates
    # This should be two select statements into the database
    # Top Right Graph (Line Graph)
    pass


@app.route('fedStateIncomeTaxComparison', method=['GET', 'POST'])
def fed_state_income_tax_comp(self):
    # Bottom Left Graph (Bar Graph)
    state_avg_rate = StateDAO()
    # Will get user information from the database and perform business logic
    # Graph will compare the income tax paid comparisons between Biden and Trump between the income brackets (Fed and State)
    pass


@app.route('fedStateIncomeTaxRateComparison', method=['GET', 'POST'])
def fed_state_income_tax_rate_comp(self):
    # Bottom Right Graph (Bar Graph)
    state_avg_rate = StateDAO()
    # Will get user information from the database and perform business logic
    # Graph will compare the rate comparisons between Biden and Trump between the income brackets (Fed and State AVG)
    pass


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)