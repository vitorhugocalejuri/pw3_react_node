const ideia = require('../models/ideia')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ToughController {
  static async dashboard(req, res) {
    const userId = req.session.userid

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: ideia,
      plain: true,
    })

    const ideias = user.ideias.map((result) => result.dataValues)

    let emptyideias = true

    if (ideias.length > 0) {
      emptyideias = false
    }

    console.log(ideias)
    console.log(emptyideias)

    res.render('ideias/dashboard', { ideias, emptyideias })
  }

  static createideia(req, res) {
    res.render('ideias/create')
  }

  static createideiaSave(req, res) {
    const ideia = {
      title: req.body.title,
      UserId: req.session.userid,
    }

    ideia.create(ideia)
      .then(() => {
        req.flash('message', 'Pensamento criado com sucesso!')
        req.session.save(() => {
          res.redirect('/ideias/dashboard')
        })
      })
      .catch((err) => console.log())
  }

  static showideias(req, res) {
    console.log(req.query)

    // check if user is searching
    let search = ''

    if (req.query.search) {
      search = req.query.search
    }

    // order results, newest first
    let order = 'DESC'

    if (req.query.order === 'old') {
      order = 'ASC'
    } else {
      order = 'DESC'
    }

    ideia.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` },
      },
      order: [['createdAt', order]],
    })
      .then((data) => {
        let ideiasQty = data.length

        if (ideiasQty === 0) {
          ideiasQty = false
        }

        const ideias = data.map((result) => result.get({ plain: true }))

        res.render('ideias/home', { ideias, ideiasQty, search })
      })
      .catch((err) => console.log(err))
  }

  static removeideia(req, res) {
    const id = req.body.id

    ideia.destroy({ where: { id: id } })
      .then(() => {
        req.flash('message', 'Pensamento removido com sucesso!')
        req.session.save(() => {
          res.redirect('/ideias/dashboard')
        })
      })
      .catch((err) => console.log())
  }

  static updateideia(req, res) {
    const id = req.params.id

    ideia.findOne({ where: { id: id }, raw: true })
      .then((ideia) => {
        res.render('ideias/edit', { ideia })
      })
      .catch((err) => console.log())
  }

  static updateideiaPost(req, res) {
    const id = req.body.id

    const ideia = {
      title: req.body.title,
      description: req.body.description,
    }

    ideia.update(ideia, { where: { id: id } })
      .then(() => {
        req.flash('message', 'Pensamento atualizado com sucesso!')
        req.session.save(() => {
          res.redirect('/ideias/dashboard')
        })
      })
      .catch((err) => console.log())
  }
}
