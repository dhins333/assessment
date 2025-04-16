import { memo, useRef } from "react";

const TableRow = (props) => {

  const { rowData, isChildRow, updateByPercentage, index } = props

  const inputRef = useRef()

  const renderMainRow = () => {
    return (
      <tr>
        <td>
          {`${isChildRow ? '--' : ''}${rowData.label}`}
        </td>
        <td>
          {rowData.value}
        </td>
        <td>
          <input ref={inputRef} type="number" />
        </td>
        <td>
          <button onClick={() => {
            updateByPercentage(inputRef.current.value, rowData, index)
          }}>Update by Percentage</button>
        </td>
        <td>
          <button>Update by Value</button>
        </td>
        <td>
          {`${rowData.variance}%`}
        </td>
      </tr>
    )
  }

  const renderChildRows = () => {
    if (!rowData.children?.length) return null

    
    return rowData.children.map((childRow) => {
      return <TableRow rowData={childRow} key={childRow.id}   updateByPercentage={updateByPercentage} index={index}/>
    })   
  }
  


  return (
    <>
      {renderMainRow()}
      {renderChildRows()}
    </>
  )
}

export default memo(TableRow)