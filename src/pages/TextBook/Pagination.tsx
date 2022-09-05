import React, { useEffect, useState } from 'react';
import {
  PaginationButton,
  PaginationWrapper,
  NextButton,
  PreviousButton,
} from './Pagination.styled';

const Pagination = ({
  pagination,
  currentPage,
  totalCount,
}: {
  pagination: (direction: number, numButt?: boolean) => void;
  currentPage: number;
  totalCount: number;
}) => {
  const [firstButton, setFirstButton] = useState<number | string>(1);
  const [firstButtonState, setFirstButtonState] = useState<boolean>(firstButton === currentPage);

  const [secondButton, setSecondButton] = useState<number | string>(2);
  const [secondButtonState, setSecondButtonState] = useState<boolean>(secondButton === currentPage);

  const [thirdButton, setThirdButton] = useState<number | string>(3);
  const [thirdButtonState, setThirdButtonState] = useState<boolean>(thirdButton === currentPage);

  const [fourthButton, setFourthButton] = useState<number | string>('...');
  const [fourthButtonState, setFourthButtonState] = useState<boolean>(fourthButton === currentPage);

  const [fifthButton, setFifthButton] = useState<number | string>(totalCount);
  const [fifthButtonState, setFifthButtonState] = useState<boolean>(fifthButton === currentPage);

  useEffect(() => {
    setFirstButtonState(() => firstButton === currentPage);
    setSecondButton(() => (currentPage <= 3 ? 2 : '...'));
    setSecondButtonState(() => secondButton === currentPage);
    setThirdButton(() =>
      currentPage <= 3 ? 3 : currentPage < totalCount - 2 ? currentPage : totalCount - 2,
    );
    setThirdButtonState(() =>
      currentPage >= 3 && currentPage <= totalCount - 2 ? true : false || currentPage === 3,
    );
    setFourthButton(() => (currentPage < totalCount - 2 ? '...' : totalCount - 1));
    setFourthButtonState(() => fourthButton === currentPage);
    setFifthButtonState(() => fifthButton === currentPage);
  }, [currentPage, fifthButton, firstButton, fourthButton, secondButton, totalCount]);

  return (
    <PaginationWrapper>
      <PreviousButton
        state={false}
        onClick={() => pagination(-1)}
        disabled={currentPage === 1}
      ></PreviousButton>
      <PaginationButton
        state={firstButtonState}
        onClick={() => pagination(firstButton as number, true)}
        disabled={currentPage === 1}
        style={totalCount < 1 ? { display: 'none' } : {}}
      >
        {firstButton}
      </PaginationButton>
      <PaginationButton
        state={secondButtonState}
        onClick={() => pagination(secondButton as number, true)}
        style={totalCount < 2 ? { display: 'none' } : {}}
      >
        {secondButton}
      </PaginationButton>
      <PaginationButton
        state={thirdButtonState}
        onClick={() => pagination(thirdButton as number, true)}
        style={totalCount < 3 ? { display: 'none' } : {}}
      >
        {thirdButton}
      </PaginationButton>
      <PaginationButton
        state={fourthButtonState}
        onClick={() => pagination(fourthButton as number, true)}
        style={totalCount < 4 ? { display: 'none' } : {}}
      >
        {fourthButton}
      </PaginationButton>
      <PaginationButton
        state={fifthButtonState}
        onClick={() => pagination(fifthButton as number, true)}
        style={totalCount < 5 ? { display: 'none' } : {}}
      >
        {fifthButton}
      </PaginationButton>
      <NextButton
        state={false}
        onClick={() => pagination(1)}
        disabled={totalCount <= currentPage}
      ></NextButton>
    </PaginationWrapper>
  );
};

export default Pagination;
