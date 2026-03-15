import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Fonts = ({ searchQuery }) => {
	return <CategorySection id="fonts" sectionsData={data.fonts} searchQuery={searchQuery} />;
}