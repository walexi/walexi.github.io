import React from 'react';
import s from './maintenance.module.css';
import Helmet from 'react-helmet';
import {Layout, Container} from 'layouts'
const moment = require('moment');

const Maintenance = () => (
	<Layout>
		<Helmet title={"Site under Maintenance"} status={503} />
		<div className={s.root}>
				<div id={s.wrapper}>
					<div className={s.grid}>
					<span className={s.server}></span>
					<span className={s.server}></span>
					<span className={s.server}></span>
					<span className={s.server}></span>
					<span className={s.server}></span>
					</div>
					<div className={s.content}>          
					<h1>We're currently undergoing a bit of scheduled maintenance.</h1>
					<p>Sorry for the inconvenience. We'll be back up and running as fast as possible</p>
					</div>
				</div>
				<div className={s.footer}>
					<div className={"ui inverted footer"}>
						<p>© {moment().year()} Olawale Onabola. All Rights Reserved</p>
					</div>
				</div>  
		</div>
	</Layout>
)

export default Maintenance









