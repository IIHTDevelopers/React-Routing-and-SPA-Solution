import React from 'react';
import { Route, Switch } from 'react-router-dom';  // Use Switch in v5

// Import the pages
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import About from './pages/About';

// Import Header component
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Add Header component here */}
      <Header />

      <main>
        {/* Use Switch in v5 */}
        <Switch>
          {/* Define routes using component prop */}
          <Route exact path="/" component={Home} />
          <Route path="/task-list" component={TaskList} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
