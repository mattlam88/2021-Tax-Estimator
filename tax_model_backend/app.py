from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.tax_logic import BidenTax, TrumpTax
from model.stateDAO import StateDAO, StateAvgRate
from model.userDAO import UserDAO, User
from model.userDAO import UserFinancesDAO, UserFinances
import jsons

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/stateIncomeInputs', method=['POST'])
def post_user_inputs(self):
    request_data = request.json()
    print(request_data)

    user_income = request_data['income']
    user_state = request_data['stateTax']

    # Will need to store user_income and user_state into the database
    # Will need to consider if we need less dataroom headers, we may want to keep username to ease database search
    return 'Request posted to database'


@app.route('graph_one', method=['GET', 'POST'])
def get_graph_one_data(self):
    state_avg_rate = StateDAO()
    # Will get user information from the database and perform business logic
    # Graph will compare how much tax will be paid between Trump vs Biden
    pass


@app.route('graph_two', method=['GET', 'POST'])
def get_graph_two_data(self):
    state_avg_rate = StateDAO()
    # Will get user information from the database and perform business logic
    # Graph will compare the rate comparisons between Biden and Trump between the income brackets
    pass


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)