import { Colors } from '../../styles/constansts';
import { PlotData, Datum } from 'plotly.js';
export type TPlot = Pick<PlotData, 'x' | 'y' >;


export const ProgressStat: TPlot = {
  x: [new Date(2022, 8, 24).toLocaleDateString(), new Date(2022, 8, 25).toLocaleDateString(), new Date(2022, 8, 26).toLocaleDateString()],
  y: [7, 8, 12],
};

export const DailyStat: TPlot = {
  x: [new Date(2022, 7, 24).toLocaleDateString(), new Date(2022, 6, 25).toLocaleDateString(), new Date(2022, 8, 26).toLocaleDateString()],
  y: [7, 1, 4],
};
/*function sum(a: Datum | Datum[], b: Datum | Datum []) {
  if (typeof a === 'number' && typeof b === 'number') return Number(a) + Number(b);
  else return a;
}
function ProgressFromDaily(data: TPlot[]): TPlot[] {
  const answer: TPlot[] = [... data];
  answer.forEach(
    value => value.y.map((_, i) => [...data].splice(i).reduce(sum)),
  );
  return answer;
}*/