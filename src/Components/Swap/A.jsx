import { useState } from 'react';
import './A.css';

function A() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleInputSubmit = (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
            processCommand(input);
            setInput('');
        }
    };

    const processCommand = (command) => {
        const response = `Command: ${command}`;
        setOutput([...output, response]);
    };

    return (
        <div className="App">
            <div className="terminal">
                <div className="output">
                    {output.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <form onSubmit={handleInputSubmit}>
                    <span>$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        autoFocus
                    />
                </form>
            </div>
        </div>
    );
}

export default A;
