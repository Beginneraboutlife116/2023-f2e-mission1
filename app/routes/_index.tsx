import type { MetaFunction } from '@remix-run/node';
import Home from '~/pages/_index';

export const meta: MetaFunction = () => {
	return [
		{ title: '喵立翰 Miao Li-Han' },
		{ name: 'description', content: '2024 立委參選人 喵立翰 Miao Li-Han' },
	];
};

export default function Index() {
	return <Home />;
}
