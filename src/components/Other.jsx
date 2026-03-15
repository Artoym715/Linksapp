import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Other = ({ searchQuery }) => {
	return <CategorySection id="other" sectionsData={data.other} searchQuery={searchQuery} />;
}