let users = require('./../users.json');
module.exports.getAllUsers = (req,res)=>{
    const {limit}=req.query;
    res.send(users.slice(0,limit))
}
module.exports.getRandomUser = (req,res)=>{
    res.send(users[Math.floor(Math.random() * users.length)])
}

module.exports.saveAuser = (req,res)=>{
    console.log(req.body);
    const data = req.body;
        users.push(data); 
        res.send(users);  
}
module.exports.updateAuser = (req,res)=>{
 const { id } = req.params;
  const filter = { _id: id };

  const newUserData = users.find(user => user.Id === Number(id));

  newUserData.Id = id;
  newUserData.gender = req.body.gender;
  newUserData.name = req.body.name;
  newUserData.contact = req.body.contact;
  newUserData.photoUrl = req.body.photoUrl;

  res.send(newUserData);
}
module.exports.deleteAuser = (req,res)=>{
    const { id } = req.params;
    const filter = { _id: id };
  
    users = users.filter(user => user.Id !== Number(id));
  
    res.send(users);
}