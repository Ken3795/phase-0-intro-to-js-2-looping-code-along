// Code your solutions in this file
// Part 1: The writeCards function
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage of writeCards function
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);
  
  // Part 2: The countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Example usage of countDown function
  countDown(10);
  
  // Export the functions if needed for testing
  module.exports = {
    writeCards,
    countDown
  };
  