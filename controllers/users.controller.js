let users = require('./../users.json');




// 1.Get all data
module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    res.send(users.slice(0, limit))
}


// 2.Get a random User
module.exports.getRandomUser = (req, res) => {
    res.send(users[Math.floor(Math.random() * users.length)])
}


// 3.Save a User
module.exports.saveAuser = (req, res) => {
    console.log(req.body);
    const data = req.body;
    const { id, gender, name, contact, address, photoUrl } = data;

    id && gender && name && contact && address && photoUrl ?
        users.push(data) && res.send(users)
        :
        res.send('Invalid data')
}


// 4.Update a user
module.exports.updateAuser = (req, res) => {
    const reqid = req.params.id;
    const newData = req.body;
    const selected = users.find(user => user.id === Number(reqid));
    if (!selected) {
        res.send('User not Found!!')
    }
    else if (!newData) {
        res.send('Please provide Data!!')
    }
    else if (selected && newData) {
        const { id, name, gender, contact, address, photoUrl } = newData;
        id ? selected.id = id : selected.id = selected.id
        name ? selected.name = name : selected.name = selected.name
        gender ? selected.gender = gender : selected.gender = selected.gender
        contact ? selected.contact = contact : selected.contact = selected.contact
        address ? selected.address = address : selected.address = selected.address
        photoUrl ? selected.photoUrl = photoUrl : selected.photoUrl = selected.photoUrl
        res.send(selected)
    }
}



// 5. Delete a user
module.exports.deleteAuser = (req, res) => {
    const Id = req.params.id;
    const data = users.findIndex(user => user.id === Number(Id));
    data === -1
    ?
    res.send("User not Found")
        :
        users.splice(data, 1) && res.send(users)
}