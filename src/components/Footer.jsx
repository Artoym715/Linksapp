import footerLogo from '../assets/Grizly3.svg';

export default function Footer(){
	return(
		<>
		<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="logo">
						<img src={footerLogo} width="200px" height="100%" alt="logo"/>
					</div>
				</div>
				<div className="col-md-4">
					<div className="legal">
					</div>
				</div>
				<div className="col-md-4">
					<div className="socials">

					</div>
				</div>
			</div>
		</div>
	   </footer>
		</>
	)
}