import React, { useMemo } from 'react';

export default function CategorySection({ id, sectionsData, searchQuery = '' }) {
	// Использование useMemo для оптимизации фильтрации
	const filteredSections = useMemo(() => {
		const query = searchQuery.toLowerCase();
		
		if (!sectionsData || !Array.isArray(sectionsData)) return [];

		return sectionsData.map(section => {
			// Безопасная фильтрация с Nullish coalescing и опциональной цепочкой вызовов
			const filteredItems = (section.items || []).filter(item => 
				item.title?.toLowerCase()?.includes(query) || 
				item.desc?.toLowerCase()?.includes(query)
			);
			
			return { ...section, items: filteredItems };
		}).filter(section => section.items.length > 0);
	}, [sectionsData, searchQuery]);

	// Семантический fallback для A11y
	if (filteredSections.length === 0 && searchQuery !== '') {
		return (
			<div className={`box ${id}`} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
				<p role="status" className="empty-search-message" style={{ padding: '20px', color: '#666' }}>
					По вашему запросу ничего не найдено.
				</p>
			</div>
		);
	}

	return (
		<div className={`box ${id}`} id={id} role="tabpanel" aria-labelledby={`${id}-tab`} aria-live="polite">
			{filteredSections.map((section, idx) => (
				<React.Fragment key={idx}>
					{section.title && <h3 className="section-title">{section.title}</h3>}
					<ol className="unstyled-list">
						{section.items.map((item, index) => (
							<li key={index}>
								<a target="_blank" href={item.href} rel="noreferrer">{item.title}</a>{item.desc ? ` – ${item.desc}` : ''}
							</li>
						))}
					</ol>
				</React.Fragment>
			))}
		</div>
	);
}
