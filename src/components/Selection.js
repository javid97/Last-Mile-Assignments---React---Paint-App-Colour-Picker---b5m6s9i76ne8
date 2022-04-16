import React, {useState} from 'react';
import '../styles/Child.css';
function Selection(props) {
     const [background, setBackground] = useState({ background: '' });
     return (
          <div onClick={() => props.applyColor(setBackground)}
           className='fix-box' style={background}>
               <h2 className='subheading'>Selection</h2>
          </div>
     );
}

export default Selection;
