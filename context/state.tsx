import { createContext, ReactNode, useContext } from 'react'
import { useScene, UseSceneHook } from '../hooks/useScene'

interface AppProps {
	children: ReactNode
}

const appContext = createContext<UseSceneHook>(undefined!)


export function AppWrapper({ children }: AppProps) {
	return (
		<appContext.Provider value={useScene()}>
			{ children }
		</appContext.Provider>

	)
}

export function useAppContext() {
	return useContext(appContext)
}