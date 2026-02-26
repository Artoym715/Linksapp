import React from 'react';
import CategorySection from './CategorySection';
import data from '../data.json';

export default function Js({ searchQuery }) {
	return <CategorySection id="js" sectionsData={data.js} searchQuery={searchQuery} />;
}