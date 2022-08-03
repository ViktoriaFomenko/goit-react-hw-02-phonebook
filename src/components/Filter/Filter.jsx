// import PropTypes from 'prop-types';
// import css from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
