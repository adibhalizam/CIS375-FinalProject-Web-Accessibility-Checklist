document.addEventListener('DOMContentLoaded', function() {
    let allCategory1 = document.querySelectorAll('input[type="checkbox"][value="category1"]');
    let allCategory2 = document.querySelectorAll('input[type="checkbox"][value="category2"]');
    let allCategory3 = document.querySelectorAll('input[type="checkbox"][value="category3"]');

    let total1 = allCategory1.length;
    let total2 = allCategory2.length;
    let total3 = allCategory3.length;

    const button = document.getElementById('submit');

    let resultSection = document.getElementById('finalResult');

    let category1Applicable = true;
    let category2Applicable = true;
    let category3Applicable = true;

    const applicable1 = document.getElementById('na1');
    // const applicable2 = document.getElementById('na2');
    // const applicable3 = document.getElementById('na3');

    
    applicable1.addEventListener('click', function() {
        if (category1Applicable == true) {
            for (let i = 0; i < allCategory1.length; i++) {
                allCategory1[i].disabled = true;
            }
            category1Applicable = false;
            total1 = 0;
            return;
        }
        else {
            for (let i = 0; i < allCategory1.length; i++) {
                allCategory1[i].disabled = false;
            }
            category1Applicable = true;
            total1 = allCategory1.length;
            return;
        }
    });


    button.addEventListener('click', function() {
        let check1 = 0;
        let check2 = 0;
        let check3 = 0;
        let resultScore = 0;
        if(category1Applicable == true) {
            for (let i = 0; i < allCategory1.length; i++) {
                if(allCategory1[i].checked) {
                    check1++;
                }
            }
        }

        if(category2Applicable == true) {
            for (let i = 0; i < allCategory2.length; i++) {
                if(allCategory2[i].checked) {
                    check2++;
                }
            }
        }

        if(category3Applicable == true) {
            for (let i = 0; i < allCategory3.length; i++) {
                if(allCategory3[i].checked) {
                    check3++;
                }
            }
        }

        let fullScore = total1 + total2 + total3;
        resultScore = check1 + check2 + check3;
        let percentage = ((resultScore / fullScore) * 100).toFixed(2);
        resultSection.innerHTML = "Accessibility Score : " + resultScore + "/" + fullScore +
        "<br>" + "Accessibility Percentage : " + percentage + "%";

    });
});