function sortString(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}

function sortAlphabets(text) {
  return text.split('').sort().join('');
};

export default sortString;