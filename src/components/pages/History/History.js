import React from 'react'
import HistorySection from '../../HistorySection/HistorySection'
import {historyObjOne} from './Data'
function History() {
    return (
        <div>
            <HistorySection {...historyObjOne} />
        </div>
    )
}

export default History
