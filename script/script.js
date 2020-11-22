function TrumpTax(grossIncome) {
    this.grossIncome = grossIncome; //This will pull from html when someone inputs their income between $0 and $1M

    TrumpTax.prototype.calc = function () {
        let standardDeduct = 12400 //Standard Deduction for 2020
        let FTI = this.grossIncome - standardDeduct //This gives us the federal taxable income which the tax rate will apply against

        if (FTI > 0 && FTI <= 9950) {
            return FTI * .1;
        } else if (FTI > 9950 && FTI <= 40525) {
            return (FTI * .12) + 995;
        } else if (FTI > 40525 && FTI <= 86375) {
            return (FTI * .22) + 4664;
        } else if (FTI > 86375 && FTI <= 164925) {
            return (FTI * .24) + 14751;
        } else if (FTI > 164925 && FTI <= 209425) {
            return (FTI * .32) + 33603;
        } else if (FTI > 209425 && FTI <= 523600) {
            return (FTI * .35) + 47843;
        } else {
            return (FTI * .37) + 157804.25;
        };

    }

}


function BidenTax(grossIncome) {
    this.grossIncome = grossIncome; //This will pull from html when someone inputs their income between $0 and $1M

    Biden.prototype.calc = function () {
        let standardDeduct = 12400 //Standard Deduction for 2020
        let FTI = this.grossIncome - standardDeduct //This gives us the federal taxable income which the tax rate will apply against

        if (FTI > 0 && FTI <= 9950) {
            return FTI * .1;
        } else if (FTI > 9950 && FTI <= 40525) {
            return (FTI * .12) + 995;
        } else if (FTI > 40525 && FTI <= 86375) {
            return (FTI * .22) + 4664;
        } else if (FTI > 86375 && FTI <= 164925) {
            return (FTI * .24) + 14751;
        } else if (FTI > 164925 && FTI <= 209425) {
            return (FTI * .32) + 33603;
        } else if (FTI > 209425 && FTI <= 523600) {
            return (FTI * .35) + 47843;
        } else {
            return (FTI * .396) + 157804.25;
        };

    }

}

//IRS website guide on 2020 rules: https://www.irs.gov/pub/irs-drop/rp-20-45.pdf