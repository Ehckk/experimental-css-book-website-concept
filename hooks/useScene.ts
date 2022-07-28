import { Dispatch, Reducer, useReducer } from 'react'

export type UseSceneHook = [SceneState, Dispatch<SceneAction>]

export enum SceneActionType {
	DISPLAY = 0,
	BOOK = 1,
	PAGE = 2,
}

interface AnimationNames {
	DISPLAY: string[] 
	BOOK: string[]
	PAGE: string[]
}

const animationNames: AnimationNames = {
	DISPLAY: ['default', 'toBook', 'dashboard', 'fromBook'],
	BOOK: ['closed', 'openCover', 'opened', 'shutCover'],
	PAGE: ['unflipped', 'turn', 'flipped', 'unturn']
}

interface SceneState {
	animationNames: AnimationNames
	planeAnimation: string
	bookAnimation: string
	pageAnimation: string
}

interface SceneAction {
	type: SceneActionType,
	payload: number
}

export const useScene = (): UseSceneHook => {
	const sceneReducer = (state: SceneState, action: SceneAction): SceneState => {
		let newPlaneAnimation = state.planeAnimation
		let newBookAnimation = state.bookAnimation
		let newPageAnimation = state.pageAnimation
		switch (true) {
			case action.type == SceneActionType.BOOK:
				newBookAnimation = animationNames.BOOK[action.payload]
				newPlaneAnimation = animationNames.DISPLAY[action.payload] 
				newPageAnimation = action.payload != 2 ? 'unflipped' : state.pageAnimation
				break;
			case action.type == SceneActionType.PAGE:
				newPageAnimation = animationNames.PAGE[action.payload]
				newBookAnimation = 'opened'
				break;
			default: 
				newPlaneAnimation = animationNames.DISPLAY[action.payload]
		}
		return {
			animationNames: animationNames,
			planeAnimation: newPlaneAnimation,
			bookAnimation: newBookAnimation,
			pageAnimation: newPageAnimation,
		}
	}

	const [scene, dispatch] = useReducer<Reducer<SceneState, SceneAction>>(sceneReducer, {
		animationNames: animationNames,
		planeAnimation: 'default',
		bookAnimation: 'closed',
		pageAnimation: 'unflipped',
	})

	return [scene, dispatch]
}