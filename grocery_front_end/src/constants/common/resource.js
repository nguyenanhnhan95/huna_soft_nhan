export const ctx = "http://localhost:3000";
export const linkHttp={
    domain:"localhost",
    getUserHeader:"http://localhost:8080/user/me",
    authLogin:"http://localhost:8080/auth/login",
    linkLogin:"http://localhost:3000/login",
    linkLogOut:"http://localhost:8080/logout",
    linkNotFound:"http://localhost:3000/not-found",
    linkAdmin:"http://localhost:3000/admin",
    linkMenuAdminSide:"http://localhost:8080/menu/admin-side"
}
export function commonResource(href){
    return href.replace("/add", "").replace(/\/edit\/\d+/, "").replace(/\/view\/\d+/, "");
}
export function checkResourceAdmin(resources,path){
    let size = path.length;
    let index=0;
    for(let i = size-1;i>=0;--i){
        if(path.charCodeAt(i)>47 && path.charCodeAt(i)<58){
            ++index
        }else{
            break;
        }
    }
    if(index!==0){
        if(path.charCodeAt(size-1-index)===47){
            path=path.substring(0,size-1-index);
        }
    }else{
        if(path.includes("edit")|| path.includes("view")){
            return false;
        }
    }
    return resources.some(resource => resource === path);
}