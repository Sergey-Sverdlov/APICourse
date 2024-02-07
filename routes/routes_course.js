const Router = require('express')
const router = new Router()
const courseController = require('../controller/course_controller')
const authMiddleWare = require('../middlewaree/authMiddleware')
const roleMiddleWare = require('../middlewaree/roleMiddleWare')


router.post('/course/create', roleMiddleWare, courseController.createCourse)
router.get('/courses', courseController.getCourses)
router.get('/course/:id', authMiddleWare, courseController.getCourseByID)
router.put('/course/update/:id', roleMiddleWare, courseController.updateCourse)
router.delete('/course/:id', roleMiddleWare, courseController.delete_course)
router.get('/swagger', courseController.showSwagger)
module.exports = router