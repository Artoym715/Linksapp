import CategorySection from './CategorySection';
import data from '../data.json';

export default function Vue({ searchQuery }) {
	const vueData = data.vue || [{ title: 'Vue', items: [] }];
	return <CategorySection id="vue" sectionsData={vueData} searchQuery={searchQuery} />;
}