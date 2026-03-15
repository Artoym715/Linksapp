import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Hacks = ({ searchQuery }) => {
	return <CategorySection id="hacks" sectionsData={data.hacks} searchQuery={searchQuery} />;
}