import PropTypes from 'prop-types'
import * as S from "./custom-button_styled"




export default function CustomButton({ text }) {
  return (
    <S.CustomButton>
    
    <span className="custom-text">{text}</span>
     
    </S.CustomButton>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};
