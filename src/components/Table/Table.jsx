import { useEffect, useState } from "react"
import TableRow from "../TableRow/TableRow"

const Table = (props) => {

  const { initialData } = props

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(initialData)
  }, [])


  const updateByPercentage = (percent, rowData, rowIndex) => {
    if (percent < 0 || percent > 100) {
      alert("Invalid Percentage")
      return
    }

    if (rowData.isParent) {
      // const oldVal = rowData.value
      // const diff = (percent / 100) * oldVal
      // const newVal = oldVal + diff

      // tableData[rowIndex] = {
      //   ...tableData[rowIndex],
      //   value: newVal,
      //   variance: percent
      // }

      // tableData[rowIndex].children = tableData[rowIndex].children.map((childRow) => {
      //   return {
      //     ...childRow,
      //     value: childRow
      //   }
      // })

      
      // setTableData()
    }
    else {
      const oldVal = rowData.value
      const diff = (percent / 100) * oldVal
      const newVal = oldVal + diff

      const parentIndex = tableData.findIndex(({ id }) => id === rowData.parentId)

      tableData[parentIndex].children[rowIndex] = {
        ...tableData[parentIndex].children[rowIndex],
        value: newVal,
        variance: percent
      }

      tableData[parentIndex].children = [...tableData[parentIndex].children]

      const oldParentValue = tableData[parentIndex].value

      tableData[parentIndex]  = {
        ...tableData[parentIndex],
        value: oldParentValue + diff,
        variance: (diff / oldParentValue) * 100
      }

      setTableData([...tableData])
    }
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Label</th>
        <th>Value</th>
        <th>Input</th>
        <th>Allocation %</th>
        <th>Allocation Val</th>
        <th>Variance %</th>
      </tr>
      </thead>

      <tbody>
        {tableData.map((tableRow, index) => {
          return <TableRow key={tableRow.id} rowData={tableRow} updateByPercentage={updateByPercentage} index={index} />
        })}
      </tbody>
    </table>
  )
}

export default Table