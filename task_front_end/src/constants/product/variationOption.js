
import { variationHttp} from "../htttp";

export const variationOptionAction = {
    add :{
        icon:"fa-solid fa-plus fa-sm pr-1",
        name:"Thêm mới",
        style:{
            display:"block"
        }
    },
    excel:{
        icon:"fa-solid fa-file-export fa-sm pr-1",
        name:"Thêm mới",
        style:{
            display:"none"
        }
    }
}
export const initialForm={name:"",description:"",variation:""}
export const variationOptionSearch={
    searchAdvanced:{
        style:{
            display:"block"
        }
    },
    items:[
        {
            title:"Lựa chọn Option",
            callApi:true,
            data:variationHttp.variation,
            search:{variation:null},
            component:'SelectItemSearch'
        },
    ]
}

export const columnVariationOption=[
    {
        name:"STT",
        style:{
            width:"5%"
        }
    },
    {
        name:"Gía Trị Option",
        style:{
            width:"20%"
        }
    },
    {
        name:"Option",
        style:{
            width:"65%"
        }
    },
    {
        name:"",
        style:{
            width:"10%"
        }
    }
]
export const dataActions=[
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
        name: "",
        variation:null,
    }
}
