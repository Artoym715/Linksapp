import logo from '../assets/Grizly2.svg';
import githubLogo from '../assets/github-logo.svg';

export default function Header(){
	return(
		<>
	<header className="header">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="logo">
						<img src={logo} width="200px" height="100%" alt="logo"/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="socials">

					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6">
					<h1 className="header__title">Полезные ссылки 👨‍💻 для&nbsp;веб-разработчика</h1>
					<p className="header__text">Программы, сервисы и сайты, которые помогут в работе.</p>
					<a href="https://github.com/Artoym715/Links" className="btn btn-primary"> <span className="button-text">Добавить
							свою ссылку</span> <img className="button-img" src={githubLogo} alt=""/></a>
					<a href="https://github.com/Artoym715" target="blank" className="btn btn-primary p-2">
						<span className="button-text">Мой Github</span> <img className="button-img" src={githubLogo}
							alt=""/></a>
				</div>
			</div>
		</div>
	</header>
	   </>
	)
	
}