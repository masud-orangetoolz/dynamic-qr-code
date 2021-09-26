import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import '../css/GradientColor.css';

function GradientColor() {
  const [backgroundColor1, setBackgroundColor1] = useState('#abcabc');
  const [backgroundColor2, setBackgroundColor2] = useState('#abcabc');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [changingBtn, setChangingBtn] = useState(1);

  const handleColorChange = (color) => {
    if (changingBtn === 1) setBackgroundColor1(color.hex)
    if (changingBtn === 2) setBackgroundColor2(color.hex)
  };

  const handleDisplay = (changeNum) => {
    setChangingBtn(changeNum);
    setDisplayColorPicker(true);
  };

  const hanldeClose = () => {
    setDisplayColorPicker(false);
  };
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gradient Type</FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="row-radio-buttons-group"
          //   value={colorType}
          //   onChange={handleColorType}
        >
          <FormControlLabel value="linear" control={<Radio />} label="linear" />
          <FormControlLabel value="radial" sx={{ ml: 5 }} control={<Radio />} label="radial" />
        </RadioGroup>
      </FormControl>
      <div className="single_color">
        <p>Dots Gradient </p>
        <div className="single_cover" onClick={hanldeClose} />
        {displayColorPicker ? (
          <SketchPicker onChange={handleColorChange} color={backgroundColor1} />
        ) : (
          <div className="gradient_colors_grp">
            <div
              onClick={() => handleDisplay(1)}
              className="demo_color_box"
              style={{ backgroundColor: `${backgroundColor1}` }}
            >
              {backgroundColor1}
            </div>
            <div
              onClick={() => handleDisplay(2)}
              className="demo_color_box"
              style={{ backgroundColor: `${backgroundColor2}` }}
            >
              {backgroundColor2}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GradientColor;
