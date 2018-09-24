module.exports = function check(str, bracketsConfig) {
  // your solution

    let opening = [];
    let closing = [];
    let array = [];

    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        opening.push(bracketsConfig[i][0]);
        closing.push(bracketsConfig[i][1]);
    }

    for (let i = array.length - 1; i >= 0; i--) {
            for (let j = 0; j < opening.length; j++) {
                if (array[i] == opening[j] && array[i + 1] == closing[j]) {
                    array.splice(i, 2);
                }
            }
    }

    return (array.length == 0);
};
