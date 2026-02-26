import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Php({ searchQuery }) {
	return <CategorySection id="php" sectionsData={data.php} searchQuery={searchQuery} />;
}