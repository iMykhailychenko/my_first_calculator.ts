import React, {useState} from 'react';

import ReactDOM from 'react-dom';
import { myFirstCalculator } from './my_first_calculator';

import './index.css';

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

// SIMPLE FORM MARKUP
const App = () => {
    const [inputs, setInputs] = useState({ num1: '0', num2: '0', sign: '+' });
    const handleChange = (e: any) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    // RUN CALCULATOR HERE
    const handleSubmit = (e: any) => {
        e.preventDefault();
        myFirstCalculator(inputs.num1, inputs.num2, inputs.sign);
    };

    return (
        <form action='#' method='post' onSubmit={handleSubmit}>
            <label>
                <p>Select first number:</p>
                <select name='num1' value={inputs.num1} onChange={handleChange}>
                    {NUMBERS.map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                <p>Select second number:</p>
                <select name='num2' value={inputs.num2} onChange={handleChange}>
                    {NUMBERS.map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                <p>Select sign:</p>
                <select name='sign' value={inputs.sign} onChange={handleChange}>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
            </label>

            <button type='submit'>Calculate</button>
        </form>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);