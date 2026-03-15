import { CategorySection } from './CategorySection';
import data from '../data.json';

export const CSS = ({ searchQuery }) => {
	return <CategorySection id="css" sectionsData={data.css} searchQuery={searchQuery} />;
}