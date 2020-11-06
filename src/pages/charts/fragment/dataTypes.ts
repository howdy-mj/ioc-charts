export interface TimeProps {
  time: string;
}

export interface ECProps {
  time?: TimeProps[];
  EC_slab1: number[];
  EC_slab2: number[];
  EC_drain_PC: number[];
}

export interface WCProps {
  WC_slab1: number[];
  WC_slab2: number[];
}
