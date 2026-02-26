import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Fonts({ searchQuery }) {
	return <CategorySection id="fonts" sectionsData={data.fonts} searchQuery={searchQuery} />;
}