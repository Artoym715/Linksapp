import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Components = ({ searchQuery }) => {
	return <CategorySection id="components" sectionsData={data.components} searchQuery={searchQuery} />;
}