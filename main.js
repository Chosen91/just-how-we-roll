/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

 const singleImage = function (roll) {
  return `./images/d6/${roll}.png`;
};


/*******************
 * EVENT LISTENERS *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/
 for (const button of buttons) {
  button.addEventListener('click', function(event) {


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
 const getMean = function (rolls) {
  let total = 0;
  for (const roll of rolls) {
    total += roll;
  }
  return (total / rolls.length).toFixed(2);
};

const getMedian = function (rolls) {
  const sorted = sortByNumber(rolls);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return getMean([sorted[mid], sorted[mid - 1]]);
  } else {
    return sorted[mid].toFixed(2);
  }
}
}
}