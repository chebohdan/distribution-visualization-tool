<h1>Data Visualizer</h1>

A simple React + TypeScript component for showing data with charts, filters, and tables.

<h2> Features </h2>

<ul>
  
  <li> Bar chart visualizations </li>
  
  <li> Filter panel for easy data selection </li>
  
  <li> Table view of filtered data </li>
  
  <li> Built with Tailwind CSS </li>

</ul>


<h2> Usagex Example </h2>

```
import { DataVisualizer } from "./components/DataVisualizer";

const data = [
  { id: 1, category: "Electronics", product: "Laptop", region: "North", year: 2023, sales: 1200, units: 45 },
  { id: 2, category: "Clothing", product: "Jacket", region: "South", year: 2023, sales: 850, units: 65 },
  { id: 3, category: "Home Goods", product: "Lamp", region: "East", year: 2023, sales: 420, units: 38 },
  { id: 4, category: "Sports", product: "Bicycle", region: "West", year: 2023, sales: 1600, units: 22 },
  { id: 5, category: "Electronics", product: "Smartphone", region: "North", year: 2024, sales: 2400, units: 80 }
];

<DataVisualizer
  data={data}
  distributionBy={["category", "region"]}
  filterBy="region"
/>;

```
