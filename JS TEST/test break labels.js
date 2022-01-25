outer: for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("continue");
    continue;
  }
  if (i > 15) {
    console.log("break to outer");
    break outer;
  }
  console.log(`i[${i}] = ${i * 10}`);
}
console.log("Готово!");

// [Running] node "c:\HTML+\JS_PB_Transfer\JS TEST\test break labels.js"
// i[0] = 0
// i[1] = 10
// i[2] = 20
// i[3] = 30
// i[4] = 40
// i[5] = 50
// i[6] = 60
// i[7] = 70
// i[8] = 80
// i[9] = 90
// continue
// i[11] = 110
// i[12] = 120
// i[13] = 130
// i[14] = 140
// i[15] = 150
// break to outer
// Готово!

// [Done] exited with code=0 in 0.314 seconds
