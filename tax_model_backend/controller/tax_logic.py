from model.stateDAO import StateDAO, StateAvgRate
from model.userDAO import UserDAO, User
from model.userFinancesDAO import UserFinancesDAO, UserFinancesDAO

class BidenTax:
    def __init__(self):
        self.standard_deduction = 12400

    def calc_tax(self, user_finances):
       fed_tax = self.calc_fed_tax(user_finances)
       state_tax = self.calc_state_tax(user_finances)
       total_tax = fed_tax + state_tax
       UserFinancesDAO.update_user_fedstate_tax(user_finances.username, fed_tax, state_tax)
       UserDAO.update_user_tax_due(user_finances.username, total_tax)
       
    def calc_fed_tax(self, user_finances):
        fti = user_finances.gross_income - self.standard_deduction
        # FTI stands for federal taxable income
        if fti > 0 & fti <= 9950:
            return fti * .1
        elif fti > 9950 & fti <= 40525:
            return (fti * .12) + 995
        elif fti > 40525 & fti <= 86375:
            return (fti * .22) + 4664
        elif fti > 86375 & fti <= 164925:
            return (fti * .24) + 14751
        elif fti > 164925 & fti <= 209425:
            return (fti * .32) + 33603
        elif fti > 209425 & fti <= 523600:
            return (fti * .35) + 47843
        else:
            return (fti * .396) + 157804.25

    def calc_state_tax(self, user_finances):
        state_rate = StateDAO.get_state_rate(user_finances.jurisdiction)
        fti = user_finances.gross_income - self.standard_deduction
        return fti * state_rate


class TrumpTax:
    def __init__(self):
        self.standard_deduction = 12400

    def calc_tax(self, user_finances):
        fed_tax = self.calc_fed_tax(user_finances)
        state_tax = self.calc_state_tax(user_finances)
        total_tax = fed_tax + state_tax
        UserFinancesDAO.update_user_fedstate_tax(user_finances.username, fed_tax, state_tax)
        UserDAO.update_user_tax_due(user_finances.username, total_tax)

    def calc_fed_tax(self, user_finances):
        # FTI stands for federal taxable income
        fti = user_finances.gross_income - self.standard_deduction

        if fti > 0 & fti <= 9950:
            return fti * .1
        elif fti > 9950 & fti <= 40525:
            return (fti * .12) + 995
        elif fti > 40525 & fti <= 86375:
            return (fti * .22) + 4664
        elif fti > 86375 & fti <= 164925:
            return (fti * .24) + 14751
        elif fti > 164925 & fti <= 209425:
            return (fti * .32) + 33603
        elif fti > 209425 & fti <= 523600:
            return (fti * .35) + 47843
        else:
            return (fti * .37) + 157804.25

    def calc_state_tax(self, user_finances):
        state_rate = StateDAO.get_state_rate(user_finances.jurisdiction)
        fti = user_finances.gross_income - self.standard_deduction
        return fti * state_rate
