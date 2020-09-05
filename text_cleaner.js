// Creating a text cleaner for a speech. Later will use this
// to analyse the topic of the speech with a word cloud

const fs = require('fs');
const raw_files = './raw/';
const clean_1_files = './clean_1/';
const clean_2_files = './clean_2/';
const clean_3_files = './clean_3/';
const clean_4_files = './clean_4/';

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

let bigcommon = {};
let remove_common_words = text => {
  let commonwords_hash = {};

  let blocklist = fs.readFileSync("./blocklist.txt", "utf8").split("\n").filter(word => word.length);
  let safelist = fs.readFileSync("./safelist.txt", "utf8").split("\n");

  text.split(" ").forEach(word => {
      if (blocklist.indexOf(word) != -1 || (word.length <= 3 && word.length > 0 && safelist.indexOf(word) == -1)) {
          commonwords_hash[word] = commonwords_hash[word] ? commonwords_hash[word] + 1 : 1;
          bigcommon[word] = bigcommon[word] ? bigcommon[word] + 1 : 1;
      }
  });
  let commonwords = Object.keys(commonwords_hash);

  // we want to return a word if it's not in the array
  text = text.split(" ").filter(word => commonwords.indexOf(word) == -1).join(" ");

  // remove the space before all sentence ends
  text = text.replace(/ \./g, ".");

  // remove consecutive dots to remove empty sentences
  text = text.replace(/\.+/g, ".");

  return text;
};

fs.readdirSync(clean_1_files, 'utf8').forEach(filename => {
  let filecontents = fs.readFileSync(clean_1_files + filename, 'utf8')
  // console.log(1, filename, filecontents.length);

  filecontents = clean_text(filecontents);
  fs.writeFileSync(clean_2_files + filename, filecontents, 'utf8');
  // console.log(2, filename, filecontents.length);

  filecontents = remove_common_words(filecontents);

  // Will add a system to combine words like this later if more such words are found
  // This is the example that made me start this project so I'm aware of this
  filecontents = filecontents.replace(/toy\b/g, "toys")
  fs.writeFileSync(clean_3_files + filename, filecontents, 'utf8');
  // console.log(3, filename, filecontents.length);
});
// console.log(JSON.stringify(Object.keys(bigcommon)));
