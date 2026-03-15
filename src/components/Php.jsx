import { CategorySection } from './CategorySection';
import data from '../data.json';

export const Php = ({ searchQuery }) => {
	return <CategorySection id="php" sectionsData={data.php} searchQuery={searchQuery} />;
}