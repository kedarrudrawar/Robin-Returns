export function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function beautifyReturns(num){
    if(parseFloat(num) === 0) return '-';

    return num !== null ? 
        (num >= 0 ? '+$' + numberWithCommas(parseFloat(num).toFixed(2)) : 
        '-$' + numberWithCommas(Math.abs(parseFloat(num)).toFixed(2))) : '-';
}

export function beautifyPrice(num){
    return num !== 0 && num ? '$' + numberWithCommas((parseFloat(num).toFixed(2))) : '-';
}

export function zeroesArray(length) {
    return Array.apply(null, Array(length)).map(() => 0);
}

export const numDict = {
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};