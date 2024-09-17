import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './index.css';
import { Hero } from './components/Hero';
import { Container } from './components/Container';

export const App = () => {
	return (
		<Container cls='max-w-[1440px] px-0'>
			<div className='flex flex-col min-h-svh'>
				<Header />
				<main className='flex-1'>
					<Hero />
				</main>
				<Footer />
			</div>
		</Container>
	);
};
