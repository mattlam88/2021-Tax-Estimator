from model.stateDAO import StateDAO, StateAvgRate

class BidenTax:
    def __init__(self):
        self.state_DAO = StateDAO()
        self.standard_deduction = 12400

    def calc_fed_tax_biden(self, user_income):
        fti = user_income - self.standard_deduction
        # FTI stands for federal taxable income
        if fti >= 0 and fti <= 9950:
            return fti * .1
        elif fti > 9950 and fti <= 40525:
            return (fti * .12) + 995
        elif fti > 40525 and fti <= 86375:
            return (fti * .22) + 4664
        elif fti > 86375 and fti <= 164925:
            return (fti * .24) + 14751
        elif fti > 164925 and fti <= 209425:
            return (fti * .32) + 33603
        elif fti > 209425 and fti <= 523600:
            return (fti * .35) + 47843
        elif fti > 523600:
            return (fti * .396) + 157804.25

    def calc_state_tax_biden(self, user_income, user_state):
        state_rate = self.state_DAO.get_state_rate(user_state)
        fti = user_income - self.standard_deduction
        return fti * state_rate


class TrumpTax:
    def __init__(self):
        self.state_DAO = StateDAO()
        self.standard_deduction = 12400

    def calc_fed_tax_trump(self, user_income):
        # FTI stands for federal taxable income
        fti = user_income - self.standard_deduction

        if fti >= 0 and fti <= 9950:
            return fti * .1
        elif fti > 9950 and fti <= 40525:
            return (fti * .12) + 995
        elif fti > 40525 and fti <= 86375:
            return (fti * .22) + 4664
        elif fti > 86375 and fti <= 164925:
            return (fti * .24) + 14751
        elif fti > 164925 and fti <= 209425:
            return (fti * .32) + 33603
        elif fti > 209425 and fti <= 523600:
            return (fti * .35) + 47843
        elif fti > 523600:
            return (fti * .37) + 157804.25

    def calc_state_tax_trump(self, user_income, user_state):
        state_rate = self.state_DAO.get_state_rate(user_state)
        fti = user_income - self.standard_deduction
        return fti * state_rate
