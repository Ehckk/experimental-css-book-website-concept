import { FunctionComponent, useRef } from 'react'
import { useAppContext } from '../context/state';
import styles from '../styles/Scene.module.scss'
import Book from './scene/3D/book';

interface SceneProps {
	
}
 
const Scene: FunctionComponent<SceneProps> = () => {
	const plane = useRef<HTMLDivElement>(null)
	const [scene, dispatch] = useAppContext()
	// TODO render a simplified page (just the page contents) on small devices
	return ( 
		<div className={styles.scene}>
			<div ref={plane} className={`${styles.plane} ${styles[scene.planeAnimation]}`}>
				<Book></Book>
			</div>
		</div>
	);
}
 
export default Scene;