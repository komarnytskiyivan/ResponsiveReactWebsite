import React from 'react'
import AddSection from '../../AddPages/AddSection'
import {addPagesObjOne} from './Data'
function AddPages () {
    return (
        <div>
            <AddSection {...addPagesObjOne} />
        </div>
    )
}

export default AddPages
