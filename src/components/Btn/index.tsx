interface iButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export const Button: React.FC<iButton> = ({ children, type, onClick }) => {
	return (
		<button
			className='px-[48px] py-[26px] rounded-[26px] text-2xl leading-normal text-[#fefefe] font-semibold bg-btnGradient active:scale-[0.97]'
			type={type ?? 'button'}
			onClick={onClick}>
			{children}
		</button>
	);
};
