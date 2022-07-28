import type { FunctionComponent } from 'react'
import { useAppContext } from '../../../context/state'
import styles from '../../../styles/Ribbon.module.scss'
 
const Ribbon: FunctionComponent = () => {
	const [scene, dispatch] = useAppContext()
	return (
		<>
			<div className={`${styles.ribbon} ${styles[scene.bookAnimation]}`}>
				<div className={`${styles.top}`}><div><div><div><div></div></div></div></div></div>
				<div className={`${styles.bottom}`}><div><div><div><div></div></div></div></div></div>
				<div className={`${styles.left}`}><div><div><div><div></div></div></div></div></div>
				<div className={`${styles.right}`}><div><div><div><div></div></div></div></div></div>
			</div>
		</> 
	);
}
 
export default Ribbon;