import type { NextPage } from 'next/types'
import Scene from '../components/scene'
import UI from '../components/ui'
// TODO: replace with UI ^^
// TODO: have discord redirect open in new window
 
const Home: NextPage = () => {
	return (
		<>
			<Scene></Scene>
			<UI></UI>
		</>
	)	
}
 
export default Home;