import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Crib = ({ searchQuery }) => {
	return <CategorySection id="crib" sectionsData={data.crib} searchQuery={searchQuery} />;
}