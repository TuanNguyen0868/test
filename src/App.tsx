import React from 'react';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import RightMenu from './components/RightMenu'

import HomePage from './Page/home';
import ProductPage from './Page/product';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <nav style={{backgroundColor: '#e5e2e2', margin: 0}}>
        <ul style={{listStyleType:'none', display:'flex', margin: 0, }}>
          <li style={{textDecoration:'none', padding: 20 }}><Link style={{textDecoration:'none', fontWeight: 'bold',fontSize:22 }} to='/'>Home Page</Link></li>
          <li style={{textDecoration:'none', padding: 20 }}><Link style={{textDecoration:'none', fontWeight: 'bold',fontSize:22 }} to='/product'>Product</Link></li>
          <RightMenu/>
        </ul>
      </nav>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/product' component={ProductPage} />
    </>
  );
};

export default App;

