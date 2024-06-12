import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField, useFormikContext, ErrorMessage } from 'formik';
import "../../css/composite/selectedFieldFormik.css"
export const SelectFieldFormik = ({ options, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(props.name);
    const handleChange = (event) => {
        console.log(event.target.value)
        setFieldValue(field.name, event.target.value);
    };
    return (
        <FormControl   fullWidth error={meta.touched && !!meta.error}>
            <Select
                {...field}
                {...props}
                value={field.value || ''}
                displayEmpty
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
            >

                {options && options.map((option, index) => (
                    <MenuItem key={index} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}