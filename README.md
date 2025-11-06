# Distribution Visualizer Tool

A simple React + TypeScript component for visualizing and filtering specific fields of input data using charts and tables.

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Technology](#technology)  
4. [Usage](#usage)

## Overview
System Metrics Exporter programmatically creates Grafana dashboards and uploads them on application start. It displays system metrics such as CPU and integrates with Prometheus for metric collection.

## Features
- Bar chart visualizations  
- Filter panel for easy data selectio  
- Table view of filtered data
- Built with Tailwind CSS

## Technology
- React
- Typescript
- Tailwind CSS
- Axios

## Usage

``` ts
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
You can access static page on https://chebohdan.github.io/distribution-visualization-tool/
