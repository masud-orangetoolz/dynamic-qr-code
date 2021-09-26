import { useState } from 'react';
import { SketchPicker } from 'react-color';

function ColorPicker({ getSelectedColor }) {
    const [backgroundColor, setBackgroundColor] = useState('#abcabc');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChange = (color) => {
        setBackgroundColor(color.hex);
        console.log(showColorPicker);
    };

    const hanldeClose = () => {
        getSelectedColor(backgroundColor);
        setShowColorPicker(false);
    };

    return (
        <div>
            {showColorPicker ? (
                <SketchPicker onChange={handleColorChange} color={backgroundColor} />
            ) : (
                <div style={{position: 'relative'}}>
                    <div
                        className={`${showColorPicker ? 'single_cover' : ''}`}
                        onClick={hanldeClose}
                    />
                    <div
                        onClick={() => setShowColorPicker(true)}
                        className="demo_color_box"
                        style={{ backgroundColor: `${backgroundColor}` }}
                    >
                        {backgroundColor}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ColorPicker;
