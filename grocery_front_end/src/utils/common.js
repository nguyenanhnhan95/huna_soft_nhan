
import DateItemSearch from "../components/composite/search/DateItemSearch";
import InputDataSearch from "../components/composite/search/InputDataSearch";
import SelectItemSearch from "../components/composite/search/SelectItemSearch";
import { constLogin } from "../constants/login/login";

export const createHeader = () => {
    return {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(constLogin.ACCESS_TOKEN)
        }
    }
}

export function getBeforeDateCurrent() {
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    return oneDayAgo;
}

export function convertDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
export const componentsAdvanced = {
    SelectItemSearch,
    DateItemSearch,
    InputDataSearch
  };
