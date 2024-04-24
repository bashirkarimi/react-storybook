import Alert from './components/Alert';
import Button from './components/Button';
import {  faUser } from '@fortawesome/free-regular-svg-icons'

import './App.css';

function App() {

  return (
    <>
      <Alert title="Alert" text="This is an alert." alertType='info' icon={faUser} closeable={true} />
      <Button  variant='primary'>Primary</Button>
      <Button  variant='secondary'>secondary</Button>
      <Button  variant='tertiary'>tertiary</Button>
    </>
  );
}

export default App;
