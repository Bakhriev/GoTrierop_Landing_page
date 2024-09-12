import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './index.css';

export const App = () => {
	return (
		<div className='flex flex-col min-h-svh '>
			<Header />
			<main className='flex-1'></main>
			<Footer />
		</div>
	);
};
