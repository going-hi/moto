import clsx from 'clsx'
import { ReactNode } from 'react'
import cl from './underline-wave.module.css'

export const UnderlineWave = ({ children }: { children: ReactNode }) => {
	return <div className={clsx(cl.root, 'relative')}>{children}</div>
}
