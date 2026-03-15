import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Laravel = ({ searchQuery }) => {
	return <CategorySection id="laravel" sectionsData={data.laravel} searchQuery={searchQuery} />;
}