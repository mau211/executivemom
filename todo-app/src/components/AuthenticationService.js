class AuthenticationService {

    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        // let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user

    }
}

export default new AuthenticationService()
