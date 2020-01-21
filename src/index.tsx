import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import styles from './index.scss'

import ViewsTest from '@views/ViewTest'
import SharedTest from '@shared/SharedTest'

const render = () =>{
    ReactDOM.render(
        <div className={styles.test}>Asf
        <ViewsTest/>
        <SharedTest/>
        <Button type="primary">试试看</Button>
        </div>,
        document.querySelector('#app')
    )
}

render()