import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Colors } from '../../styles/constansts';
import {
  StatisticsCommonCard,
  StatisticsCommonUpperElement,
  StatisticsCommonWrapper,
  StatisticsSubtitle,
  StatisticsTitle,
  ImageWrapper,
  StatisticsWraper,
  RadioWrapper,
  Radio,
  StyledPlot,
  WaveBlock,
} from './Statistics.styled';
import SPRINT from '../../assets/sprintImage.svg';
import AUDIO from '../../assets/audioImage.svg';
import { WrapperFooter } from '../../components/Footer/Footer.styled';
import { DailyStat, ProgressStat, TPlot } from './Statistics.data';

function GetRow(data: Map<string, string>) {
  const rows = [];
  for (const [row, value] of data) {
    rows.push(
            <tr>
                <td>{value}</td>
                <td>{row}</td>
            </tr>,
    );
  }
  return rows;
}

const Statistics = () => {
  const [sprintWords, useSprintWords] = useState<number>(0);
  const [sprintAccurancy, useSprintAccurancy] = useState<number>(0);
  const [sprintInARow, useSprintInARow] = useState<number>(0);

  const [audioWords, useAudioWords] = useState<number>(0);
  const [audioAccurancy, useAudioAccurancy] = useState<number>(0);
  const [audioInARow, useAudioInARow] = useState<number>(0);

  const [selectedDrink, setSelectedDrink] = useState<string>('');
  const [plotData, setPlotData] = useState<TPlot>(DailyStat);

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
    setPlotData(() => {
      switch (event.target.value) {
        case 'daily':
          return DailyStat;
          break;
        case 'progress':
          return ProgressStat;
          break;
        default: return DailyStat;
      }
    });
  };

  const Data = new Map([
    ['Sprint', {
      image: SPRINT,
      color: Colors.GREEN,
      data: new Map([
        ['words', `${sprintWords}`],
        ['accurancy', `${sprintAccurancy}%`],
        ['in a row', `${sprintInARow}`],
      ]),
    }],
    ['Audio challenge', {
      image: AUDIO,
      color: Colors.LIGHT_GREEN,
      data: new Map([
        ['words', `${audioWords}`],
        ['accurancy', `${audioAccurancy}%`],
        ['in a row', `${audioInARow}`],
      ]),
    }],
  ]);

  const cards = [];
  for (const [elem, { image, color, data }] of Data) {
    cards.push(
            <StatisticsCommonCard>
                <h4>{elem}</h4>
                <div className="wrapper">
                    <ImageWrapper inputColor={color}>
                        <img src={image} alt={`${elem} image`} />
                    </ImageWrapper>

                    <table>
                        {GetRow(data)}
                    </table>
                </div>
            </StatisticsCommonCard>,

    );
  }

  return (
        <>
            <StatisticsWraper className='upper'>
                <StatisticsTitle color={Colors.WHITE}>Statistics for today</StatisticsTitle>
                <StatisticsSubtitle>Statistics are available only to authorized users</StatisticsSubtitle>
                <StatisticsCommonWrapper>
                    <StatisticsCommonUpperElement>
                        <div>10</div>
                        <h4>words <br /> you learned</h4>
                    </StatisticsCommonUpperElement>

                    <StatisticsCommonUpperElement>
                        <div style={{ width: 184, height: 184 }}><ProgressBar percent={50}></ProgressBar></div>
                        <h4>Accurancy</h4>
                    </StatisticsCommonUpperElement>
                    {cards}
                </StatisticsCommonWrapper>
            </StatisticsWraper>
            <WaveBlock>
                <div style={{ backgroundColor: Colors.WHITE, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <StatisticsWraper className='TEST' style={{ marginTop: 0 }}>
                        <StatisticsTitle color={Colors.BLACK}>All time statistics</StatisticsTitle>
                        <RadioWrapper>
                            <Radio>
                            <input
                                type="radio"
                                name="drink"
                                value="daily"
                                id="coffee"
                                onChange={radioHandler}
                            />
                            <label htmlFor="coffee">number learner words</label>
                            <div className="check"></div>
                            </Radio>
                            <Radio>
                            <input
                                type="radio"
                                name="drink"
                                value="progress"
                                id="coffee"
                                onChange={radioHandler}
                            />
                            <label htmlFor="coffee">progress</label>
                            <div className="check"></div>
                            </Radio>
                        </RadioWrapper>
                        <StyledPlot
                            data={[
                              {
                                ...plotData,
                                type: 'bar',
                                mode: 'lines+markers',
                                marker: { color: Colors.LIGHT_GREEN },
                                line: { color: Colors.LIGHT_GREEN, width: 3, shape: 'spline' },
                              },   
                            ]}
                            layout={{ font: { family: 'Rubic !important', size: 22 } }}
                            config={{ scrollZoom: false, displayModeBar: false }} 
                            className='plot'
                            />
                    </StatisticsWraper>
                </div>
            </WaveBlock></>
  );
};

export default Statistics;
