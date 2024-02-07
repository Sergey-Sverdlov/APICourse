class GetCourseByIDDTOModel {
    id;
    name;
    short_info;
    full_info;
    convertDomainCourseToDTO(Course) {
        this.id = Course.id
        this.name = Course.name;
        this.short_info = Course.short_info;
        this.full_info = Course.full_info;
        return this
    }
}
class GetAllCourses {
    name;
    short_info;
    full_info;
    convertDomainCourseToDTO(Course) {
        this.name = Course.name;
        this.short_info = Course.short_info;
        this.full_info = Course.full_info;
        return this
    }
}
class CreateCourseDTO {
    name;
    short_info;
    full_info;
    convertToDTO(Request) {
        this.name = Request.name;
        this.short_info = Request.short_info;
        this.full_info = Request.full_info;
        return this
    }

}

class UpdateCourseDto {
    short_info;
    full_info;
    convertToDTO(Request) {
        this.short_info = Request.short_info;
        this.full_info = Request.full_info;
        return this
    }
}

module.exports = {
    GetCourseByIDDTOModel : new GetCourseByIDDTOModel(),
    CreateCourseDTO : new CreateCourseDTO(),
    UpdateCourseDto: new UpdateCourseDto(),
    getAllCourses: new GetAllCourses()
}