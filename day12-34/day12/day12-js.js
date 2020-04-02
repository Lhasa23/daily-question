function urlParam(url){
    const param = {}
    url.split("?")[1].replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2)
    return param
}
console.log(urlParam('https://github.com/kk?tab=stars&assetId=311&page=DETAIL&projectPhase=2'))