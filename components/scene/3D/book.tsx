import { useSession } from 'next-auth/react'
import type { FunctionComponent } from 'react'
import { useAppContext } from '../../../context/state'
import styles from '../../../styles/Book.module.scss'
import Pages from './pages';
import Ribbon from './ribbon';

interface BookProps {
	
}
 
const Book: FunctionComponent<BookProps> = () => {
	const [scene, dispatch] = useAppContext()
	return ( 
		<div className={styles.book}>
			<div className={styles.backCover}>
				<div className={`${styles.side} ${styles.bottom}`}></div>
				<div className={`${styles.side} ${styles.back}`}></div>
				<div className={`${styles.side} ${styles.left}`}></div>
				<div className={`${styles.side} ${styles.right}`}></div>
				<div className={`${styles.side} ${styles.front}`}></div>
				<div className={`${styles.side} ${styles.top}`}></div>
			</div>
			<Pages></Pages>
			<div className={styles.spine}>
				<div className={`${styles.side} ${styles.bottom}`}></div>
				<div className={`${styles.side} ${styles.back}`}></div>
				<div className={`${styles.side} ${styles.left}`}></div>
				<div className={`${styles.side} ${styles.right}`}></div>
				<div className={`${styles.side} ${styles.front}`}></div>
				<div className={`${styles.side} ${styles.top}`}></div>				
			</div>
			<div className={`${styles.frontCover} ${styles[scene.bookAnimation]}`}>
				<div className={`${styles.side} ${styles.bottom}`}></div>
				<div className={`${styles.side} ${styles.back}`}></div>
				<div className={`${styles.side} ${styles.left}`}></div>
				<div className={`${styles.side} ${styles.right}`}></div>
				<div className={`${styles.side} ${styles.front}`}></div>
				<div className={`${styles.side} ${styles.top}`}></div>				
			</div>
			<Ribbon></Ribbon>
			<div className={`${styles.lock} ${styles[scene.bookAnimation]}`}>
				<div className={`${styles.side} ${styles.bottom}`}></div>
				<div className={`${styles.side} ${styles.back}`}></div>
				<div className={`${styles.side} ${styles.left}`}></div>
				<div className={`${styles.side} ${styles.right}`}></div>
				<div className={`${styles.side} ${styles.front}`}></div>
				<div className={`${styles.side} ${styles.top}`}> 
					<div className={`${styles.lockTop}`}>
						<div className={`${styles.keyhole}`}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Book;