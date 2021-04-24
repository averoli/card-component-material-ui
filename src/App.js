import './App.css';

import {useState} from "react";

import {
    Grid,
    makeStyles
}
    from
        "@material-ui/core";

import CardEdit from "./CardEdit";
import CheckedCreate from "./CheckedCreate";
import SelectCreate from "./SelectCreate";




export const DATA = {
    'country': [
        'Germany'
    ],
    'types': [
        'Venture Capital',
        'Corporate Venture',
        'Family office',
        'Angel / Private investor'
    ],
    'title': 'Dauren Ikhanbayev',
    'name': 'Olga',
    'surname': 'Averoli',
    'about': 'Investment Banking and Consulting services through Janas Capital (Securites through JCC Advisors). John holds a Series 62, 82, 83 FINRA/SIPCInvestment Banking and Consulting services through Janas Capital (Securites through JCC Advisors).'
}

function App() {

    const [investor, setInvestor] = useState(DATA)

    const [types, setTypes] = useState([])

    const [countryfocus, setCountryFocus] = useState([])

    const handleChangeType = (values) => {
        setTypes(() => {
            return Object.values(values).reduce((acc, item) => {
                if (item.checked) {
                    acc.push(item.value)
                }
                return acc
            }, [])
        })
    }

    const handleChangeCountryFocus = (values) => {
        setCountryFocus(() => {
            return Object.values(values).reduce((acc, item) => {
                if (item.checked) {
                    acc.push(item.value)
                }
                return acc
            }, [])
        })
    }

    const findValue = (key) => {
        switch (key) {
            case 'countryfocus':
                return countryfocus
            case 'types':
                return types

            default:
                return []
        }
    }

    const handleSave = (key) => {
        const value = findValue(key)
        setInvestor(prevState => ({
            ...investor,
            [key]: value,
        }))
    }

    const useStyles = makeStyles((theme) => ({
        container: {
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "lightgray",
        },
        item: {
            marginTop: "60px"
        }
    }))

    const classes = useStyles()

    return (

        <Grid container className={classes.container}>
            <Grid item xs={12} md={7} className={classes.item}>
                <CardEdit
                    title={investor.title}
                    types={investor.types}
                    country={investor.country}
                    about={investor.about}
                    editCheckbox={<CheckedCreate
                        data={DATA.types}
                        defaultChecked={investor.types}
                        onChange={handleChangeType}
                    />
                    }
                    editSelect={
                        <SelectCreate
                            data={DATA.country}
                            defaultSelected={investor.country}
                            onChange={handleChangeCountryFocus}
                        />
                    }
                    onClickSave={() => handleSave('type')}
                />
            </Grid>
        </Grid>
    );
}

export default App;
