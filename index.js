function practice() {
    let array = [];

    for (let i = 0; i < 100; i++) {
        array.push(i);
    }
    
    console.log(array);

    let newArray = array.map(function (item) {
        return item * 3;
    })

    console.log(newArray);
}

practice();