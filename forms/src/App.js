import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {


  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';
    const data = formValues[name] || {};

    if (isCheckbox) {
      data[value] = checked;
    }

    console.log('***handleInputChange', data);

    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  }

  /*const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    console.log('***handleInputChange', e.target);
    setValue(e.target.value);
  }
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)
    console.log('***handleSubmit', data);

  };
  

  return (


    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='name' onChange={handleInputChange} value={formValues.name || ''} />
        <input type="text" name='email' placeholder='Email' onChange={handleInputChange} value={formValues.email || ''} />

        <select name='language' onChange={handleInputChange} value={formValues.language || ''} >
          <option value='javascript'>Javascript</option>
          <option value='php'>PHP</option>
          <option value='python'>Python</option>
          <option value='java'>Java</option>
          <option value='ruby'>Ruby</option>
        </select>

        <div className='radios' >
          <label>
            <input type='radio' value='cafe' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cafe'} />cafe
          </label>
          <label>
            <input type='radio' value='cha' name='drink' onChange={handleInputChange} checked={formValues.drink === 'cha'} />Cha
          </label>
        </div>

        <div className='checks'>
          <label><input type='checkbox' name='social' value='twitter' onChange={handleInputChange}
            checked={formValues.social && formValues.social.twitter} />twitter</label>
          <label><input type='checkbox' name='social' value='instagram' onChange={handleInputChange}
            checked={formValues.social && formValues.social.instagram} />Instagram</label>
          <label><input type='checkbox' name='social' value='facebook' onChange={handleInputChange}
            checked={formValues.social && formValues.social.facebook} />Facebook</label>
        </div>

        <textarea name='bio' onChange={handleInputChange} values={formValues.bio || ''}></textarea>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;




