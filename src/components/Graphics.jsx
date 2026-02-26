import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Graphics({ searchQuery }) {
	return <CategorySection id="graphics" sectionsData={data.graphics} searchQuery={searchQuery} />;
}