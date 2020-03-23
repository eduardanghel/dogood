import { createConnectedStore } from 'undux';

let initialUserSettings = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    dob:  '',
    gender: '',
    address: '',
    city: '',
    postcode: '',
    telephone: '',
    causes: '',
    termsChecked: false,
};

let initialAuthToken = {
    OAuthToken: "",
};

export default createConnectedStore({
    userData: initialUserSettings,
    authToken: initialAuthToken
});