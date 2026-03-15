import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Js = ({ searchQuery }) => {
	return <CategorySection id="js" sectionsData={data.js} searchQuery={searchQuery} />;
}