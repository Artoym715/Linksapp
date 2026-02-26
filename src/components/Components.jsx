import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Components({ searchQuery }) {
	return <CategorySection id="components" sectionsData={data.components} searchQuery={searchQuery} />;
}