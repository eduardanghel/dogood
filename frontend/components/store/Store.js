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

let initialCharitySettings = {
    dateOfRegistration: '',
    type: '',
    charityNumber: '',
    exemption: '',
    logo: '',
    causes: '',
    termsChecked: false,
};

export default createConnectedStore({
    userData: initialUserSettings,
    charityData: initialCharitySettings,
    authToken: initialAuthToken,

});