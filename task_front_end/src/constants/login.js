export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = '';
export const USER_LOGIN = "userLogin"
export const PROVIDER_SOCIAL = "provider_social";
export const PROVIDER_LOCAL = "provider_local";
export const PROVIDER_ID = "provider_id";
export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const keepLogin="keepLogin"
export const constLogin={
    API_BASE_URL:'http://localhost:8080',
    ACCESS_TOKEN:'accessToken',
    USER_LOGIN:"userLogin",
    PROVIDER_SOCIAL:"provider_social",
    PROVIDER_LOCAL:"provider_local",
    PROVIDER_ID:"provider_id",
    OAUTH2_REDIRECT_URI:"http://localhost:3000/oauth2/redirect",
    keepLogin:"keepLogin",  
}
export const GOOGLE_AUTH_URL = constLogin.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + constLogin.OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = constLogin.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + constLogin.OAUTH2_REDIRECT_URI;

 
