import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Laravel({ searchQuery }) {
	return <CategorySection id="laravel" sectionsData={data.laravel} searchQuery={searchQuery} />;
}