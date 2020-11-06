import React, { FC, useEffect, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DataProps } from './types';
import { EC, WC } from './fragment';

const Charts: FC = () => {
  const [all, setAll] = useState<[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [EC_slab1, setEC_slab1] = useState<number[]>([]);
  const [EC_slab2, setEC_slab2] = useState<number[]>([]);
  const [EC_drain_PC, setEC_drain_PC] = useState<number[]>([]);
  const [WC_slab1, setWC_slab1] = useState<number[]>([]);
  const [WC_slab2, setWC_slab2] = useState<number[]>([]);
  const [CO2air, setCO2air] = useState<number[]>([]);
  const [HumDef, setHumDef] = useState<number[]>([]);
  const [Rhair, setRhair] = useState<number[]>([]);
  const [Tair, setTair] = useState<number[]>([]);
  const [EnScr, setEnScr] = useState<number[]>([]);
  const [BlackScr, setBlackScr] = useState<number[]>([]);
  const [PipeGrow, setPipeGrow] = useState<number[]>([]);
  const [PipeLow, setPipeLow] = useState<number[]>([]);
  const [Iglob, setIglob] = useState<number[]>([]);
  const [RadSum, setRadSum] = useState<number[]>([]);
  const [Tout, setTout] = useState<number[]>([]);

  useEffect(() => {
    fetch('/data/temp.json')
      .then((res) => res.json())
      .then((res) => setAll(res.dataset));
  }, []);

  useEffect(() => {
    all &&
      all.map(
        (el: DataProps) => (
          time.push(el.time),
          EC_slab1.push(el.EC_slab1),
          EC_slab2.push(el.EC_slab2),
          EC_drain_PC.push(el.EC_drain_PC),
          WC_slab1.push(el.WC_slab1),
          WC_slab2.push(el.WC_slab2),
          CO2air.push(el.CO2air),
          HumDef.push(el.HumDef),
          Rhair.push(el.Rhair),
          Tair.push(el.Tair),
          EnScr.push(el.EnScr),
          BlackScr.push(el.BlackScr),
          PipeGrow.push(el.PipeGrow),
          PipeLow.push(el.PipeLow),
          Iglob.push(el.Iglob),
          RadSum.push(el.RadSum),
          Tout.push(el.Tout),
          setTime(time),
          setEC_slab1(EC_slab1),
          setEC_slab2(EC_slab2),
          setEC_drain_PC(EC_drain_PC),
          setWC_slab1(WC_slab1),
          setWC_slab2(WC_slab2),
          setCO2air(CO2air),
          setHumDef(HumDef),
          setRhair(Rhair),
          setTair(Tair),
          setEnScr(EnScr),
          setBlackScr(BlackScr),
          setPipeGrow(PipeGrow),
          setPipeLow(PipeLow),
          setPipeLow(PipeLow),
          setIglob(Iglob),
          setRadSum(RadSum),
          setTout(Tout)
        )
      );
  }, [
    all,
    time,
    EC_slab1,
    EC_slab2,
    EC_drain_PC,
    WC_slab1,
    WC_slab2,
    CO2air,
    HumDef,
    Rhair,
    Tair,
    EnScr,
    BlackScr,
    PipeGrow,
    PipeLow,
    Iglob,
    RadSum,
    Tout,
  ]);

  console.log(all);

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
        name: 'CO2air',
        data: CO2air && CO2air,
      },
      {
        type: 'line',
        name: 'HumDef',
        data: HumDef && HumDef,
      },
      {
        type: 'line',
        name: 'Rhair',
        data: Rhair && Rhair,
      },
      {
        type: 'line',
        name: 'Tair',
        data: Tair && Tair,
      },
      {
        type: 'line',
        name: 'EnScr',
        data: EnScr && EnScr,
      },
      {
        type: 'line',
        name: 'BlackScr',
        data: BlackScr && BlackScr,
      },
      {
        type: 'line',
        name: 'PipeGrow',
        data: PipeGrow && PipeGrow,
      },
      {
        type: 'line',
        name: 'PipeLow',
        data: PipeLow && PipeLow,
      },
      {
        type: 'line',
        name: 'Iglob',
        data: Iglob && Iglob,
      },
      {
        type: 'line',
        name: 'RadSum',
        data: RadSum && RadSum,
      },
      {
        type: 'line',
        name: 'Tout',
        data: Tout && Tout,
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

  return (
    <>
      {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
      <br />
      {all && (
        <>
          <EC
            // time={time}
            EC_slab1={EC_slab1}
            EC_slab2={EC_slab2}
            EC_drain_PC={EC_drain_PC}
          />
          <br />
          <WC WC_slab1={WC_slab1} WC_slab2={WC_slab2} />
        </>
      )}
    </>
  );
};

export default Charts;
