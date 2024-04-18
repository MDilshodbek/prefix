// const strs = ["flower", "flow", "flight"];

// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";
//   strs.sort();
//   console.log(strs);

//   console.log(strs[0]);
//   console.log(strs[strs.length - 1]);
//   const first = strs[0];
//   const last = strs[strs.length - 1];
//   let i = 0;
//   while (i < first.length && first[i] === last[i]) {
//     i++;
//   }
//   console.log(first.length);
//   console.log(first[i]);
//   console.log(last[i]);
//   return first.substring(0, i);
// }

// longestCommonPrefix(strs);

const strs = ["dog", "racecar", "car"];

function name(strs) {
  if (strs.length === 0) return "";

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
}
console.log(name(strs));
