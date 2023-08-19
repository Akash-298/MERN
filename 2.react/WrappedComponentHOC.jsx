import React, { useState } from 'react'; // Higher-Order Component
 const withHoverEffect = (WrappedComponent) => { 
return (props) => {
 const [isHovered, setHovered] = useState(false);
 const handleHover = () => { setHovered(true); };
 const handleLeave = () => { setHovered(false); };
 return (
 <div onMouseEnter={handleHover} onMouseLeave={handleLeave}> <WrappedComponent isHovered={isHovered} {...props} /> </div> ); 
}; 
}; // Component that will be wrapped by the HOC 
const HoverableComponent = ({ isHovered }) => { 
return ( <div> <p>{isHovered ? 'Hovered!' : 'Hover over me!'}</p> </div> );
 }; // Wrap HoverableComponent with the HOC 
const ComponentWithHoverEffect = withHoverEffect(HoverableComponent);//Usage of the wrapped component
 const App = () => {
 return ( <div> 
<h1>Higher-Order Component Example</h1>
 <ComponentWithHoverEffect />
 </div> );
 };
 export default App;
