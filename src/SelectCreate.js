import React, { useEffect, useState } from 'react'
import {
    MenuItem,
    Select
} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Input from '@material-ui/core/Input'
import Chip from '@material-ui/core/Chip'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}))

const SelectCreate = ({ data, defaultSelected, onChange }) => {

    const classes = useStyles()

    const [select, setSelect] = useState([])

    const [state, setState] = useState(() => {

        return data.reduce((acc, item) => {
            acc[item] = { value: item, label: item}
            return acc
        }, {})
    })

    useEffect(() => {
        onChange && onChange(state)
    }, [state])

    const handleChange = (val) => {
        setSelect(val.target.value)
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
        <Select
            value={select}
            onChange={handleChange}
            multiple
            input={<Input />}
            renderValue={(selected) => (
                <div className={classes.chips}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                    ))}
                </div>
            )}

        >
            {Object.values(state).map((item, index)=>
                <MenuItem
                    key={index}
                    value={item.value}
                >
                    {item.label}
                </MenuItem>)}
        </Select>
    )
}

export default SelectCreate