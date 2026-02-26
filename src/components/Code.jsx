import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Code({ searchQuery }) {
	return <CategorySection id="code" sectionsData={data.code} searchQuery={searchQuery} />;
}