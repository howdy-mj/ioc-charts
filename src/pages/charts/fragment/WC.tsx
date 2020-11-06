import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { WCProps } from './dataTypes';

const WC = ({ WC_slab1, WC_slab2 }: WCProps) => {
  const options: Highcharts.Options = {
    title: {
      text: 'WC 데이터',
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
      // categories: time && time.map((day) => day.slice(0, 9)),
    },
    series: [
      {
        type: 'line',
        name: 'WC_slab1',
        data: WC_slab1 && WC_slab1,
        // gapSize: 12,
      },
      {
        type: 'line',
        name: 'WC_slab2',
        data: WC_slab2 && WC_slab2,
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

export default WC;
