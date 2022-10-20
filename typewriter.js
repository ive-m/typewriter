const sentence = "hello there from lighthouse labs";
let tim = 0;

for (const char of sentence) {
  setTimeout(()=>{
    process.stdout.write(char);
  }, tim);
  tim += 50;

}
setTimeout(()=>{
  process.stdout.write("\n");
},tim);

