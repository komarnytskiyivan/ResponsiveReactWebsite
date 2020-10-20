import React from 'react'
import PrintSection from '../../PrintFile/PrintSection'
import {printFileObjOne} from './Data'
function PrintFile() {
    return (
        <div>
            <PrintSection {...printFileObjOne} />
        </div>
    )
}

export default PrintFile
