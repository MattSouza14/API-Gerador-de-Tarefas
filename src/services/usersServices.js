const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/userModel')


const login = async(req, res) => {
    try {
    const { email, password} = req.body

    const user = await Usuario.findOne({ where: { email: email },  attributes: ['email', 'password'] })
        console.log(user)
    if (!user) {
        return res.status(401).json({ 
            email: user.email,
            password: user.password
            })
    }
    const senhaCorreta = await bcrypt.compare(password, user.dataValues.password)
    
    console.log(senhaCorreta)
    console.log(user.dataValues.password)
    console.log(password)

    if (!senhaCorreta) {
        return res.status(401).json({ message: 'Senha inválida' })
    }
    const token = jwt.sign(
		    { id: user.dataValues.id, 
              email: user.dataValues.email },
              '85985958',
		    { expiresIn: '1h' }
    )
   
    res.status(200).json(
        { message: 'Login realizado com sucesso', token: token })  
        
    } catch (error) {
        res.status(400).json({ message: 'Erro ao fazer login' })
    }
}

const cadastroUsuario = async(req, res)=>{

}

module.exports = {
    login,
    cadastroUsuario
}