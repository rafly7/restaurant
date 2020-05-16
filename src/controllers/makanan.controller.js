const getMakananList = async (req, res, service) => {
    try {
        let makanan;
        if (req.query.id) {
            const id = req.query.id;
            makanan = await service.getMakananById(id)
        } else {
            makanan = await service.getAllMakanan();
        }
        res.status(200);
        res.json(makanan);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewMakanan = async (req, res, service) => {
    try {
        const makanan = req.body;
        const newMakanan = await service.createMakanan(makanan);
        res.status(200);
        res.json(newMakanan);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateMakanan = async (req, res, service) => {
    try {
    const makanan = req.body;
    const updatedMakanan = await service.updateMakanan(makanan);
    res.send(updatedMakanan);
    } catch (e) {
        res.status(500);
        res.json({})
    }
};

const deleteMakanan = async (req, res, service) => {
    try {
    const makananId = req.params.id;
    console.log(makananId)
    const deleteMakanan = await service.deleteMakanan(makananId);
    res.send(deleteMakanan);
    } catch (e) {
        res.status(500)
        res.json({})
    }
};

module.exports = {
    getMakananList, addNewMakanan, updateMakanan, deleteMakanan
};