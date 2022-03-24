const url = 'https://api.wheretheiss.at/v1/satellites/25544';
//https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=&units=kilometers
export const fetchData = async () => {
    const respone = await fetch(url);
    const data = await respone.json();
    return data;
}
export const fetchPastLocal = async (timearr) => {
    let changeurl;
    let respone;
    let data;
    let localresultarr = [];
    for (const i in timearr) {
        changeurl = `${url}/positions?timestamps=${timearr[i]}&units=kilometers`;
        respone = await fetch(changeurl);
        data = await respone.json();
        localresultarr.push(data.map((item) => [item.latitude, item.longitude]))

    }
    let localresult = [];
    for (const i in localresultarr) {
        localresult = localresult.concat(localresultarr[i]);
    }
    return localresult;
}
