import '../css/SingleColor.css';
import ColorPicker from './common/ColorPicker';

function SingleColor() {  
  const getSelectedColor = (backgroundColor) => {
    console.log(backgroundColor)
  } 

  return (
    <div className="single_color">
      <p>Dots Color </p>
      <ColorPicker getSelectedColor={getSelectedColor} />
    </div>
  );
}

export default SingleColor;
