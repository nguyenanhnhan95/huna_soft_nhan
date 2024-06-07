import { variationSearch } from "./product/variation"

export const linkHttp={
    domain:"localhost",
    getUserHeader:"http://localhost:8080/user/me",
    authLogin:"http://localhost:8080/auth/login"
}
export const variationOptionHttp={
    variationOptionSave:"http://localhost:8080/admin/products-variation-option/add"
}
export const variationHttp={
    variationSave:"http://localhost:8080/products-variation/add",
    variationEdit:"http://localhost:8080/products-variation/edit",
    variationDelete:"http://localhost:8080/products-variation/delete",
    variation:"http://localhost:8080/products-variation",
    variationSearch:"http://localhost:8080/products-variation/search",
    variationNavigate:"/admin/products-variation",
}