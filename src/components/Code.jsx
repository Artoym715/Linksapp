import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Code = ({ searchQuery }) => {
	return <CategorySection id="code" sectionsData={data.code} searchQuery={searchQuery} />;
}