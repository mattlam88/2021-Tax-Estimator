from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.tax_logic import BidenTax, TrumpTax
from model.stateDAO import StateDAO, StateAvgRate
from model.fedDAO import FedDAO, FedTaxRate
import jsons

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/federalTaxComparison', methods=['GET'])
def federal_income_tax_comp():
    # Top Left Graph (Bar Graph)
    income = int(request.args.get('income'))
    print(income)

    biden_tax_service = BidenTax()
    user_biden_tax = biden_tax_service.calc_fed_tax_biden(income)
    print('Biden Tax:', user_biden_tax) 
    
    trump_tax_service = TrumpTax()
    user_trump_tax = trump_tax_service.calc_fed_tax_trump(income)
    print('Trump Tax:', user_trump_tax)

    # Will need to confirm if we are using $400k as the proxy or $1m
    tax_due = {
        'user_biden_tax': user_biden_tax,
        'user_trump_tax': user_trump_tax
    }
    print(tax_due)
    return tax_due


@app.route('/federalTaxRateComparison', methods=['GET'])
def get_federal_tax_rate_comparison():
    fed_tax_rates = FedDAO()
    # returns the the entire table of rates
    rates = jsons.dump(fed_tax_rates.get_fed_rates)
    # Top Right Graph (Line Graph)
    return rates


@app.route('/fedStateIncomeTaxComparison', methods=['GET', 'POST'])
def fed_state_income_tax_comp():
    request_data = request.json()
    print(request_data)

    income = request_data['income']
    jurisdiction = request_data['stateTax']

    biden_tax = BidenTax()
    trump_tax = TrumpTax()

    biden_tax_due = biden_tax.calc_fed_tax(
        income) + biden_tax.calc_state_tax(income, jurisdiction)
    trump_tax_due = trump_tax.calc_fed_tax(
        income) + trump_tax.calc_state_tax(income, jurisdiction)

    tax_due = {
        "Biden": biden_tax_due,
        "Trump": trump_tax_due
    }
    # Graph will compare the income tax paid comparisons between Biden and Trump between the income brackets (Fed and State)
    # Bottom Left Graph (Bar Graph)
    return tax_due


@app.route('/fedStateIncomeTaxRateComparison', methods=['GET', 'POST'])
def fed_state_income_tax_rate_comp():
    request_data = request.json()
    jurisdiction = request_data['stateTax']

    state_avg_rate = StateDAO()
    fed_tax_rate = FedDAO()

    combined_rates = {}
    fed_rates = fed_tax_rate.get_fed_rates()
    for key in fed_rates.keys():
        combined_rates[key] = fed_rates[key].fed_tax_rate + \
            state_avg_rate.get_state_rate(jurisdiction)

    # Graph will compare the rate comparisons between Biden and Trump between the income brackets (Fed and State AVG)
    # Bottom Right Graph (Bar Graph)
    return combined_rates


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
