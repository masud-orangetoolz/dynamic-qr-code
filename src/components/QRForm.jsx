import { Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../css/QRForm.css';
import OptionsContoller from './OptionsController';

function QRForm({ onDataChange, options, setOptions }) {
  const hanldeFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setOptions((options) => ({
      ...options,
      image: url,
    }));
  };

  return (
    <Grid item xs={12} md={7}>
      <Paper className="qr_form" elevation={1}>
        <Box component="form" noValidate autoComplete="off">
          <Typography variant="h6" component="h3">
            Main optons
          </Typography>
          <TextField
            className="qr_input"
            defaultValue={'https:hell.com'}
            onChange={onDataChange}
            label="Data Url"
            variant="standard"
            size="small"
          />
          <Box
            sx={{
              marginTop: '1rem',
              marginBottom: '0.5rem',
            }}
          >
            <input name="imageFile" onChange={hanldeFileChange} type="file" id="file" />
          </Box>
          <TextField
            className="qr_input"
            label="Height"
            variant="standard"
            name="height"
            value={options.height}
            onChange={(e) => setOptions((options) => ({ ...options, height: e.target.value }))}
            size="small"
          />
          <TextField
            className="qr_input"
            label="Width"
            variant="standard"
            name="width"
            value={options.width}
            onChange={(e) => setOptions((options) => ({ ...options, width: e.target.value }))}
            size="small"
          />
          <TextField
            className="qr_input"
            type="number"
            label="Margin"
            variant="standard"
            name="margin"
            value={options.margin}
            onChange={(e) => setOptions((options) => ({ ...options, margin: e.target.value }))}
            size="small"
          />
          <OptionsContoller />
        </Box>
      </Paper>
    </Grid>
  );
}

export default QRForm;
