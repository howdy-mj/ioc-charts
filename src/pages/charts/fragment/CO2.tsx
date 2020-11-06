import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CO2Props } from './dataTypes';

const CO2 = ({ time, CO2air }: CO2Props) => {
  const options: Highcharts.Options = {
    title: {
      text: 'CO2 데이터',
    },
    annotations: [
      {
        draggable: 'xy',
      },
    ],
    chart: {
      margin: [100, 50, 100, 50],
      height: '500px',
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          align: 'right',
        },
      },
    },
    xAxis: {
      tickInterval: 288,
      categories: time && time.map((day) => day.slice(0, 9)),
    },
    tooltip: {
      valueDecimals: 1,
    },
    series: [
      {
        type: 'line',
        name: 'EC_slab1',
        data: CO2air && CO2air,
        // gapSize: 12,
      },
    ],
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            // legend: {
            //   layout: 'horizontal',
            //   align: 'center',
            //   verticalAlign: 'bottom',
            // },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -2,
              },
              title: {
                text: '값',
              },
            },
          },
        },
      ],
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CO2;
