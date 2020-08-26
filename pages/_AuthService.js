export default class AuthService {

   loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token // handwaiving here
    }

   
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('sessionkey');
    }

    getUsername() {
        var uservalue = localStorage.getItem('username');
        return uservalue;
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('sessionkey');
        localStorage.removeItem('username');
        this.props.history.replace('/');
    }

    
}


    
