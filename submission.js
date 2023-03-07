const findSum = function(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
         sum += array[i];
}
        return sum;
};
  




const findFrequency = function(array) {

        var frequecies = {};
        var mostCom = array[0], mostFreq = 1;
    


    for (let i = 0; i < array.length; i++) {
        var current = array[i];
        if (frequecies[current] == null)
            frequecies[current] = 1;
            else
            frequecies[current]++;

        if (frequecies[current] > mostFreq){
            mostCom = current;
            mostFreq = frequecies[current];

        }
        

    }

    let leastCom = Object.keys(frequecies).reduce((leastCom,v) => frequecies[v] < frequecies[leastCom] ? v : leastCom);


    return {most: mostCom, least: leastCom};
  };









  
  const isPalindrome = function(str) {
    var stringSplit = str.split('');
    var arrayReverse = stringSplit.reverse();
    var stringReversed = arrayReverse.join("");
        
   if (str === stringReversed) {
    return true;
   } else {
    return false;
   } 

   };
     

    

 
  
  const largestPair = function(array) {
   if (array.length > 1) {
        let largestProduct = array[0] * array[1];

        for (let i = 1; i < array.length; i++) {
            if (i != array.length -1){
                const adjacentPair = array[i] * array[i + 1];
                if (adjacentPair > largestProduct){
                    largestProduct = adjacentPair;
                }
            }
            
        }


        return largestProduct;
     }
     return null;

  };











  
  const removeParenth = function(str) {
    var splitString = str.split('');
    var openParenthIndex = str.indexOf('(');
    var closedParenthIndex =str.indexOf(')');

    if(openParenthIndex === -1 || closedParenthIndex === -1){
        return str;
    }
   
    splitString.splice(openParenthIndex,( closedParenthIndex - openParenthIndex + 1));
    
    var parenthesesRemoved = splitString.join('');
         return removeParenth(parenthesesRemoved);

  };

   






  
  const scoreScrabble = function(str) {
    var letterPoints = { a:1, b:3, c:3, d:2, e:1, f:4, g:2, h:4, i:1, j:8, k:5, l:1, m:3, n:1, o:1, p:3, q:10, r:1, s:1, t:1, u:1, v:4, w:4, x:8, y:4, z:10
    };
    let totalPointsEarned = 0;
    var split = str.split('');
        
        for (let i = 0; i < split.length; i++) {
            let chosenWord  = split[i];
            
             totalPointsEarned += letterPoints[chosenWord];      
        
        }

            return totalPointsEarned;
  };
