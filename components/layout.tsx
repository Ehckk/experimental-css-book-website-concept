import type { FunctionComponent, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return ( 
		<main>{children}</main>
	 );
}
 
export default Layout;