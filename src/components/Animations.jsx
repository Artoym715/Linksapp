import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Animations({ searchQuery }) {
	return <CategorySection id="animations" sectionsData={data.animations} searchQuery={searchQuery} />;
}