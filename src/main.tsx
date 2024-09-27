import './index.css';

import { createRoot } from 'react-dom/client';
import { Routes } from './lib/generouted-custom';

createRoot(document.getElementById('root')!).render(<Routes />);
