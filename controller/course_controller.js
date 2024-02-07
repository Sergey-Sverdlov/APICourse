const courseService = require("../services/courseServices")
const DTO = require("../models/DtoModels/CourseDtoModel")
const swagger = require("../Swagger.json")
class CourseController {
    async getCourseByID(req, res) {
        try {
            const id = req.params.id
            const courseDTO = await courseService.getCourseByID(id)
            res.send(courseDTO)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async getCourses(req, res) {
        console.log("Вызван 3")
        try {
            const coursesDTO = await courseService.getAllCourses()
            res.send(coursesDTO)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async delete_course(req, res) {
        try {
            const delete_id = req.params.id
            const result = await courseService.delete_course(delete_id)
            res.send(result)
        } catch (e) {
            res.send(401)
        }
    }

    async createCourse(req, res) {
        try {
            const DtoCreateCourseModel = DTO.CreateCourseDTO.convertToDTO(req.body)
            const newCourseDTO = await courseService.create_course(DtoCreateCourseModel)
            res.send(newCourseDTO)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }


    async updateCourse(req, res) {
        try {
            const UpdateDTOModel = DTO.UpdateCourseDto.convertToDTO(req.body)
            const result = courseService.update_course(req.params.id, UpdateDTOModel)
            res.send(result)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})

        }
    }

    async showSwagger(req, res) {
        res.json(swagger)
    }

}

module.exports = new CourseController()