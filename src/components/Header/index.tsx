import clsx from 'clsx/lite';

import { useState } from 'react';

import { Container } from '../Container';

export const Header = () => {
	const [activeLink, setActiveLink] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='absolute left-0 z-10 w-full py-4'>
			<Container>
				<div className='flex items-center justify-between'>
					<img
						className='w-[94px] h-[24px] lg:w-[70px] lg:h-[24px]'
						src='/logo.svg'
						alt='logo'
					/>

					<nav
						className={clsx(
							'lg:fixed lg:top-0 lg:right-0 lg:w-[320px] lg:bg-gray-800 lg:h-full lg:bottom-0 lg:overflow-y-auto lg:py-20 lg:translate-x-full lg:transition-all',
							isMenuOpen && 'lg:transform-none'
						)}>
						<ul className='flex gap-20 lg:flex-col lg:gap-10 lg:items-center'>
							<li>
								<a
									onClick={() => setActiveLink(0)}
									className={clsx(
										'relative font-medium text-white',
										activeLink === 0 &&
											'before:w-[78%] before:h-1 before:bg-white before:absolute before:top-[calc(100%+2px)] before:rounded-full'
									)}
									href='#'>
									Home
								</a>
							</li>
							<li>
								<a
									onClick={() => setActiveLink(1)}
									className={clsx(
										'relative font-medium text-white',
										activeLink === 1 &&
											'before:w-[78%] before:h-1 before:bg-white before:absolute before:top-[calc(100%+2px)] before:rounded-full'
									)}
									href='#'>
									Services
								</a>
							</li>
							<li>
								<a
									onClick={() => setActiveLink(2)}
									className={clsx(
										'relative font-medium text-white',
										activeLink === 2 &&
											'before:w-[78%] before:h-1 before:bg-white before:absolute before:top-[calc(100%+2px)] before:rounded-full'
									)}
									href='#'>
									Pricing
								</a>
							</li>
							<li>
								<a
									onClick={() => setActiveLink(3)}
									className={clsx(
										'relative font-medium text-white',
										activeLink === 3 &&
											'before:w-[78%] before:h-1 before:bg-white before:absolute before:top-[calc(100%+2px)] before:rounded-full'
									)}
									href='#'>
									Contact
								</a>
							</li>
						</ul>
					</nav>

					<div className='flex items-center gap-6'>
						<button className='font-medium text-white hover:text-gray-300 active:text-gray-400'>
							Sign up
						</button>
						<button className='py-3 px-11 font-medium text-white bg-btnGradient rounded-full active:scale-[0.98] lg:px-4 lg:py-2 leading-5 lg:rounded-lg'>
							Login
						</button>

						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='relative z-20 hidden lg:flex w-6 h-3 flex-col justify-between'>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
							<span className='inline-block bg-white h-[1px] w-full rounded-full'></span>
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};
