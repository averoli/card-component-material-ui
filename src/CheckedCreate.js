import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
    Checkbox,
    makeStyles
} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

const CheckedCreate = ({ data, defaultChecked, onChange }) => {

    const [state, setState] = useState(() => {
        return data.reduce((acc, item) => {
            acc[item] = { value: item, checked: defaultChecked.indexOf(item) !== -1 }
            return acc
        }, {})
    })

    useEffect(() => {
        onChange && onChange(state)
    }, [state])

    const handleChange = (val) => {
        setState(prevState => {
            const copyState = {
                ...prevState,
                [val.target.name]: {
                    ...prevState[val.target.name],
                    checked: !prevState[val.target.name].checked
                }
            }
            return copyState
        })

    }

    const useStyles = makeStyles((theme) => ({
        formGroup: {
            display: 'flex'
        },
        container: {
            marginLeft: '20px'
        }
    }))

    const classes = useStyles()
    return (

        <FormGroup className={classes.formGroup}>
            <Grid container className={classes.container}>
                {Object.values(state).map((item, index) =>
                    <Grid item xs={6}>
                        <FormControlLabel
                            key={index}
                            control={<Checkbox
                                onChange={handleChange}
                                name={item.value}
                                checked={item.checked}
                                color="primary"

                            />}
                            label={item.value}
                        />
                    </Grid>
                )}
            </Grid>
        </FormGroup>

    )
}
export default CheckedCreate