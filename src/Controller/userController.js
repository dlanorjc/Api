const mongoose = require('mongoose');

const User = mongoose.model('Users');
const crypto = require('crypto');





module.exports = { 
    async cadastro(req, res)  {
        
        const { login, email } = req.body

    try {
        if(await User.findOne({login}))
            return res.status(400).send({error: 'Esse login já existe, Tente outro !'});


        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'Esse email já esta cadastrado!' });


        const user = await User.create(req.body);

        return res.send(user)
    } catch (error) {
        return res.status(400).send({ error: 'Não foi possivel se registrar' });
    }
  },

   async login(req, res) {

    const { login, password } = req.body;

    const user = await User.findOne({ login }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'Usuario não foi encontrado' });

    if(user.password !== password)
        return res.status(400).send({ error: 'senha incorreta' });
        

    return res.send(user);
   },
   
   async update(req, res) {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        res.send(user);

   },

   async delete(req, res) {

        const user = await User.findByIdAndDelete(req.params.id);

        res.send({ error: 'sua conta foi deletada' });
   }
}

   
    
   
       


