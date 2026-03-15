import { CategorySection } from './CategorySection';
import data from '../data.json';

export const React = ({ searchQuery }) => {
	return <CategorySection id="react" sectionsData={data.react} searchQuery={searchQuery} />;
}