const auth_ctrl = require('../controllers/auth_ctrl')

module.exports = (app) => {
    const router = app.Router()

    router.post('/register', [
        router.post('/', [
                body('Username').islength({min: 6, max: 20}).isString().notEmpty().custom((value) => {
                    let userNameCheck = user.findOne({
                        where: {
                            username: value
                        }
                    })
                    if (!!userNameCheck) {
                        throw new Error('Username already registered!')
                    }
                }),
                body('email').isemail().isString().notEmpty().custom((value) => {
                    let EmailCheck = user.findOne({
                        where: {
                            username: value
                        }
                    })
                    if (!!EmailCheck) {
                        throw new Error('Username already registered!')
                    }
                }),
                body('password').islength({min: 6, max: 100}).isString().notEmpty(),
                body('firstName').isString().notEmpty(),
                body('lastName').isString().notEmpty(),
                body('classes').isString().notEmpty().custom(async (value) => {
                    const classValue = ["X", "XI", "XII", "XII"]
                    const isValid = classValue.includes(value)
        
                    if (!isValid) {
                        throw new Error('classes is not registered!');
                    }
                }),
                body('gender').isString().notEmpty().custom(async (value) => {
                    const genderVal = ["M", "F"]
                    const isValid = genderVal.includes(value)
        
                    if (!isValid) {
                        throw new Error('gender is not registered!');
                    }
                }),
                body('major_id').isString().notEmpty().custom(async (value) => {
                    const majorValue = await major.findByPk(value)
                    if (!!majorValue == false) {
                        throw new Error('gender is not registered!');
                    }
                }),
            ], student_ctrl.save)
    ])

    return router
}