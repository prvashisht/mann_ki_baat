// Creating a text cleaner for a speech. Later will use this
// to analyse the topic of the speech with a word cloud

const fs = require('fs');
const raw_files = './raw/';
const clean_1_files = './clean_1/';
const clean_2_files = './clean_2/';
const clean_3_files = './clean_3/';
const clean_4_files = './clean_4/';

// testing with 1 file first
// let filename = '20200830.txt';
// let filecontents = fs.readFileSync(clean_1_files + filename, 'utf8')

const clean_text = text => {
  text = text.toLowerCase();

  // remove new-line
  text = text.replace(/\n/g, " ");

  // remove most common characters, and numbers
  text = text.replace(/‘|’|\/|\d+|"|“|”|,|;|–|…|-|‘|’|'|!|#|%|&|\*|\(|\)|_|\[|\]|\{|\}|:|<|>/g, " ");

  // add a space before all sentence ends so the last word isn't added in short words
  text = text.replace(/\.|\?/g, " . ");

  // replace all places with multiple "space" with a single space
  text = text.replace(/\s+/g, " ");

  return text;
}

let remove_common_words = text => {
  let commonwords_hash = {};
  let safelist  = ["toy", "", ".", "our", "eco", "bow", "fun", "big", "hub", "act"];
  let blocklist = [];

  // splitting the text on each space
  text.split(" ").forEach(word => {
      // all short words except the ones above
      if (word.length <= 3 && word.length > 0 && safelist.indexOf(word) == -1) {
          commonwords_hash[word] = commonwords_hash[word] ? commonwords_hash[word] + 1 : 1;
      }
  });
  let commonwords = Object.keys(commonwords_hash);

  // we want to return a word if it's not in the array
  text = text.split(" ").filter(word => commonwords.indexOf(word) == -1).join(" ");

  return text;
};

fs.readdirSync(clean_1_files, 'utf8').forEach(filename => {
  let filecontents = fs.readFileSync(clean_1_files + filename, 'utf8')
  console.log(1, filename, filecontents.length);

  filecontents = clean_text(filecontents);
  fs.writeFileSync(clean_2_files + filename, filecontents, 'utf8');
  console.log(2, filename, filecontents.length);

  filecontents = remove_common_words(filecontents);
  fs.writeFileSync(clean_3_files + filename, filecontents, 'utf8');
  console.log(3, filename, filecontents.length);
});

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
