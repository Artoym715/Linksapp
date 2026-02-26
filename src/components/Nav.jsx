export default function Nav({ activeFilter, setActiveFilter }){
	const navItems = [
		{ id: 'all', label: 'ALL' },
		{ id: 'code', label: 'CODE' },
		{ id: 'graphics', label: 'GRAPHICS' },
		{ id: 'fonts', label: 'FONTS' },
		{ id: 'css', label: 'CSS' },
		{ id: 'js', label: 'jQuery/JS' },
		{ id: 'react', label: 'React' },
		{ id: 'vue', label: 'Vue' },
		{ id: 'php', label: 'PHP' },
		{ id: 'laravel', label: 'Laravel' },
		{ id: 'components', label: 'Сomponents' },
		{ id: 'crib', label: 'CRIB' },
		{ id: 'hacks', label: 'HACKS' },
		{ id: 'animations', label: 'ANIMATIONS' },
		{ id: 'other', label: 'OTHER' },
	];

	return(
		<nav className="nav justify-content-center nav-tabs" role="tablist">
			{navItems.map((item) => (
				<a 
					key={item.id}
					className={`nav-link ${activeFilter === item.id ? 'active' : ''}`} 
					href="#"
					onClick={(e) => {
						e.preventDefault();
						setActiveFilter(item.id);
					}}
				>
					{item.label}
				</a>
			))}
		</nav>
	)
} 