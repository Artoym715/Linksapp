import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function ReactSection({ searchQuery }) {
	return <CategorySection id="react" sectionsData={data.react} searchQuery={searchQuery} />;
}