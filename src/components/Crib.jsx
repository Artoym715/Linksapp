import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Crib({ searchQuery }) {
	return <CategorySection id="crib" sectionsData={data.crib} searchQuery={searchQuery} />;
}