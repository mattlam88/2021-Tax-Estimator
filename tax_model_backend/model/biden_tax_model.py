class BidenTax:
    def __init__(self, gross_income=0):
        self.gross_income = gross_income

    def calc_tax(self):
        standard_deduction = 12400
        # FTI stands for federal taxable income
        fti = self.gross_income - standard_deduction

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
