import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ECProps } from './dataTypes';

const EC = ({ time, EC_slab1, EC_slab2, EC_drain_PC }: ECProps) => {
  const options: Highcharts.Options = {
    title: {
      text: 'EC 데이터',
    },
    annotations: [
      {
        draggable: 'xy',
      },
    ],
    chart: {
      margin: [100, 50, 100, 50],
      height: '500px',
      zoomType: 'x',
      resetZoomButton: {
        position: {
          align: 'right',
        },
      },
    },
    xAxis: {
      tickInterval: 295,
      categories: time && time.map((day) => day.slice(0, 9)),
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    tooltip: {
      valueDecimals: 1,
    },
    series: [
      {
        type: 'line',
        name: 'EC_slab1',
        data: EC_slab1 && EC_slab1,
        // gapSize: 12,
      },
      {
        type: 'line',
        name: 'EC_slab2',
        data: EC_slab2 && EC_slab2,
      },
      {
        type: 'line',
        name: 'EC_drain_PC',
        data: EC_drain_PC && EC_drain_PC,
      },
    ],
    plotOptions: {
      series: {
        marker: {
          enabled: true,
        },
      },
    },
    rangeSelector: {
      verticalAlign: 'top',
      x: 0,
      y: 0,
      buttons: [
        {
          type: 'day',
          count: 300,
          text: '1d',
        },
      ],
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EC;
