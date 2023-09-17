class GuessingGame {
    constructor() {
        this.maxNumber;
        this.minNumber;
        this.number;
      }
      
      setRange(min, max) {
        this.maxNumber = max;
        this.minNumber = min;
      }
    
      guess() {
        this.number = Math.round((this.minNumber + this.maxNumber) / 2)
        return this.number;
      }
    
      lower() {
        this.maxNumber = this.number;
      }
    
      greater() {
        this.minNumber = this.number;
      }  
}

module.exports = GuessingGame;
