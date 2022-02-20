const sentence = "hello there from lighthouse labs";


const typewriter = function(sentence) {
  let x = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);

    }, x);

    x += 50;
    
  }
  setTimeout(() => {
    console.log("\n");

  }, sentence.length * 50);
};

typewriter(sentence);