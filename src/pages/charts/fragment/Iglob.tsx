import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { IglobProps } from './dataTypes';

const Iglob = ({ time, Iglob }: IglobProps) => {
  const options: Highcharts.Options = {
    title: {
      text: 'Iglob 데이터',
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
        data: Iglob && Iglob,
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

export default Iglob;
