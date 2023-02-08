import { memo } from 'react'
import styles from './AppTest.module.scss'

function AppTest() {
	return <div className={styles.Component}>
		<div className='mx-auto'>
			1

			<div className={styles.Module}>
				Báu
			</div>
		</div>

		<div>
			123
		</div>
	</div>
}

export default memo(AppTest)