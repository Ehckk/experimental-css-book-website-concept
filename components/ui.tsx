import type { FunctionComponent } from 'react'
import styles from '../styles/Utils.module.scss'
import Controls from './scene/2D/controls';
 
const UI: FunctionComponent = () => {
	return ( 
		<div className={styles.container}>
			<Controls></Controls>
		</div>
	);
}
 
export default UI;