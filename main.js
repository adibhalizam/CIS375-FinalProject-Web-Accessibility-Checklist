document.addEventListener('DOMContentLoaded', function () {
    let totalCategory = [5, 3, 3, 4, 3];
    let totalSemanticElements = 0;
    let totalTextAlternatives = 0;
    let totalKeyboardAccessibility = 0;
    let totalSizeSpacing = 0;
    let totalColorContrast = 0;
    const numCategory1 = 5;
    const numCategory2 = 3;
    const numCategory3 = 3;
    const numCategory4 = 4;
    const numCategory5 = 3;

    const button = document.getElementById('submit');
    button.addEventListener('click', function () {
        console.log('Button clicked');
        const calculateTotalForCategory = (numQuestions, category) => {
            let score = 0;
            for (let question = 1; question <= numQuestions; question++) {
                const selectedValue = document.querySelector(`input[name="category${category}_${question}"]:checked`).value;
                if (selectedValue === "1") {
                    score += 1;
                } else if (selectedValue === "0") {
                    // Do nothing for 0
                } else if (selectedValue === "na") {
                    totalCategory[category - 1] -= 1;
                }
            }
            return score;
        };

        totalSemanticElements = calculateTotalForCategory(numCategory1, 1);
        totalTextAlternatives = calculateTotalForCategory(numCategory2, 2);
        totalKeyboardAccessibility = calculateTotalForCategory(numCategory3, 3);
        totalSizeSpacing = calculateTotalForCategory(numCategory4, 4);
        totalColorContrast = calculateTotalForCategory(numCategory5, 5);

        if (totalCategory[0] === 0)
            totalSemanticElements = "Not Applicable";
        else
            totalSemanticElements = `${totalSemanticElements}/${totalCategory[0]}`;
        if (totalCategory[1] === 0)
            totalTextAlternatives = "Not Applicable";
        else 
            totalTextAlternatives = `${totalTextAlternatives}/${totalCategory[1]}`;
        if (totalCategory[2] === 0)
            totalKeyboardAccessibility = "Not Applicable";
        else 
            totalKeyboardAccessibility = `${totalKeyboardAccessibility}/${totalCategory[2]}`;
        if (totalCategory[3] === 0)
            totalSizeSpacing = "Not Applicable";
        else 
            totalSizeSpacing = `${totalSizeSpacing}/${totalCategory[3]}`;
        if (totalCategory[4] === 0)
            totalColorContrast = "Not Applicable";
        else 
            totalColorContrast = `${totalColorContrast}/${totalCategory[4]}`;


        window.location.href = 'result.html';
        localStorage.setItem('totalSemanticElements', totalSemanticElements);
        localStorage.setItem('totalTextAlternatives', totalTextAlternatives);
        localStorage.setItem('totalKeyboardAccessibility', totalKeyboardAccessibility);
        localStorage.setItem('totalSizeSpacing', totalSizeSpacing);
        localStorage.setItem('totalColorContrast', totalColorContrast);
        // const resultSection = document.getElementById('finalResult');
        // if (totalCategory[0] === 0)
        //     totalSemanticElements = "Not Applicable";
        // else
        //     totalSemanticElements = `${totalSemanticElements}/${totalCategory[0]}`;
        // if (totalCategory[1] === 0)
        //     totalTextAlternatives = "Not Applicable";
        // else 
        //     totalTextAlternatives = `${totalTextAlternatives}/${totalCategory[1]}`;
        // resultSection.innerHTML = "Accessibility Score : " + "<br>" +
        //     "Semantic Element : " + totalSemanticElements + "<br>" +
        //     "Text Alternative : " + totalTextAlternatives;
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     let allCategory1 = document.querySelectorAll('input[type="checkbox"][value="category1"]');
//     let allCategory2 = document.querySelectorAll('input[type="checkbox"][value="category2"]');
//     let allCategory3 = document.querySelectorAll('input[type="checkbox"][value="category3"]');

//     let total1 = allCategory1.length;
//     let total2 = allCategory2.length;
//     let total3 = allCategory3.length;

//     const button = document.getElementById('submit');

//     let resultSection = document.getElementById('finalResult');

//     let category1Applicable = true;
//     let category2Applicable = true;
//     let category3Applicable = true;

//     const radioApplicable2_1 = document.getElementById('applicable2');
//     const radioApplicable2_2 = document.getElementById('notApplicable2');
    
//     radioApplicable2_1.addEventListener('click', function() {
//         for (let i = 0; i < allCategory2.length; i++) {
//             allCategory2[i].disabled = false;
//         }
//         category2Applicable = true;
//         total2 = allCategory1.length;
//         return;
//     });

//     radioApplicable2_2.addEventListener('click', function() {
//         for (let i = 0; i < allCategory2.length; i++) {
//             allCategory2[i].disabled = true;
//         }
//         category2Applicable = false;
//         total2 = 0;
//         return;
//     });

//     button.addEventListener('click', function() {
//         let check1 = 0;
//         let check2 = 0;
//         let check3 = 0;
//         let resultScore = 0;
//         if(category1Applicable == true) {
//             for (let i = 0; i < allCategory1.length; i++) {
//                 if(allCategory1[i].checked) {
//                     check1++;
//                 }
//             }
//         }

//         if(category2Applicable == true) {
//             for (let i = 0; i < allCategory2.length; i++) {
//                 if(allCategory2[i].checked) {
//                     check2++;
//                 }
//             }
//         }

//         if(category3Applicable == true) {
//             for (let i = 0; i < allCategory3.length; i++) {
//                 if(allCategory3[i].checked) {
//                     check3++;
//                 }
//             }
//         }

//         let fullScore = total1 + total2 + total3;
//         resultScore = check1 + check2 + check3;
//         let percentage = ((resultScore / fullScore) * 100).toFixed(2);
//         resultSection.innerHTML = "Accessibility Score : " + resultScore + "/" + fullScore +
//         "<br>" + "Accessibility Percentage : " + percentage + "%";

//     });
// });