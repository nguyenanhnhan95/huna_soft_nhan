import { memo } from "react"
import ActionDropdown from "../../components/composite/ActionDropdown"
import { useSelector } from "react-redux"
import { shopPromotionHttp, variationHttp } from "../htttp"

export const shopPromotionAction = {
    add: {
        icon: "fa-solid fa-plus fa-sm pr-1",
        name: "Thêm mới",
        style: {
            display: "block"
        }
    },
    excel: {
        icon: "fa-solid fa-file-export fa-sm pr-1",
        name: "Thêm mới",
        style: {
            display: "none"
        }
    }
}
export const initialForm={name:"",code:"" ,description:"",discountRate:0,startDate:new Date(),endDate:null}
export const shopPromotionSearch = {
    searchAdvanced: {
        style: {
            display: "block"
        }
    },
    items:[
        {
            title:"Ngày bắt đầu",
            search:{startDate:null},
            component:'DateItemSearch'
        },
    ]
}
export const columnShopPromotion = [
    {
        name: "STT",
        style: {
            width: "10px"
        }
    },
    {
        name: "Tên mã giảm giá",
        style: {
            width: "180px"
        }
    },
    {
        name: "Thông tin giảm giá",
        style: {
            width: "180px"
        }
    },
    {
        name: "Mã code",
        style: {
            width: "100px"
        }
    },
    {
        name: "Ngày bắt đầu",
        style: {
            width: "100px"
        }
    },
    {
        name: "Ngày kêt thúc",
        style: {
            width: "100px"
        }
    },
    {
        name: "",
        style: {
            width: "100px"
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
    size: 2,
    page: 0,
    criterias: {
        name: ""
    }
}

