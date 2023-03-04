function capitalize(txt){
    if(txt === null || txt === undefined || txt === ''){
        return txt
    }
    
    return txt[0].toUpperCase() + txt.slice(1);   
}


function reverseString(txt){
    if(txt === null || txt === undefined || txt === ''){
        return txt
    }
    
    let empty = '';
    for (let i = txt.length - 1; i >= 0; i--){
        empty += txt[i]; //concatenacao
    }
    return empty;
}

function analyzeArray(arr){

    if(arr === null || arr === undefined){
        return 'invalid input'
    }

    const length = arr.length;

    if(length === 0) {
        throw new Error ("Array is empty!");
    }
                                    //accumulator + currentValue, initialValue
    const sum = arr.reduce((a, b) => a + b, 0);
    arr.sort(function(a, b){return a - b}); //The default sort order is ascending

    return {
        average: sum/length,
        min: arr[0],
        max: arr[length - 1],
        length: length
    }
}

export { capitalize, reverseString, analyzeArray };
