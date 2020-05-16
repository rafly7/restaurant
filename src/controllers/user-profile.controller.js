const logEvent = require('../events/myEmitter');
const getAllUserProfile = async (req, res, service) => {
    try {
        let userProfiles;
        if (req.query.id) {
            const id = req.query.id;
            userProfiles = await service.getUserProfileById(id);
        } else {
            userProfiles = await service.getAllUserProfile()
        }
        res.send(userProfiles)
    } catch (e) {
        logEvent.emit('APP-ERROR', {
            logTitle: 'GET-USER-PROFILE-CONTROLLER-FAILED',
            logMessage: e
        })
        res.sendStatus(500).json({ message: 'Internal Server Error' })
    }
}

const addNewUserProfile = async (req, res, service) => {
    let body = req.body;
    let userProfile = await service.addUserProfile(body);
    res.send(userProfile)
}

const updateUserProfile = async (req, res, service) => {
    let body = req.body;
    let userProfile = await service.updateUserProfile(body);
    res.send(userProfile)
}

const deleteUserProfile = async (req, res, service) => {
    let id = req.params.id;
    let userProfile = await service.deleteUserProfile(id)
    res.send(userProfile)
}

module.exports = { getAllUserProfile, addNewUserProfile, updateUserProfile, deleteUserProfile };