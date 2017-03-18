import React from 'react';

const App = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Minicart with react and redux</h1><br />
        {children}
      </div>
    </div>
  );
}

export default App;
