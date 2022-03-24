import { fetchData, fetchPastLocal } from "../api/api";
export const fetchPastLocalHandle = async (timestamp) => {

    const timestamptemp = calDateToSec(timestamp);
    let time = 0;
    let timearr = [];
    let timeString = '';
    let x = 0;
    let timearrchild = [];
    while (20000 >= time) {
        timearrchild.push(time);
        if (x === 19) {
            for (var i in timearrchild) {
                if (timeString === '') {
                    timeString += timearrchild[i].toString();
                } else {
                    timeString += ',' + timearrchild[i].toString();
                }
            }
            timearr.push(timeString);
            x = 0;
            timearrchild = []
            timeString = '';
        }
        time += 200;
        x += 1;
    }

    return await fetchPastLocal(timearr);
}
const calDateToSec = (secondTime) => {
    // '3/22/2001/19/00'
    let stringTime = 0;
    const arr = secondTime.split('/');
    arr.map((item) => parseInt(item));
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr[i] = arr[i] * 30 * 24 * 60 * 60;
        } if (i === 1) {
            arr[i] = arr[i] * 24 * 60 * 60;
        } if (i == 2) {
            arr[i] = (arr[i] - 1970) * 365 * 24 * 60 * 60;
        } if (i == 3) {
            arr[i] *= 60 * 60;
        }
        if (i === 4) {
            arr[i] *= 60;
        }
    }
    for (var i in arr) {
        stringTime += arr[i]
    }
    return stringTime;
}
export const fetchDataHandle = async () => {
    return await fetchData();
}