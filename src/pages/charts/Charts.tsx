import React, { FC, useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DataProps } from './types';

const Charts: FC = () => {
  const [all, setAll] = useState<[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [EC_slab1, setEC_slab1] = useState<number[]>([]);
  const [EC_slab2, setEC_slab2] = useState<number[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((res) => setAll(res.dataset));
  }, []);

  useEffect(() => {
    all &&
      all.map(
        (el: DataProps) => (
          time.push(el.time),
          EC_slab1.push(el.EC_slab1),
          EC_slab2.push(el.EC_slab2)
        )
      );
  }, [all, time, EC_slab1, EC_slab2]);

  const options: Highcharts.Options = {
    title: {
      text: '전체 데이터',
    },
    annotations: [
      {
        draggable: 'xy',
      },
    ],
    chart: {
      margin: [100, 50, 100, 50],
      zoomType: 'y',
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
        data: EC_slab1 && EC_slab1,
        gapSize: 12,
      },
      {
        type: 'line',
        name: 'EC_slab2',
        data: EC_slab2 && EC_slab2,
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

export default Charts;
