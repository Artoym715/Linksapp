import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Vue({ searchQuery }) {
	// Fallback to empty items for Vue as it was originally empty but might lack data in JSON
	const vueData = data.vue || [{ title: 'Vue', items: [] }];
	return <CategorySection id="vue" sectionsData={vueData} searchQuery={searchQuery} />;
}