class Game {
    constructor() {
        this.quizs=[]
        this.current=0;
    }

    addQuizz(quiz){
        this.quizs.push(quiz);
    }

    showQuiz(){
        console.log(this.quizs[this.current])
        return this.quizs[this.current].display();
    }

    getCurrentQuiz(){
        return this.quizs[this.current]
    }

    nextQuiz() {
        this.current++;
    }
}