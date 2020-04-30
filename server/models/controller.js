const Themes = require('./themes');
const Users = require('./users');

getThemeById = async (req, res) => {
    await Themes.findOne({ id_theme: req.params.id }, (err, theme) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!theme) {
            return res
                .status(404)
                .json({ success: false, error: `Theme not found` })
        }
        return res.status(200).json({ success: true, data: theme })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await Users.find({ }, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!users) {
            return res
                .status(404)
                .json({ success: false, error: `Users list is empty` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await Users.findOne({ id_user: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

module.exports = {
    getThemeById,
    getUserById,
    getUsers
}