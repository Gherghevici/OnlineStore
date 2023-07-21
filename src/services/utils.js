
export const formatQueryParams = (queryParams) => {
    const arr = [];
    if(Object.values(queryParams).some(value => value === undefined || value === null || value === NaN))return "";
    Object.keys(queryParams).forEach(k => {
        arr.push(`${k}=${queryParams[k]}`);
    })
    if(arr.length > 0){
        return `?${arr.join('&')}`
    }
    return "";
}