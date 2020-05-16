const getKulinerList = async (req, res, service) => {
    try {
        let kuliner;
        if (req.query.id) {
            const id = req.query.id;
            kuliner = await service.getKulinerById(id)
        } else {
            kuliner = await service.getAllKuliner();
        }
        res.status(200);
        res.json(kuliner);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewKuliner = async (req, res, service) => {
    try {
        const kuliner = req.body;
        const newKuliner = await service.createKuliner(kuliner);
        res.status(200);
        res.json(newKuliner);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateKuliner = async (req, res, service) => {
    try {
    const kuliner = req.body;
    const updatedKuliner = await service.updateKuliner(kuliner);
    res.send(updatedKuliner);
    } catch (e) {
        res.status(500);
        res.json({})
    }
};

const deleteKuliner = async (req, res, service) => {
    try {
    const kulinerId = req.params.id;
    console.log(kulinerId)
    const deleteKuliner = await service.deleteKuliner(kulinerId);
    res.send(deleteKuliner);
    } catch (e) {
        res.status(500)
        res.json({})
    }
};

module.exports = {
    getKulinerList, addNewKuliner, updateKuliner, deleteKuliner
};