import type { FunctionComponent } from 'react'
import { useAppContext } from '../../../context/state'
import styles from '../../../styles/Pages.module.scss'
import PageContents from '../2D/pageContents'

interface PagesProps {
	
}
 
const Pages: FunctionComponent<PagesProps> = () => {
	const [scene, dispatch] = useAppContext()
	return ( 
		<>
			<div className={`${styles.pages} ${styles[scene.pageAnimation]}`}>
				<div className={`${styles.side} ${styles.bottom}`}></div>
				<div className={`${styles.side} ${styles.back}`}></div>
				<div className={`${styles.side} ${styles.left}`}></div>
				<div className={`${styles.side} ${styles.right}`}></div>
				<div className={`${styles.side} ${styles.front}`}></div>
				<div className={`${styles.side} ${styles.top}`}></div>	
				<div className={styles.secondPage}>
					<div className={`${styles.pageSegment}`}>
						<div className={`${styles.page}`}>
							<div className={`${styles.pageContainer}`}>
								<PageContents pageNumber={2}></PageContents>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.firstPage}`}>				
					<div className={`${styles.pageSegment}`}>
						<div className={`${styles.pageSegment}`}>
							<div className={`${styles.pageSegment}`}>
								<div className={`${styles.pageSegment}`}>
									<div className={`${styles.page}`}>
										<div className={`${styles.pageContainer}`}>
											<PageContents pageNumber={1}></PageContents>
										</div>
										<div className={`${styles.pageSegment}`}>
											<div className={`${styles.pageSegment}`}>
												<div className={`${styles.pageSegment}`}>
													<div className={`${styles.pageSegment}`}></div>
												</div>
											</div>
										</div>
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>		
			</div>
	
		</>
	 );
}
 
export default Pages;