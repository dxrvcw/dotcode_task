import { forwardRef } from 'react'
import styles from './DesktopItem.module.css'

type DesktopItemProps = {
	id: string
	title: string
	isSelected: boolean
	removeItem: (id: string) => void
} & React.HTMLAttributes<HTMLDivElement>

// Used forwardRef for react-grid-layout library
export const DesktopItem = forwardRef<HTMLDivElement, DesktopItemProps>(
	(
		{ id, title, children, isSelected, removeItem, className, ...props },
		ref
	) => {
		return (
			<div
				className={`${styles.container} ${className} ${
					isSelected ? styles.active : ''
				}`}
				ref={ref}
				{...props}
			>
				<div className={styles.itemHeader}>
					<button
						className={styles.deleteButton}
						onClick={() => removeItem(id)}
					>
						x
					</button>
					<p className={styles.title}>{title}</p>
				</div>
				{children}
			</div>
		)
	}
)
