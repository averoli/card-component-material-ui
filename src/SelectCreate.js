import React, {useEffect, useState} from 'react'
import {
    MenuItem,
    TextField
} from '@material-ui/core'

import countryList from "country-list";


const SelectCreate = (onChange) => {

    const [countries, setCountries] = useState([])

    const [list, setList] = useState({})

    useEffect(() => {
        setList(countryList.getCodeList())
    }, [])

    useEffect(()=>{
        setCountries(() => Object.entries(list))
    },[list])

    const [select, setSelect] = useState(' ')


    const handleChange = (val) => {
        setSelect(val.target.value);
        // onChange && onChange({
        //     code: val.target.value,
        //     country: list[val.target.value]
        // })
        // setState(prevState => {
        //   const copyState = {
        //     ...prevState,
        //     [val.target.name]: {
        //       ...prevState[val.target.name],
        //       selected: !prevState[val.target.name].selected
        //     }
        //   }
        //   return copyState
        // })
    }


    return (
        <TextField
            id="outlined-select-currency"
            select
            label="HQ Country"
            helperText="Where is your fund's or company's headquarters is located?"
            variant="outlined"
            size="small"
            value={select}
            onChange={handleChange}
        >
            {countries.map(item => {
                return (
                    <MenuItem
                        key={item[0]}
                        value={item[0]}
                        name={item[1]}
                    >
                        {item[1]}
                    </MenuItem>
                )
            })}
        </TextField>

    )
}

export default SelectCreate