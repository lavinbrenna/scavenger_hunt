export default class Riddle{
    constructor(image, hint, answer){
        this.title = title;
        this.hint = hint;
        this.answer = answer;
    }
    getAnswer(){
        return this.answer;
    }
    getHint(){
        return this.hint;
    }

    getImage(){
        return this.image;
    }
}