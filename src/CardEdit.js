import {
    Box,
    Card, CardContent, CardHeader, CardMedia,
    Typography,
    Dialog,
    DialogContent, DialogContentText, DialogActions,
    DialogTitle,
    FormControl,
    Button,
    Grid,
    makeStyles,
    TextField
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import avatar from './images/IMG_8930.JPG'

import {useState} from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block'
    },
    header: {
        paddingBottom: '0px'
    },
    content: {
        paddingTop: '0px'
    },
    img: {
        display: 'flex',
        maxWidth: '100%'
    },
    blockLocation: {
        display: 'flex',
        direction: 'row'
    },
    location: {
        color: '#BABADE',
        fontSize: 'small',
        marginBottom: '-0.1rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    formControl: {
        padding: '0px',
        margin: theme.spacing(1)
    },
    checkbox: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2)
    }
}))


const CardEdit = ({title, type, country, children, onClickSave, editCheckbox}) => {

    const [isEditing, setEditing] = useState(false)

    const classes = useStyles()

    const handleClickEdit = () => {
        setEditing(prevState => !prevState)
    }

    const handleSave = () => {
        setEditing(prevState => {
            if (isEditing === true) {
                onClickSave && onClickSave()
            }
            return !prevState
        })
    }
    console.log(type)
    return (
        <Card className='mb-4'>
            <CardHeader
                className={classes.header}
                action={
                    <IconButton aria-label="edit">
                        {
                            isEditing ?
                                <CloseIcon onClick={handleClickEdit}/> :
                                <EditIcon style={{color: '#b1abc0'}} onClick={handleClickEdit}/>
                        }
                    </IconButton>
                }
            />
            <CardContent className={classes.content}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <CardMedia>
                            <img alt="..." src={avatar} className={classes.img}/>
                        </CardMedia>
                    </Grid>

                    <Grid item xs={12} sm={8} md={9} lg={9} container>
                        <Grid item xs={10} sm container
                              direction="column"
                              justify="center"
                        >
                            <Grid item container>
                                <Grid item spacing={1}>
                                    <div className={classes.blockLocation}>
                                        <div><LocationOnIcon className={classes.location}/></div>
                                        <div><Typography style={{color: '#BABADE'}} gutterBottom>
                                            {country}
                                        </Typography></div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Typography variant="h5" style={{color: '#2E2545'}} gutterBottom>
                                {title}
                            </Typography>
                            <div>
                                {type.map((type, index) =>
                                        <Typography variant="body2" component="span" gutterBottom>
                                            {type || '-'}
                                            {index < type.length - 1 ? ', ' : '.'}
                                        </Typography>
                                )}
                            </div>
                        </Grid>
                        <Typography variant="body2" style={{color: '#676796'}}>
                            {children}
                        </Typography>
                        {isEditing &&
                        (<Dialog open={isEditing} onClose={handleClickEdit} aria-labelledby="form-dialog-title"
                                 maxWidth='md'>
                            <DialogTitle id="form-dialog-title" onClose={handleClickEdit}>
                                <Typography
                                    align='center'
                                    variant='h4'
                                    style={{color: '#B1ABC0'}}>Edit intro</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={3} className={classes.root}>
                                        <CardMedia type="file">
                                            <img alt="..." src={avatar} className={classes.img}/>
                                        </CardMedia>

                                    </Grid>

                                    <Grid item xs={12} sm={9}>
                                        <form className={classes.form}>
                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    label="First name"
                                                    id="outlined-basic"
                                                    defaultValue="Dauren"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                />
                                            </FormControl>
                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    label="Last name"
                                                    defaultValue="Ikhanbayev"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                />
                                            </FormControl>
                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="HQ Country"
                                                    helperText="Where is your fund's or company's headquarters is located?"
                                                    variant="outlined"
                                                    size="small"
                                                >
                                                </TextField>
                                            </FormControl>

                                            <DialogContentText className={classes.checkbox}>
                                                Investor type
                                            </DialogContentText>
                                            {editCheckbox}


                                            <FormControl className={classes.formControl}>
                                                <TextField
                                                    id="outlined-full-width"
                                                    label="About"
                                                    placeholder="About"
                                                    fullWidth
                                                    margin="normal"
                                                    variant="outlined"
                                                    rows={8}
                                                    helperText="Tell us a bit more about yourself and your company, presenting your main fields of activity,
                      investment focus and what kind of startups you are looking for."
                                                />
                                            </FormControl>
                                        </form>

                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickEdit} variant="contained" style={{background: '#e0e0e0'}}
                                        className={classes.button}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} variant="contained" color="primary"
                                        className={classes.button}>
                                    Save
                                </Button>
                            </DialogActions>
                        </Dialog>)
                        }
                    </Grid>


                </Grid>
            </CardContent>
        </Card>
    )
}

export default CardEdit