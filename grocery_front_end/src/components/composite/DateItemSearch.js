import { memo } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../../css/composite/dateItemSearch.css"
//sádasdasdasdas

function DateItemSearch() {
    return (
        <div className="col-12 col-md-4 col-xl-3 container-content-search-advanced-item">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}
export default memo(DateItemSearch)