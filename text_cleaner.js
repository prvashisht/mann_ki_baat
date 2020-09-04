const fs = require('fs');
const raw_files = './raw/';
const clean_1_files = './clean_1/';
const clean_2_files = './clean_2/';
const clean_3_files = './clean_3/';
const clean_4_files = './clean_4/';

fs.readdirSync(clean_1_files, 'utf8').forEach(filename => {
  let filecontents = fs.readFileSync(clean_1_files + filename, 'utf8')
  console.log(filename, filecontents);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n\n\n\n\n');
});


// /*
//  *
// text.toLowerCase().replace(/‘|’|\/|\d+|"|“|”|,|;|–|…|-|‘|’|'|!|#|%|&|\*|\(|\)|_|\[|\]|\{|\}|:|<|>/g, " ").replace(/\s+| the /g, " ");
// 
// let lines = text.split(/\.|\?/).map(line => {
//     line = line.trim();
//     let line1 = line;
//     line = line.split(" ").filter(word => word.length > 2).map(word => word.trim()).join(" ");
//     if (line1 != line) {
//         console.log(line1);
//         console.log(line);
//         console.log("\n\n\n");
//     }
// 
//     if (line.length)
//         return line;
// })
// 
// 
// let i = 0;
// let timer = setInterval(() => {
//     $("#text").value = $("#text").value + lines[i++];
//     $("#go").click();
//     if (!lines[i]) {
//         i = 0;
//         clearInterval(timer);
//     }
// }, 2500);
// 
// *
// * /
