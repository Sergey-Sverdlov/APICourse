const courseDao = require("../dao/courseDao")
const DTO = require("../models/DtoModels/CourseDtoModel")
class courseServices {
    async getCourseByID(id) {
        const course = await courseDao.getCourseByID(id)
        if (course === null) {
            return 403
        }
        const courseDTO = DTO.GetCourseByIDDTOModel.convertDomainCourseToDTO(course)
        return courseDTO
    }

    async getAllCourses() {
        const courses = await courseDao.getAllCourses();
        let coursesDTO = [];
        for (let i = 0; i < courses.length; i++) {
            let course = courses[i];
            let courseDTO = DTO.getAllCourses.convertDomainCourseToDTO(course)
            const objDTO = Object.assign({}, courseDTO)
            coursesDTO.push(objDTO)
        }
        return coursesDTO;

    }

    async delete_course(delete_id) {
        const result = await courseDao.delete_course(delete_id)
        if (result === 0) {
            return 403
        }
        return 200
    }

    async create_course(CreateDTOModel) {
        const course = await courseDao.create_course(CreateDTOModel);
        const CourseDTO = DTO.CreateCourseDTO.convertToDTO(course)
        return CourseDTO;
    }

    async update_course(course_id, UpdateCourseDTO) {
        const updateCourse = await courseDao.update_course(course_id, UpdateCourseDTO)
        return updateCourse
    }
}

module.exports = new courseServices()