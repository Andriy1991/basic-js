const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let newArr = [];
    let result = '';
    members.forEach(element => {
      if (typeof element === "string") {
        for (let i = 0; i < element.length; i += 1) {
          if (element[i] !== ' ') {
            newArr.push(element[i].toUpperCase());
            break;
          }
        }
      }
    });
    newArr.sort();  
    result = newArr.join('');
    return result;
  } else {
    return false;
  }
};
