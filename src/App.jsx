import Table from "./components/Table/Table"

import './index.css'

const sampleData =    [
    {
      "id": "electronics",
      "label": "Electronics",
      "value": 1400, //this value needs to be calculated from the children values (800+700),
      isParent: true,
      variance: 0,
      "children": [
        {
          "id": "phones",
          "label": "Phones",
          "value": 800,
          isParent: false,
          parentId: "electronics",
          variance: 0,
        },
        {
          "id": "laptops",
          "label": "Laptops",
          "value": 700,
          parentId: "electronics",
          isParent: false,
          variance: 0,
        }
      ]
    },
    {
      "id": "furniture",
      "label": "Furniture",
      "value": 1000, //this need to be calculated from the children values (300+700)
      isParent: true,
      variance: 0,
      "children": [
        {
          "id": "tables",
          "label": "Tables",
          "value": 300,
          "parentId": "furniture",
          isParent: false,
          variance: 0,
        },
        {
          "id": "chairs",
          "label": "Chairs",
          "value": 700,
          "parentId": "furniture",
          isParent: false,
          variance: 0,
        }
      ]
    }
  ]

const App = () => {
  return <Table initialData={sampleData} />
}

export default App