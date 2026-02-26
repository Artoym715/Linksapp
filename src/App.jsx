import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Code from './components/Code';
import CSS from './components/CSS';
import Hacks from './components/Hacks';
import Php from './components/Php';
import Laravel from './components/Laravel';
import Components from './components/Components';
import React from './components/React';
import Vue from './components/Vue';
import Fonts from './components/Fonts';
import Js from './components/Js';
import Crib from './components/Crib';
import Graphics from './components/Graphics';
import Animations from './components/Animations';
import Other from './components/Other';
import ScrollUp from './components/ScrollUp';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isVisible = (category) => activeFilter === 'all' || activeFilter === category;
  const normalizedQuery = searchQuery.toLowerCase().trim();

  return (
    <>
	<ScrollUp />
	<Header/>
	<main className="section">
		<div className="container">
			<Nav activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
			<input 
				className="form-control" 
				id="elastic" 
				type="text" 
				placeholder="Поиск по списку..." 
				aria-label="Поиск"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<div className="row row-cols-1 row-cols-md-3">
				<div className="col">
					<div className={isVisible('code') ? '' : 'hide'}><Code searchQuery={normalizedQuery} /></div>
					<div className={isVisible('css') ? '' : 'hide'}><CSS searchQuery={normalizedQuery} /></div>
					<div className={isVisible('hacks') ? '' : 'hide'}><Hacks searchQuery={normalizedQuery} /></div>
					<div className={isVisible('php') ? '' : 'hide'}><Php searchQuery={normalizedQuery} /></div>
					<div className={isVisible('laravel') ? '' : 'hide'}><Laravel searchQuery={normalizedQuery} /></div>
					<div className={isVisible('components') ? '' : 'hide'}><Components searchQuery={normalizedQuery} /></div>
					<div className={isVisible('react') ? '' : 'hide'}><React searchQuery={normalizedQuery} /></div>
					<div className={isVisible('vue') ? '' : 'hide'}><Vue searchQuery={normalizedQuery} /></div>
				</div>
				<div className="col">
					<div className={isVisible('fonts') ? '' : 'hide'}><Fonts searchQuery={normalizedQuery} /></div>
					<div className={isVisible('js') ? '' : 'hide'}><Js searchQuery={normalizedQuery} /></div>
					<div className={isVisible('crib') ? '' : 'hide'}><Crib searchQuery={normalizedQuery} /></div>
				</div>			
				<div className="col">
					<div className={isVisible('graphics') ? '' : 'hide'}><Graphics searchQuery={normalizedQuery} /></div>
					<div className={isVisible('animations') ? '' : 'hide'}><Animations searchQuery={normalizedQuery} /></div>
					<div className={isVisible('other') ? '' : 'hide'}><Other searchQuery={normalizedQuery} /></div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
     
    </>
  )
}
