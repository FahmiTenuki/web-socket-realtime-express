const { body } = require("express-validator")
const { authenticateJWT } = require("../middleware/authMiddleware")
const comment_crtl = require("../models/comment")

module.exports = (app) => {
    const router = app.Router()
    
    router.get('./comment-list', authenticateJWT, comment_crtl.list)

    router.post('/create-comment', authenticateJWT,[
        body('content_comment_text').notEmpty(),
    ], comment_crtl.save)

    return router;
}