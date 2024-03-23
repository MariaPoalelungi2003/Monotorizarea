import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // Starea pentru textul introdus în câmpul de intrare
    const [inputText, setInputText] = useState('');
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    // Funcția de tratare a evenimentului pentru buton
    const handleButtonClick = () => {
        alert(`Input 1: ${input1Value}, Input 2: ${input2Value}, Input 3: ${input3Value}`);
        console.log('Textul introdus:', inputText);
        // Aici puteți face orice doriți cu textul introdus, de exemplu, să-l afișați pe ecran sau să-l procesați în alt mod
    };

    // Funcția care va fi apelată atunci când imaginea devine vizibilă
    const handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
            setIsVisible(true);
        }
    };

    // Efect secundar pentru a configura Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(document.querySelector('.text-img img'));
        return () => observer.disconnect(); // Deconectați observatorul când componenta este demontată
    }, []);

    const renderText = () => {
        return (
            <div className='alt_text'>
                <div className='text'>
                    <div className='text-app'>
                        <h2>Imagine</h2>
                        Cu aceste stiluri, textul va fi afișat pe mai multe linii atunci când atinge marginea
                        containerului, împărțind cuvintele la sfârșitul liniei pentru a se încadra în spațiul
                        disponibil. Aceasta este
                        utilă în special pentru texte lungi sau texte care pot fi prea lungi pentru a încăpea pe o
                        singură
                        linie fără să fie întrerupte.<br/>
                        Concluzia este că înțelegerea conceptelor legate de crearea și păstrarea parolelor puternice
                        este
                        crucială pentru protejarea datelor și accesului la resursele personale și profesionale.
                        <div className='text-input'>
                            {/* Câmpul de intrare pentru text */}
                            <input placeholder="Introdu link-ul" value={input1Value}
                                   onChange={e => setInput1Value(e.target.value)} type='text'/>
                            {/* Butonul care va reacționa la apăsarea sa */}
                            <button onClick={handleButtonClick}>Apasă</button>
                        </div>
                    </div>
                    <div className='text-img'>
                        <img className={isVisible ? 'slide-in-right' : ''} src='https://i.pinimg.com/564x/93/88/de/9388de1969a0a631da9d9a8ef9311379.jpg' alt='Imagine' />
                    </div>
                </div>

            </div>
        );
    };

    const renderTextnr1 = () => {
        return (
            <div className='alt_text'>
                <div className='text1'>
                    <div className='text-img1'>
                        <img className={isVisible ? 'slide-in-left' : ''}
                             src='https://i.pinimg.com/564x/36/15/4f/36154fab971b48e453c706150c380754.jpg'
                             alt='Imagine'/>
                    </div>
                    <div className='text-app1'>
                        <h2>Text</h2>
                        Cu aceste stiluri, textul va fi afișat pe mai multe linii atunci când atinge marginea
                        containerului, împărțind cuvintele la sfârșitul liniei pentru a se încadra în spațiul
                        disponibil. <br/>
                        Concluzia este că înțelegerea conceptelor legate de crearea și păstrarea parolelor puternice
                        este
                        crucială pentru protejarea datelor și accesului la resursele personale și profesionale.
                        <div className='text-input'>
                            {/* Câmpul de intrare pentru text */}
                            <input placeholder="Introdu link-ul" value={input2Value}
                                   onChange={e => setInput1Value(e.target.value)} type='text'/>
                            {/* Butonul care va reacționa la apăsarea sa */}
                            <button onClick={handleButtonClick}>Apasă</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    };

    const renderFooter = () => {
        return (
            <footer>
                <div></div>
            </footer>
        );
    };

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
                        <a href="#" className="navbar-link">About Us</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Imagini</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Text</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </nav>
            <header className="App-header">
                <h1 className="site-title">Numele Site-ului</h1>
            </header>
            {/* Utilizați funcția renderText pentru a randează textul */}
            {renderText()}
            {renderTextnr1()}
            {renderFooter()}
        </div>
    );
}

export default App;
