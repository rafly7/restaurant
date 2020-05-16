const getSumLike = async (req, res, service) => {
    let reporting = await service.getSumLike()
    res.send(reporting[0])
}

const getTerfavorit = async (req, res, service) => {
    let reporting = await service.getTerfavorit()
    // for(let res in reporting[0]) {
    //     const {terfavorit} = reporting[0][res]
    //     //console.log(terfavorit)
    //     // console.log(reporting[0][res])
    // }
    //console.log(reporting[0][1])
    //console.log(reporting[0].length)
    for (let x of reporting[0]) {
        const {terfavorit} = x;
        console.log(x)
    }
    console.log(reporting)
    // console.log(reporting[0])
    res.send(reporting)
}
module.exports = { getSumLike, getTerfavorit };