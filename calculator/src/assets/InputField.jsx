import React from 'react';

function InputField({ id, labelTamil, labelEnglish, type = "text", options = [], name }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label" data-tamil={labelTamil} data-english={labelEnglish}>
        {labelTamil}
      </label>
      {type === "select" ? (
        <select id={id} className="form-control">
          {options.map((option, index) => (
            <option key={index} value={option.value} data-tamil={option.labelTamil} data-english={option.labelEnglish}>
              {option.labelTamil}
            </option>
          ))}
        </select>
      ) : type === "radio" ? (
        options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              id={`${id}-${index}`}
              name={name}
              value={option.value}
              className="form-check-input"
            />
            <label htmlFor={`${id}-${index}`} className="form-check-label" data-tamil={option.labelTamil} data-english={option.labelEnglish}>
              {option.labelTamil}
            </label>
          </div>
        ))
      ) : (
        <input type={type} id={id} className="form-control" />
      )}
    </div>
  );
}

export default InputField;
