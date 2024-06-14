export const ctx = "http://localhost:3000";
export const linkHttp={
    domain:"localhost",
    getUserHeader:"http://localhost:8080/user/me",
    authLogin:"http://localhost:8080/auth/login"
}
export function commonResource(href){
    return href.replace("/add", "").replace("/edit", "");
}