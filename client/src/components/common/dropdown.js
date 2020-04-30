import React from 'react';

function Dropdown(props) { 
    let options = props.options.length > 0 && props.options.map((item, i) => {
        return (
            <option key={i} value={item.id}>{item.name}</option>
        )
    }, this);

    return (
      <div className="dropdown">      
        <select 
          onChange={props.onChange}
          id={props.id ? props.id : ''}
          className={props.className ? props.className : ''
          }>
              {props.defaultOption === true  && <option value="">Select</option>}
              {options}
        </select>
      </div>
      
    );
}

/*Theme1.defaultProps = {
  theme: {
    background_color: "palevioletred",
    color: "mediumseagreen"
  }
}*/

export default Dropdown;
