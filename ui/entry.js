import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'js/components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'style/stylesheet.scss';

const gameData = {
    categories: [
        {
            topic: "ReactJS",
            questions: [
                {
                    value: 100,
                    display: "Which is considered immutable, state or props?",
                    answer: "props"
                },
                {
                    value: 200,
                    display: "True or false: React Components and WebComponents are the same.",
                    answer: "false"
                },
                {
                    value: 300,
                    display: "True or false: You need to use Redux with React.",
                    answer: "false"
                },
                {
                    value: 400,
                    display: "Who will Google hire to kill you if you use React JS?",
                    answer: "michael cera"
                },
                {
                    value: 500,
                    display: "True or false: If you use ReactJS after midnight, you have to beg Facebook to let you leave your computer",
                    answer: "false"
                }
            ]
        },
        {
            topic: "Javascript",
            questions: [
                {
                    value: 100,
                    display: "True or false: The 'const' keyword makes values completely immutable",
                    answer: "false"
                },
                {
                    value: 200,
                    display: "True or False: Arrow functions are the same as anonymous functions",
                    answer: "false"
                },
                {
                    value: 300,
                    display: "What is more performant with memory? WeakMap or Set?",
                    answer: "weakmap"
                },
                {
                    value: 400,
                    display: "The V8 Javascript engine was developed by what company?",
                    answer: "google"
                },
                {
                    value: 500,
                    display: "True or false: Dependency Injection is the best module pattern in Javascript",
                    answer: "false"
                },
            ]
        },
        {
            topic: "Virtual Reality",
            questions: [
                {
                    value: 100,
                    display: "Which VR headset allows users to move around in a designated play-space?",
                    answer: "htc vive"
                },
                {
                    value: 200,
                    display: "True or false: React Components and WebComponents are the same.",
                    answer: "false"
                },
                {
                    value: 300,
                    display: "True or false: You need to use Redux with React.",
                    answer: "false"
                },
                {
                    value: 400,
                    display: "Who was the first person to get pregnant while in Virtual Reality?",
                    answer: "vijay menon"
                },
                {
                    value: 500,
                    display: "True or false: If you use ReactJS after midnight, you have to beg Facebook to let you leave your computer",
                    answer: "false"
                }
            ]
        },
        {
            topic: "More ReactJS",
            questions: [
                {
                    value: 100,
                    display: "React [SyntheticEvent] uses what standard ES2016+ feature?",
                    answer: "proxy"
                },
                {
                    value: 200,
                    display: "True or False: React can only be used as a framework and nothing else",
                    answer: "false"
                },
                {
                    value: 300,
                    display: "True or False: React uses two way data binding",
                    answer: "false"
                },
                {
                    value: 400,
                    display: "True or False: Using ReactJS requires the use of the JSX language extension",
                    answer: "false"
                },
                {
                    value: 500,
                    display: "True or False: Large lists in React can be virtualized in order to keep the DOM performant",
                    answer: "true"
                }
            ]
        },
        {
            topic: "Web Security",
            questions: [
                {
                    value: 100,
                    display: "An SSH connection uses which protocol, TCP or UDP?",
                    answer: "tcp"
                },
                {
                    value: 200,
                    display: "XSS stands for what kind of attack? (no dashes)",
                    answer: "cross site scripting"
                },
                {
                    value: 300,
                    display: "Performing a Self-XSS attack starts with tricking a user into opening up what part of the browser?",
                    answer: "developer tools"
                },
                {
                    value: 400,
                    display: "What is the act of escaping potentially dangerous strings called?",
                    answer: "sanitization"
                },
                {
                    value: 500,
                    display: "Out of all the types of security attacks, which one is the most common and effective?",
                    answer: "social engineering"
                }
            ]
        },
    ]
};



ReactDOM.render(
    <App gameData={gameData}/>,
    document.getElementById('app')
);
