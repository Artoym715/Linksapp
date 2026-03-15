import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Graphics = ({ searchQuery }) => {
	return <CategorySection id="graphics" sectionsData={data.graphics} searchQuery={searchQuery} />;
}