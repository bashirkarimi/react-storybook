import Alert from './components/Alert';
import {  faUser } from '@fortawesome/free-regular-svg-icons'

import './App.css';

function App() {

  return (
    <>
      <Alert title="Alert" text="This is an alert." alertType='info' icon={faUser} closeable={true} />
    </>
  );
}

export default App;
