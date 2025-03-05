import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import './styles/fonts.scss';
import './styles/vars.scss';
import { StrictMode } from 'react';

const root = document.getElementById('root');

if (!root) {
    throw new Error('No Root');
}

const container = createRoot(root);
container.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
