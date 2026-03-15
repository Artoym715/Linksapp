import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Animations = ({ searchQuery }) => {
	return <CategorySection id="animations" sectionsData={data.animations} searchQuery={searchQuery} />;
}