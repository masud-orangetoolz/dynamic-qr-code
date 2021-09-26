import { ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Typography,
} from '@mui/material';
import * as React from 'react';
import '../css/OptionsController.css';
import GradientColor from './GradientColor';
import SingleColor from './SingleColor';

export default function OptionsContoller() {
    const [dotsType, setDotsType] = React.useState('squre');
    const [colorType, setColorType] = React.useState('single');

    const handleChange = (event) => {
        setDotsType(event.target.value);
    };

    const handleColorType = (event) => {
        setColorType(event.target.value);
    };

    return (
        <div className="options_container">
            <Accordion elevation={3}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Dots options</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <FormControl variant="standard" sx={{ maxWidth: 300, width: '100%' }}>
                                <InputLabel id="demo-simple-select-standard-label">
                                    Dots type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={dotsType}
                                    onChange={handleChange}
                                    label="Dots Type"
                                    sx={{ mr: 5 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Squre</MenuItem>
                                    <MenuItem value={20}>Dots</MenuItem>
                                    <MenuItem value={30}>Extra rounded</MenuItem>
                                    <MenuItem value={30}>Classy</MenuItem>
                                    <MenuItem value={30}>Classy rounded</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Color Type</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="row-radio-buttons-group"
                                    value={colorType}
                                    onChange={handleColorType}
                                >
                                    <FormControlLabel
                                        value="single"
                                        control={<Radio />}
                                        label="Single"
                                    />
                                    <FormControlLabel
                                        value="gradient"
                                        control={<Radio />}
                                        label="Gradient"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>

                    {colorType === 'single' ? <SingleColor /> : <GradientColor />}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
