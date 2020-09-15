const repeatNumbers = function(data) {
    const newArr = data.map(el => String(el[0]).repeat(el[1]));
    return newArr.join("");
};

// console.log(repeatNumbers([[1, 10]]));

// console.log(repeatNumbers([[1, 2], [2, 3]]));
