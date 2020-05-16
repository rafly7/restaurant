let decoded = require('../../config/decodedToken');

const getKomentarList = async (req, res, service) => {
    try {
        let komentar;
        if (req.query.id) {
            const id = req.query.id;
            komentar = await service.getKomentarById(id)
        } else {
            // const {bureau} = req.headers;
            // //console.log(bureau)
            // const {user_name} = await decoded(bureau);
            // console.log(user_name)
            komentar = await service.getAllKomentar();
        }
        res.status(200);
        res.json(komentar);
    } catch (e) {
        res.status(500);
        res.json({});
    }

};

const addNewKomentar = async (req, res, service) => {
    try {
        const komentar = req.body;
        const { bureau } = req.headers;
        const { user_name } = await decoded(bureau);
        console.log(user_name)
        const newKomentar = await service.createKomentar(user_name, komentar);
        res.status(200);
        res.json(newKomentar);
    } catch (e) {
        res.status(500);
        res.json({});
    }
};

const updateKomentar = async (req, res, service) => {
    try {
        const komentar = req.body;
        const updatedKomentar = await service.updateKomentar(komentar);
        res.send(updatedKomentar);
    } catch (e) {
        res.status(500);
        res.json({})
    }
};

const deleteKomentar = async (req, res, service) => {
    try {
        const komentarId = req.params.id;
        const deleteKomentar = await service.deleteKomentar(komentarId);
        res.send(deleteKomentar);
    } catch (e) {
        res.status(500)
        res.json({})
    }
};

module.exports = {
    getKomentarList, addNewKomentar, updateKomentar, deleteKomentar
};