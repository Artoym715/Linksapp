import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Other({ searchQuery }) {
	return <CategorySection id="other" sectionsData={data.other} searchQuery={searchQuery} />;
}