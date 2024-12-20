// Variáveis globais
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timer;

// Funções do jogo
window.startGame = function() {
    currentQuestion = 0;
    score = 0;
    lives = 3;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    loadQuestion();
    updateHearts();
}

window.nextQuestion = function() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        endGame();
    } else {
        loadQuestion();
    }
}

function loadQuestion() {
    document.getElementById('question-number').textContent = currentQuestion + 1;
    document.getElementById('score').textContent = score;
    
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.className = 'answer-btn';
        button.onclick = () => selectAnswer(answer);
        answersDiv.appendChild(button);
    });

    document.getElementById('explanation').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('timer-bar').style.width = '100%';
    
    startTimer();
    updateHearts();
}

function startTimer() {
    if (timer) clearInterval(timer);
    let timeLeft = 100;
    
    timer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer-bar').style.width = timeLeft + '%';
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            lives--;
            updateHearts();
            if (lives <= 0) {
                endGame();
            } else {
                nextQuestion();
            }
        }
    }, 100);
}

function selectAnswer(answer) {
    clearInterval(timer);
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === answer.text) {
            button.classList.add(answer.correct ? 'correct' : 'incorrect');
        }
    });

    if (answer.correct) {
        score += 10;
        document.getElementById('score').textContent = score;
    } else {
        lives--;
        updateHearts();
    }

    const explanation = document.getElementById('explanation');
    explanation.textContent = questions[currentQuestion].explanation;
    explanation.style.display = 'block';
    
    if (lives <= 0) {
        setTimeout(endGame, 1500);
    } else {
        document.getElementById('next-btn').style.display = 'block';
    }
}

function updateHearts() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = Array(lives).fill('❤️').map(heart => 
        `<span class="heart">${heart}</span>`
    ).join('');
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-score').textContent = score;
    
    let achievement = document.getElementById('achievement');
    if (score >= 180) {
        achievement.textContent = "🏆 Mestre das Escrituras!";
    } else if (score >= 140) {
        achievement.textContent = "📚 Estudioso Dedicado!";
    } else if (score >= 100) {
        achievement.textContent = "🌟 Bom Conhecimento!";
    } else {
        achievement.textContent = "🌱 Continue Estudando!";
    }
}