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

export function beautifyPercent(perc){
    let sign = perc >= 0 ? '+' : '-';
    return `${sign}${perc.toFixed(2)}%`;
}

export function zeroesArray(length) {
    return Array.apply(null, Array(length)).map(() => 0);
}

export const numDict = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};

