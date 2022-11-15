import "./footer.css"

function Footer() {
	return (
		<footer className={"footer"}>
			<a href={"https://www.departement13.fr/"} target={"_blank"}>
				<img src={"../img/d13.png"} alt="d13"/>
			</a>
			<a href={"https://www.voyage-prive.com"} target={"_blank"}>
				<img src={"../img/voyageprive.png"} alt={"voyage privé"}/>
			</a>
			<a href={"https://inco-group.co/"} target={"_blank"}>
				<img className={"smaller"} src={"../img/inco.png"} alt={"inco"}/>
			</a>
			<a href={"https://www.myprovence.fr/"} target={"_blank"}>
				<img src={"../img/provencetourisme.png"} alt={"my provence"}/>
			</a>
			<a href={"https://code4marseille.fr/"} target={"_blank"}>
				<img src={"../img/code4marseille.png"} alt={"code4marseille"}/>
			</a>

			<a href={"https://aws.amazon.com/fr/"} target={"_blank"}>
				<img src={"../img/AWS.png"} alt={"aws"}/>
			</a>
		</footer>
	);
}

export default Footer;