const getAllPermission = async (req, res, service) => {
    let permissions = await service.getAllPermission()
    res.send(permissions)
}

const addNewPermission = async (req, res, service) => {
    let body = req.body;
    let permission = await service.addPermission(body);
    res.send(permission)
}

const updatePermission = async (req, res, service) => {
    let body = req.body;
    let permission = await service.updatePermission(body);
    res.send(permission)
}

const deletePermission = async (req, res, service) => {
    let id = req.params.id;
    let permission = await service.deletePermission(id)
    res.send(permission)
}

module.exports = { getAllPermission, addNewPermission, updatePermission, deletePermission };