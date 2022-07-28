import { useSession } from 'next-auth/react';
import { FunctionComponent, useRef } from 'react'
import { useAppContext } from '../../../context/state';
import { SceneActionType } from '../../../hooks/useScene';
import styles from '../../../styles/Utils.module.scss'
interface PageContentsProps {
	// User data
	// Page 1 or 2
	pageNumber: number
}
 
const PageContents: FunctionComponent<PageContentsProps> = ({ pageNumber }) => {
	const [scene, dispatch] = useAppContext()

	if (pageNumber == 1) {
		return ( 
			<>
				<h1 className={styles.page}>Sample Title</h1>
				<p className={styles.page}>Sample Text</p>
				<div className={`${styles.page} ${styles.buttonWrapper}`}>
					<button className={`${styles.page} ${scene.bookAnimation != 'opened' || scene.pageAnimation != 'unflipped' ? styles.disabled : ''}`} onClick={() => {
						dispatch({ type: SceneActionType.BOOK, payload: 3 })
						setTimeout(() => { 
							dispatch({ type: SceneActionType.BOOK, payload: 0 })
						}, 7000)
					}}>Back</button>
					<button className={`${styles.page} ${scene.bookAnimation != 'opened' || scene.pageAnimation != 'unflipped' ? styles.disabled : ''}`} onClick={() => {
						dispatch({ type: SceneActionType.PAGE, payload: 1 })
						setTimeout(() => {
							dispatch({ type: SceneActionType.PAGE, payload: 2})
						}, 2000)
					}}>Next</button>
				</div>
			</>	
		);
	}
	return ( 
		<>
			<h2 className={styles.page}>Sample Subtitle</h2>
			<p className={styles.page}>Sample Text</p>
			<div className={`${styles.page} ${styles.buttonWrapper}`}>
				<button className={`${styles.page} ${scene.bookAnimation != 'opened' || scene.pageAnimation != 'flipped' ? styles.disabled : ''}`} onClick={() => {
					dispatch({ type: SceneActionType.PAGE, payload: 3 })
					setTimeout(() => { 
						dispatch({ type: SceneActionType.PAGE, payload: 0 })
						dispatch({ type: SceneActionType.BOOK, payload: 3 })
						setTimeout(() => { 
							dispatch({ type: SceneActionType.BOOK, payload: 0 })
						}, 7000)
					}, 2000)
				}}>Back</button>
				<button className={`${styles.page} ${scene.bookAnimation != 'opened' || scene.pageAnimation != 'flipped' ? styles.disabled : ''}`} onClick={() => {
					dispatch({ type: SceneActionType.PAGE, payload: 3 })
					setTimeout(() => { 
						dispatch({ type: SceneActionType.PAGE, payload: 0 })
					}, 2000) 
				}}>Prev</button>
			</div>
		</>
	);
}
 
export default PageContents;