import { useState, useMemo } from 'react'
import styles from './chord-diagram.module.scss'
import { createUseStyles } from 'react-jss'

interface IChordDiagaramProps {
	size: string
}

const ChordDiagram = ({ size }: IChordDiagaramProps) => {
	console.log('size ', size)
	// const rawStyles = useMemo(() => {
	// 	const baseSize = size == 'large' ? 500 : size == 'medium' ? 300 : 150

	// 	const px = (value) => `${value}px`
	// 	return {
	// 		grid: {
	// 			width: px(baseSize),
	// 			height: px(baseSize / 1.71)
	// 		}
	// 	}
	// }, [size])

	const baseSize = size == 'large' ? 500 : size == 'medium' ? 300 : 150

	const px = (value) => `${value}px`

	const useStyles = useMemo(() => {
		return createUseStyles({
			grid: {
				width: px(baseSize),
				height: px(baseSize / 1.71)
			}
		})
	}, [size])

	const jsStyles = useStyles()

	const [dots, setDots] = useState([])

	const addNote = (note) => {
		if (!dots.includes(note)) {
			setDots([...dots, note])
		} else {
			const removedNoteArray = dots
			removedNoteArray.splice(dots.indexOf(note), 1)
			setDots([...removedNoteArray])
		}
	}

	return (
		<div className={styles.chord_container}>
			<span>Size: {size}</span>
			<input className={styles.fret_number} type="number" />
			<input className={styles.chord_name} />

			<div className={`${styles.grid} ${jsStyles.grid}`}>
				{Array.from(Array(25)).map((e, i) => {
					return (
						<div key={`string-${i}`} data-border={!(i % 5 === 4) || undefined}>
							{dots.includes(i) ? <span className={styles.dot} /> : null}
							<button className={styles.string_select} onClick={() => addNote(i)} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ChordDiagram
