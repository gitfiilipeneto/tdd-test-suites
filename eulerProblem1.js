//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//testar %3==0??
// testar os outputs, no caso a variavel sum é sempre obrigatoriamente maior que o input

//testar !%5==0
//testar %3==0 || %5==0
//

const multiples = (num) => {

    let sum = 0
    let limit = num
    
    if(num <=4 ){
        return "stop"
    }else{
        for (let i = 0; i < limit; i++) {

            let multiplesOfThree = i % 3 === 0
            let multiplesOffive = i % 5 === 0
    
            let bothMultiples = multiplesOfThree && multiplesOfThree
    
            if (bothMultiples || multiplesOfThree || multiplesOffive) {
    
                sum = sum + i
    
            }
        }
    
        return sum
    }
    

}

module.exports = multiples