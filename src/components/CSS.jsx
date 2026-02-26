import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function CSS({ searchQuery }) {
	return <CategorySection id="css" sectionsData={data.css} searchQuery={searchQuery} />;
}