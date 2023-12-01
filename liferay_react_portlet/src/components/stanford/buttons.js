import React from 'react'; 
import InfoIcon from "../../assets/images/icons/info_icon.svg";
const ArrowIcon = () => {  return <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.1665 6.99984H12.8332M12.8332 6.99984L6.99984 1.1665M12.8332 6.99984L6.99984 12.8332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"/></svg> } ;
const Button = ({ size, type, iconPosition, hasIcon, buttonDisabled }) => {
  const buttonClass = `sdfd-btn ${size}-btn ${type}-btn ${buttonDisabled && 'disabled' }  ${iconPosition == 'icon-only' ? 'i-btn' : ''} `;

  return (
    <>
   <div style={{display:'flex', flexDirection:'column', gap:20}}><a href="#" className={buttonClass} disabled={buttonDisabled ? 'buttonDisabled' : ''} >
      {iconPosition === 'icon-before' ?  <ArrowIcon />  : '' }
    {iconPosition === 'icon-only' ? <ArrowIcon /> : 'button' }    
      {iconPosition === 'icon-after' &&   <ArrowIcon />  }
    </a> 
    <button  className={buttonClass} disabled={buttonDisabled ? 'buttonDisabled' : ''} >
      {iconPosition === 'icon-before' ?  <ArrowIcon />  : '' }
    {iconPosition === 'icon-only' ? <ArrowIcon /> : 'button' }    
      {iconPosition === 'icon-after' &&   <ArrowIcon />  }
    </button></div> </>
  );
};

const Buttons = () => {
  const buttonData = [
    { size: 'sm', type: 'primary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'primary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'primary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'primary', iconPosition: '', hasIcon: true, buttonDisabled: true },
    { size: 'sm', type: 'secondary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'secondary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: '', hasIcon: true, buttonDisabled: true },
    { size: 'sm', type: 'ghost', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'ghost', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: '', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: '', hasIcon: true, buttonDisabled: true },
    { size: 'sm', type: 'primary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'primary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'primary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'secondary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'secondary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'ghost', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'ghost', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: 'icon-before', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'primary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'primary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'primary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'secondary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'secondary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: true },
    { size: 'sm', type: 'ghost', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'ghost', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: 'icon-after', hasIcon: true, buttonDisabled: true },
    { size: 'sm', type: 'primary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'primary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'primary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'secondary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'secondary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'secondary', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'sm', type: 'ghost', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'md', type: 'ghost', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: false },
    { size: 'lg', type: 'ghost', iconPosition: 'icon-only', hasIcon: true, buttonDisabled: true },
  ];

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:50,padding:50 }}>
      {buttonData.map((button, index) => (
       <>
        <Button key={index} {...button}    /> 
        </>
      ))}
    </div>
  );
};

export default Buttons;
 