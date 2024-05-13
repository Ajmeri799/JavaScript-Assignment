// Use lastIndexOf to determine the position of the last occurrence of a script.

let sentence =
  "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.";

let sentence_script = "that is";
console.log(
  "last occurrence of script :",
  sentence.lastIndexOf(sentence_script)
);
