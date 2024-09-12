import cn from 'classnames';

interface IContainer {
	cls?: string;
	children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ cls, children }) => {
	return (
		<div className={cn(`m-auto max-w-[1260px] w-full px-[15px] ${cls || ''}`)}>
			{children}
		</div>
	);
};
