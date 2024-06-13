import DateItemSearch from "../components/composite/DateItemSearch";
import SelectItemSearch from "../components/composite/SelectItemSearch";
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
    DateItemSearch
  };
