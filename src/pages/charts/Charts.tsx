import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataProps } from './types';
import {
  EC,
  WC,
  CO2,
  HD,
  RHAIR,
  TAIR,
  ENSCR,
  BLACKSCR,
  PIPRGROW,
  PIPELOW,
  IGLOB,
  RADSUM,
  TOUT,
} from './fragment';

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
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((res) => {
        setAll(res.dataset);
      });
  }, []);

  const savingData = () => {
    const _time: string[] = [];
    const _EC_slab1: number[] = [];
    const _EC_slab2: number[] = [];
    const _EC_drain_PC: number[] = [];
    const _WC_slab1: number[] = [];
    const _WC_slab2: number[] = [];
    const _CO2air: number[] = [];
    const _HumDef: number[] = [];
    const _Rhair: number[] = [];
    const _Tair: number[] = [];
    const _EnScr: number[] = [];
    const _BlackScr: number[] = [];
    const _PipeGrow: number[] = [];
    const _PipeLow: number[] = [];
    const _Iglob: number[] = [];
    const _RadSum: number[] = [];
    const _Tout: number[] = [];

    all.map(
      (el: DataProps) => (
        _time.push(el.time),
        _time.push(el.time),
        _EC_slab1.push(el.EC_slab1),
        _EC_slab2.push(el.EC_slab2),
        _EC_drain_PC.push(el.EC_drain_PC),
        _WC_slab1.push(el.WC_slab1),
        _WC_slab2.push(el.WC_slab2),
        _CO2air.push(el.CO2air),
        _HumDef.push(el.HumDef),
        _Rhair.push(el.Rhair),
        _Tair.push(el.Tair),
        _EnScr.push(el.EnScr),
        _BlackScr.push(el.BlackScr),
        _PipeGrow.push(el.PipeGrow),
        _PipeLow.push(el.PipeLow),
        _Iglob.push(el.Iglob),
        _RadSum.push(el.RadSum),
        _Tout.push(el.Tout)
      )
    );
    setTime(_time);
    setEC_slab1(_EC_slab1);
    setEC_slab2(_EC_slab2);
    setEC_drain_PC(_EC_drain_PC);
    setWC_slab1(_WC_slab1);
    setWC_slab2(_WC_slab2);
    setCO2air(_CO2air);
    setHumDef(_HumDef);
    setRhair(_Rhair);
    setTair(_Tair);
    setEnScr(_EnScr);
    setBlackScr(_BlackScr);
    setPipeGrow(_PipeGrow);
    setPipeLow(_PipeLow);
    setIglob(_Iglob);
    setRadSum(_RadSum);
    setTout(_Tout);
  };

  useEffect(() => {
    savingData();
  }, [all]);

  return (
    <>
      {time.length > 1 && (
        <ChartsFlex>
          <Margin>
            <EC
              time={time}
              EC_slab1={EC_slab1}
              EC_slab2={EC_slab2}
              EC_drain_PC={EC_drain_PC}
            />
          </Margin>
          <Margin>
            <WC time={time} WC_slab1={WC_slab1} WC_slab2={WC_slab2} />
          </Margin>
          <Margin>
            <CO2 time={time} CO2air={CO2air} />
          </Margin>
          <Margin>
            <HD time={time} HumDef={HumDef} />
          </Margin>
          <Margin>
            <RHAIR time={time} Rhair={Rhair} />
          </Margin>
          <Margin>
            <TAIR time={time} Tair={Tair} />
          </Margin>
          <Margin>
            <ENSCR time={time} EnScr={EnScr} />
          </Margin>
          <Margin>
            <BLACKSCR time={time} BlackScr={BlackScr} />
          </Margin>
          <Margin>
            <PIPRGROW time={time} PipeGrow={PipeGrow} />
          </Margin>
          <Margin>
            <PIPELOW time={time} PipeLow={PipeLow} />
          </Margin>
          <Margin>
            <IGLOB time={time} Iglob={Iglob} />
          </Margin>
          <Margin>
            <RADSUM time={time} RadSum={RadSum} />
          </Margin>
          <Margin>
            <TOUT time={time} Tout={Tout} />
          </Margin>
        </ChartsFlex>
      )}
    </>
  );
};

const ChartsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;

  @media ${(props) => props.theme.tablet} {
    justify-content: center;
  }
`;

const Margin = styled.div`
  margin: 2rem 2rem;
`;

export default Charts;
