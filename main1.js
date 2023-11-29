document.addEventListener('DOMContentLoaded', function () {
    let totalCategoryQuestions = [5, 3, 3, 4, 3];
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
            let applicableQuestions = numQuestions;
            for (let question = 1; question <= numQuestions; question++) {
                const selectedValue = document.querySelector(`input[name="category${category}_${question}"]:checked`).value;
                if (selectedValue === "1") {
                    score += 1;
                } else if (selectedValue === "na") {
                    applicableQuestions -= 1;
                }
            }
            return { score, applicableQuestions };
        };

        const result1 = calculateTotalForCategory(numCategory1, 1);
        const result2 = calculateTotalForCategory(numCategory2, 2);
        const result3 = calculateTotalForCategory(numCategory3, 3);
        const result4 = calculateTotalForCategory(numCategory4, 4);
        const result5 = calculateTotalForCategory(numCategory5, 5);

        const totalSemanticElements = result1.score;
        const totalTextAlternatives = result2.score;
        const totalKeyboardAccessibility = result3.score;
        const totalSizeSpacing = result4.score;
        const totalColorContrast = result5.score;

        const totalApplicableQuestions = result1.applicableQuestions + result2.applicableQuestions + result3.applicableQuestions + result4.applicableQuestions + result5.applicableQuestions;

        const totalActualScore = totalSemanticElements + totalTextAlternatives + totalKeyboardAccessibility + totalSizeSpacing + totalColorContrast;

        const overallPercentage = ((totalActualScore / totalApplicableQuestions) * 100).toFixed(2);

        const descriptions = [
            "0-25% - Your website needs significant improvements to meet accessibility standards.",
            "26-50% - There is room for improvement to enhance accessibility.",
            "51-75% - Your website shows good accessibility practices, but there's still room for enhancement.",
            "76-100% - Your website has excellent accessibility practices and is close to meeting all standards."
        ];

        const rangeIndex = Math.floor((overallPercentage - 1) / 25);
        const description = descriptions[rangeIndex];

        window.location.href = 'result.html';

        localStorage.setItem('totalSemanticElements', `${totalSemanticElements}/${result1.applicableQuestions}`);
        localStorage.setItem('totalTextAlternatives', `${totalTextAlternatives}/${result2.applicableQuestions}`);
        localStorage.setItem('totalKeyboardAccessibility', `${totalKeyboardAccessibility}/${result3.applicableQuestions}`);
        localStorage.setItem('totalSizeSpacing', `${totalSizeSpacing}/${result4.applicableQuestions}`);
        localStorage.setItem('totalColorContrast', `${totalColorContrast}/${result5.applicableQuestions}`);
        localStorage.setItem('totalActualScore', totalActualScore);
        localStorage.setItem('totalPossibleScore', totalApplicableQuestions);
        localStorage.setItem('overallPercentage', overallPercentage);
        localStorage.setItem('description', description);
    });
});