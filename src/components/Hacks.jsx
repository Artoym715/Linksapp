import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Hacks({ searchQuery }) {
	return <CategorySection id="hacks" sectionsData={data.hacks} searchQuery={searchQuery} />;
}