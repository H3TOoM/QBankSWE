// Quiz Data
const quizData = [
    { id: 1, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 2, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 3, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 4, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 5, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 6, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 7, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 8, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 9, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 10, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 11, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 12, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 13, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 14, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 15, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 16, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 17, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 18, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 19, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 20, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 21, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 22, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 23, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 24, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 25, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 26, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 27, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 28, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 29, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 30, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 31, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 32, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 33, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 34, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 35, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 36, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 37, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 38, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 39, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 40, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 41, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 42, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 43, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 44, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 45, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 46, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 47, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 48, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 49, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 50, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 51, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 52, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 53, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 54, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 55, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 56, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 57, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 58, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 59, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 60, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    { id: 61, question: "Waterfall is a ____ model.", type: "multiple", options: ["Plan-driven", "Agile", "Spiral", "RAD"], correct: 0 },
    { id: 62, question: "Incremental development provides early ____.", type: "multiple", options: ["Maintenance", "Value", "Cost", "Reuse"], correct: 1 },
    { id: 63, question: "Requirements validation checks ____.", type: "multiple", options: ["Code", "Requirements", "UI", "Database"], correct: 1 },
    { id: 64, question: "Acceptance testing uses ____ data.", type: "multiple", options: ["Synthetic", "Customer", "Random", "Developer"], correct: 1 },
    { id: 65, question: "Activity diagrams represent ____.", type: "multiple", options: ["Classes", "Workflow", "Objects", "Tables"], correct: 1 },
    { id: 66, question: "Use cases describe the system from the ____ perspective.", type: "multiple", options: ["Tester", "Manager", "User", "DBA"], correct: 2 },
    { id: 67, question: "«include» represents ____ behavior.", type: "multiple", options: ["Conditional", "Shared", "Optional", "External"], correct: 1 },
    { id: 68, question: "«extend» represents ____ behavior.", type: "multiple", options: ["Shared", "Mandatory", "Conditional", "Inherited"], correct: 2 },
    { id: 69, question: "Swim-lanes identify ____.", type: "multiple", options: ["Errors", "Roles", "Actors", "Objects"], correct: 1 },
    { id: 70, question: "Business rules constrain how a business is ____.", type: "multiple", options: ["Tested", "Run", "Designed", "Implemented"], correct: 1 },
    
    // True/False Questions
    { id: 71, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 72, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 73, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 74, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 75, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true },
    { id: 76, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 77, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 78, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 79, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 80, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true },
    { id: 81, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 82, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 83, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 84, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 85, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true },
    { id: 86, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 87, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 88, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 89, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 90, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true },
    { id: 91, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 92, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 93, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 94, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 95, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true },
    { id: 96, question: "Software evolution is necessary as requirements change.", type: "trueFalse", correct: true },
    { id: 97, question: "Waterfall easily accommodates changing requirements.", type: "trueFalse", correct: false },
    { id: 98, question: "Activity diagrams can show parallel activities.", type: "trueFalse", correct: true },
    { id: 99, question: "Use-case diagrams show time ordering.", type: "trueFalse", correct: false },
    { id: 100, question: "Scenarios are instances of use cases.", type: "trueFalse", correct: true }
];

// Global Variables
let currentQuestion = 0;
let userAnswers = [];
let quizSubmitted = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userAnswers = new Array(quizData.length).fill(null);
});

// Start Quiz
function startQuiz() {
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizSubmitted = false;
    displayQuestion();
    updateNavigationButtons();
}

