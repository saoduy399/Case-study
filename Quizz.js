class Quizz {
    constructor(question, anwsers, correct) {
        this.question = question;
        this.anwsers = anwsers;
        this.correct = correct;
    }

    checkCorrect(answer) {
        let point = 0;
        if (answer === this.correct) {
            return true;
        } else {
            return false;
        }
    }

    display() {
        let str = `
        <h1>${this.question}</h1>
        <div class="choice-container">
        <p class="choice-text" onclick="checkAnswer('${this.anwsers[0]}')">${this.anwsers[0]}</p>
        </div>
        <div class="choice-container">
        <p class="choice-text" onclick="checkAnswer('${this.anwsers[1]}')">${this.anwsers[1]}</p>
        </div>
        <div class="choice-container">
        <p class="choice-text" onclick="checkAnswer('${this.anwsers[2]}')">${this.anwsers[2]}</p>
        </div>
        <div class="choice-container">
        <p class="choice-text" onclick="checkAnswer('${this.anwsers[3]}')">${this.anwsers[3]}</p>
        </div>
        <button id="point">finish</button> `;
        return str;
    }
}

