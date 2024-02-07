class CreateNewUser {
    role;
    username;
    surname;
    email;
    password;

    convertReqToDTO(request) {
        this.username = request.body.username;
        this.surname = request.body.surname;
        this.email = request.body.email;
        this.password = request.body.password;
        this.role = 1;
        return this
    }
}
class FavDTO {
    user_id;
    course_id;
    convertReqToDTO(Data) {
        this.user_id = Data.user.id;
        this.course_id = Data.params.id;
        return this
    }
}
class Login {
    email;
    password;
    convertReqToDTO(Data) {
        this.email = Data.email;
        this.password = Data.password;
        return this
    }
}

class AllUsersDto {
    username;
    surname;
    email;
    like_courses;

    convertUserDomainToDTO(User) {
        this.username = User.username;
        this.surname = User.surname;
        this.email = User.email;
        this.like_courses = User.like_courses
        return this
    }
}

class OneUserDTO {
    username;
    surname;
    email;
    like_courses;
    password;

    convertOneUserDomainToDTO(User) {
        this.username = User.username;
        this.surname = User.surname;
        this.email = User.email;
        this.like_courses = User.like_courses;
        this.password = User.password
        return this
    }
}

class InformationByID {
    id;
    username;
    surname;
    email;
    like_courses;
    password;
    convertInfoIDUserDomainToDTO(User) {
        this.id = User.id
        this.username = User.username;
        this.surname = User.surname;
        this.email = User.email;
        this.like_courses = User.like_courses;
        this.password = User.password
        return this
    }
}



module.exports = {
    AllUsersDto: new AllUsersDto(),
    OneUserDTO : new OneUserDTO(),
    CreateNewUser: new CreateNewUser(),
    InformationByID : new InformationByID(),
    Login: new Login(),
    FavDTO: new FavDTO()
}