/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useEffect, useState } from 'react'
import { useAppContext } from '../../../context/state'
import { SceneActionType } from '../../../hooks/useScene'
import styles from '../../../styles/Utils.module.scss'

const Controls: FunctionComponent = () => {
	const [scene, dispatch] = useAppContext()
	const [buttonText, setButtonText] = useState<string>('open')
	const [debug, setDebug] = useState<boolean>(false) 

	if (debug) {
		return (
			<>
				<div className={`${styles.box} ${styles.controls} ${styles.mainControls}`}>
					<button className={styles.mainControl} onClick={() => {
						if (scene.bookAnimation == 'shutCover' || scene.bookAnimation == 'closed') {
							if (scene.pageAnimation != 'unflipped') {
								dispatch({ type: SceneActionType.PAGE, payload: 0})
							}
							dispatch({ type: SceneActionType.BOOK, payload: 1 })
							setTimeout(() => { 
								dispatch({ type: SceneActionType.BOOK, payload: 2 })
							}, 7000)
						} 
					}}>{buttonText}</button>
					<button className={styles.subControl} onClick={() => setDebug(!debug)}>debug</button>
				</div>
				<div className={`${styles.box} ${styles.controls} ${styles.displayControls}`}>
					{scene.animationNames.DISPLAY.map((x) => <button key={x} className={styles.control} onClick={() => dispatch({ type: SceneActionType.DISPLAY, payload: scene.animationNames.DISPLAY.indexOf(x)})}>{x}</button>)}
				</div>
				<div className={`${styles.box} ${styles.controls} ${styles.bookControls}`}>
					{scene.animationNames.BOOK.map((x) => <button key={x} className={styles.control} onClick={() => dispatch({ type: SceneActionType.BOOK, payload: scene.animationNames.BOOK.indexOf(x)})}>{x}</button>)}
				</div>
				<div className={`${styles.box} ${styles.controls} ${styles.pageControls}`}>
					{scene.animationNames.PAGE.map((x) => <button key={x} className={styles.control} onClick={() => dispatch({ type: SceneActionType.PAGE, payload: scene.animationNames.PAGE.indexOf(x)})}>{x}</button>)}
				</div>
			</>
		)
	}
	return (
		<>
			<div className={`${styles.box} ${styles.controls} ${styles.mainControls}`}>
				<button className={styles.mainControl} onClick={() => {
					if (scene.bookAnimation == 'shutCover' || scene.bookAnimation == 'closed') {
						if (scene.pageAnimation != 'unflipped') {
							dispatch({ type: SceneActionType.PAGE, payload: 0})
						}
						dispatch({ type: SceneActionType.BOOK, payload: 1 })
					}
					setTimeout(() => { 
						dispatch({ type: SceneActionType.BOOK, payload: scene.bookAnimation == 'opened' ? 0 : 2 })
					}, 7000)
				}}>{buttonText}</button>
				<button className={styles.subControl} onClick={() => setDebug(!debug)}>debug</button>
			</div>
		</>
	)
}
 
export default Controls;