// Display Question
function displayQuestion() {
    const question = quizData[currentQuestion];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <div class="question-title">
            <span class="question-number">Question ${currentQuestion + 1}:</span> ${question.question}
        </div>
        <div class="options">
    `;

    if (question.type === 'multiple') {
        question.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestion] === index;
            const isCorrect = quizSubmitted && index === question.correct;
            const isWrong = quizSubmitted && isSelected && index !== question.correct;
            
            let classes = 'option';
            if (isSelected) classes += ' selected';
            if (isCorrect) classes += ' correct';
            if (isWrong) classes += ' incorrect';
            
            html += `
                <label class="${classes}">
                    <input type="radio" name="option" value="${index}" 
                        ${isSelected ? 'checked' : ''} 
                        ${quizSubmitted ? 'disabled' : 'onchange="saveAnswer(' + index + ')"'}
                    />
                    <label>${option}</label>
                </label>
            `;
        });
    } else if (question.type === 'trueFalse') {
        [true, false].forEach((value, index) => {
            const label = value ? 'True' : 'False';
            const isSelected = userAnswers[currentQuestion] === value;
            const isCorrect = quizSubmitted && value === question.correct;
            const isWrong = quizSubmitted && isSelected && value !== question.correct;
            
            let classes = 'option';
            if (isSelected) classes += ' selected';
            if (isCorrect) classes += ' correct';
            if (isWrong) classes += ' incorrect';
            
            html += `
                <label class="${classes}">
                    <input type="radio" name="option" value="${value}" 
                        ${isSelected ? 'checked' : ''} 
                        ${quizSubmitted ? 'disabled' : 'onchange="saveAnswer(' + value + ')"'}
                    />
                    <label>${label}</label>
                </label>
            `;
        });
    }

    html += `</div>`;
    container.innerHTML = html;
    
    // Update Progress
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

// Save Answer
function saveAnswer(value) {
    userAnswers[currentQuestion] = value;
}

// Next Question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateNavigationButtons();
        window.scrollTo(0, 0);
    }
}

// Update Navigation Buttons
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = currentQuestion === quizData.length - 1;
}

// Submit Quiz
function submitQuiz() {
    quizSubmitted = true;
    displayQuestion();
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    
    // Calculate Results
    calculateResults();
    
    // Show Results
    setTimeout(() => {
        document.getElementById('quizScreen').classList.remove('active');
        document.getElementById('resultsScreen').classList.add('active');
        window.scrollTo(0, 0);
    }, 500);
}

// Calculate Results
function calculateResults() {
    let correct = 0;
    
    quizData.forEach((question, index) => {
        let answer = userAnswers[index];
        if (question.type === 'multiple') {
            if (answer === question.correct) correct++;
        } else if (question.type === 'trueFalse') {
            if (answer === question.correct) correct++;
        }
    });
    
    const percentage = Math.round((correct / quizData.length) * 100);
    const wrong = quizData.length - correct;
    
    // Update Score Display
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    
    // Update Score Circle
    const circle = document.getElementById('scoreCircle');
    const gradientPercentage = (percentage / 100) * 360;
    circle.style.background = `conic-gradient(var(--primary-color) 0%, var(--primary-color) ${gradientPercentage}deg, rgba(124, 58, 237, 0.1) ${gradientPercentage}deg)`;
    
    // Score Message
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excellent! Outstanding performance!';
    } else if (percentage >= 80) {
        message = '👏 Great! Very good work!';
    } else if (percentage >= 70) {
        message = '✅ Good! Keep up the effort!';
    } else if (percentage >= 60) {
        message = '📚 Acceptable! Review the basics!';
    } else {
        message = '💪 Needs improvement - Practice more!';
    }
    
    document.getElementById('scoreMessage').textContent = message;
    
    // Generate Review
    generateReview();
}

// Generate Review
function generateReview() {
    const container = document.getElementById('reviewContainer');
    let html = '<h3 style="margin-bottom: 20px; margin-top: 30px; border-top: 2px solid var(--dark-border); padding-top: 30px;">📋 Answer Review</h3>';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        let correctAnswerText = '';
        
        if (question.type === 'multiple') {
            isCorrect = userAnswer === question.correct;
            userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Not answered';
            correctAnswerText = question.options[question.correct];
        } else if (question.type === 'trueFalse') {
            isCorrect = userAnswer === question.correct;
            userAnswerText = userAnswer === null ? 'Not answered' : (userAnswer ? 'True' : 'False');
            correctAnswerText = question.correct ? 'True' : 'False';
        }
        
        const statusIcon = isCorrect ? '✓' : '✗';
        const classes = isCorrect ? 'review-item correct' : 'review-item incorrect';
        
        html += `
            <div class="${classes}">
                <div class="review-question">
                    <span class="status">${statusIcon}</span>
                    <span>Q${index + 1}: ${question.question}</span>
                </div>
                <div class="review-answer">
                    <div class="your-answer">
                        <strong>Your answer:</strong> ${userAnswerText}
                    </div>
                    ${!isCorrect ? `<div class="correct-answer"><strong>Correct answer:</strong> ${correctAnswerText}</div>` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Exit Quiz
function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz? All answers will be lost.')) {
        document.getElementById('quizScreen').classList.remove('active');
        document.getElementById('startScreen').classList.add('active');
        quizSubmitted = false;
        currentQuestion = 0;
        userAnswers = new Array(quizData.length).fill(null);
        document.getElementById('submitBtn').style.display = 'inline-block';
        document.getElementById('prevBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'inline-block';
    }
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizSubmitted = false;
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('prevBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'inline-block';
    window.scrollTo(0, 0);
}
