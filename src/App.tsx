import React from 'react';

import Header from './components/header/Header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <p>Text</p>
                </div>
            </main>
        </div>
    );
};

export default App;
