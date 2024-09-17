import clsx from 'clsx/lite';

interface IContainer {
	cls?: string;
	children: React.ReactNode;
}

export const Container: React.FC<IContainer> = ({ cls, children }) => {
	return (
		<div className={clsx('m-auto max-w-[1260px] w-full px-[15px]', cls || '')}>
			{children}
		</div>
	);
};
