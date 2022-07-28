import type { FunctionComponent } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import styles from '../../../styles/Utils.module.scss'

interface InfoBoxProps {
	
}
 
const Box: FunctionComponent<InfoBoxProps> = () => {
	const { data: session } = useSession()

	if (!session) {
		return (
			<div className={`${styles.box}  ${styles.info}`}>
				<div className={styles.card}>
					<div className={styles.textWrapper}>
						<p>Log in with Discord</p>
					</div>
				</div>
				<div className={styles.buttonWrapper}>
					<button className={styles.login} onClick={() => signIn('discord')}>Log In</button>
				</div>
			</div>
		)
	}

	return ( 
		<div className={`${styles.box} ${styles.info}`}>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src={`https://cdn.discordapp.com/avatars/${session.user.id}/${session.user.avatar}.${session.user.avatar.startsWith('a_') ? 'gif' : 'png'}`} alt='' height={48} width={48}/>
					</div>
					<div className={styles.textWrapper}>
						<p>{`${session.user.username}#${session.user.discriminator}`}</p>
					</div>
				</div>
				<div className={styles.buttonWrapper}>
					<button className={styles.logout} onClick={() => signOut()}>Log Out</button>
				</div>
		</div>
	);
}
 
export default Box;