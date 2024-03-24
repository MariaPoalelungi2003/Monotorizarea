import React, { useState } from 'react';
import { Table } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
    const [inputText, setInputText] = useState('');
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        alert(`Input 1: ${input1Value}`)
        console.log('Textul introdus:', inputText);
    };

    const handleButtonClick1 = () => {
        alert(`Input 2: ${input2Value}`);
        console.log('Textul introdus:', inputText);
    };


    const handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
            setIsVisible(true);
        }
    };

    const renderText = () => {
        return (
            <div className='alt_text'>
                <div className='text'>
                    <div id='text-app' className='text-app'>
                        <h2>Imagine</h2>
                        MediaGuard is a term often heard in discussions about online safety and digital security. But
                        what exactly is MediaGuard,
                        and why is it important? Let's break it down in simple terms. <br/>
                        MediaGuard is a tool designed to protect users from harmful content and activities on the
                        internet. It acts as a guardian,
                        helping to filter out inappropriate or dangerous material, such as explicit images, violent
                        videos, or misleading information.
                        <div className='text-input'>
                            {/* Câmpul de intrare pentru text */}
                            <input placeholder="Introdu link-ul" value={input1Value}
                                   onChange={e => setInput1Value(e.target.value)} type='text'/>
                            {/* Butonul care va reacționa la apăsarea sa */}
                            <button onClick={handleButtonClick}>Apasă</button>
                        </div>
                    </div>

                    <div className='text-img'></div>
                </div>
            </div>
        );
    };

    const renderTextnr1 = () => {
        return (
            <div className='alt_text'>
                <div className='text1'>
                    <div className='text-img1'></div>
                    <div id='text-app1' className='text-app1'>
                        <h2>Text</h2>
                        MediaGuard is a term often heard in discussions about online safety and digital security. But what exactly is MediaGuard,
                        and why is it important? Let's break it down in simple terms. <br/>
                        MediaGuard is a tool designed to protect users from harmful content and activities on the internet. It acts as a guardian,
                        helping to filter out inappropriate or dangerous material, such as explicit images, violent videos, or misleading information.
                        <div className='text-input'>
                            {/* Câmpul de intrare pentru text */}
                            <input placeholder="Introdu link-ul" value={input2Value}
                                   onChange={e => setInput2Value(e.target.value)} type='text'/>
                            {/* Butonul care va reacționa la apăsarea sa */}
                            <button onClick={handleButtonClick1}>Apasă</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const columns = [
        {
            title: 'Nr',
            dataIndex: 'number',
            key: 'number',
            width: '5%',
        },
        {
            title: 'Nr',
            dataIndex: 'URL',
            key: 'URL',
            width: '85%',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Similaritate',
            dataIndex: 'Smilarity',
            key: 'Smilarity',
            width: '10%',
            responsive: ['md'],
        },

    ];

    const data = [
        {
            number: '1',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '2',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '3',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '4',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '5',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '6',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '7',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '8',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '9',
            URL: 'John Brown',
            Smilarity: 32,
        },
        {
            number: '10',
            URL: 'John Brown',
            Smilarity: 32,
        },
    ];

    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-logo">
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#text-app" className="navbar-link">Imagini</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#text-app1" className="navbar-link">Text</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">About Us</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </nav>
            <header className="App-header">
                <h1 className="site-title">MediaGuard</h1>
            </header>
            {renderText()}
            {renderTextnr1()}
            <Table columns={columns} dataSource={data} />
            <footer>
                <div></div>
            </footer>
        </div>
    );
}

export default App;
