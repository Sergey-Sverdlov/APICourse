const Course = require("../models/DomainModels/courseModel")
const sequelize = require("../db")

class CourseDao {
    async getCourseByID(course_id) {
        let course = await Course.findOne({
            where: {
                id : course_id
            }
        })
        course = JSON.stringify(course, null, 2)
        course = JSON.parse(course)
        return course;
    }

    async getAllCourses() {
        let courses = await Course.findAll();
        courses = JSON.stringify(courses, null, 2)
        courses = JSON.parse(courses)
        return courses
    }

    async delete_course(delete_id) {
        let course = await Course.destroy({
            where: {
                id: +delete_id
            }
        })
        course = JSON.stringify(course, null, 2)
        course = JSON.parse(course)
        return course
    }

    async create_course(CreateCourseDTO) {
        let newCourse = await Course.create({
            name: CreateCourseDTO.name,
            short_info: CreateCourseDTO.short_info,
            full_info: CreateCourseDTO.full_info,
        })
        newCourse = JSON.stringify(newCourse, null, 2)
        newCourse = JSON.parse(newCourse)
        return newCourse
    }

    async update_course(id, UpdateCourseDTO) {
        let updateCourse = await Course.update(
            {
                short_info: UpdateCourseDTO.short_info,
                full_info: UpdateCourseDTO.full_info,
            },
            {
                where: {
                    id: id
                }
            }
        )
        updateCourse = JSON.stringify(updateCourse, null, 2)
        updateCourse = JSON.parse(updateCourse)
        return updateCourse
    }
}

module.exports = new CourseDao()