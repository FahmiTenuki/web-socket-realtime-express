const { validationResult } = require("express-validator")
const { comment, user} = require('../models')
const self = {}
self.list = async (_, res) => {
    let data = await comment.findAll({
        include: [{
            model: user,
            attributes: ['username']
        }]
    })
    res.status(200).json({
        message: 'comment is found',
        data: data
    })
}


self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }
    const {
        content_comment_text
    } = req.body

    await comment.create({
        content_comment_text: content_comment_text,
        user_id: req?.user?.data?.id,
        post_id: req?.body?.params?.post_id,
    })

    res.status(201).send({ message: 'comment Success!!' })
}



module.exports = self