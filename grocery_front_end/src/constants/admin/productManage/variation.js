export const variationHttp={
    variationSave:"http://localhost:8080/products-variation/add",
    variationEdit:"http://localhost:8080/products-variation/edit",
    variationDelete:"http://localhost:8080/products-variation/delete",
    variation:"http://localhost:8080/products-variation",
    variationSearch:"http://localhost:8080/products-variation/search",
    variationNavigate:"/admin/products-variation",
}
export const variationAction = {
    add: {
        icon: "fa-solid fa-plus fa-sm pr-1",
        name: "Thêm mới",
        style: {
            display: "block"
        }
    },
    excel: {
        icon: "fa-solid fa-file-arrow-down fa-sm pr-1",
        name: "Xuất Excel",
        style: {
            display: "none"
        }
    }
}
export const initialForm={name:"",description:""}
export const variationSearch = {
    searchAdvanced: {
        style: {
            display: "none"
        }
    },
    items:[]
}
export const columnVariation = [
    {
        name: "STT",
        style: {
            width: "5%"
        }
    },
    {
        name: "Gía Trị Option",
        style: {
            width: "85%"
        }
    },
    {
        name: "",
        style: {
            width: "10%"
        }
    }
]
export const dataActions = [
    {
        name: "Sửa",
        icon: "fa-solid fa-pencil mr-2",
        action: "edit"
    },
    {
        name: "Xóa",
        icon: "fa-regular fa-trash-can mr-2",
        action: "delete",
    }
]
export const queryParameter = {
    size: 5,
    page: 0,
    criterias: {
        name: ""
    }
}


