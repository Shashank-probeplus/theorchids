import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    const { pieChartData, pieChartOptions } = this.props;

    this.setState({
      chartData: pieChartData,
      chartOptions: pieChartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="donut"
        width="100%"
        height="100%"
      />
    );
  }
}

export default PieChart;
