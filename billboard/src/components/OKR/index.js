import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BoardLeftOKR = styled.div`
  width: 967px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 5px 6px rgba(160, 160, 160, 0.11);
  border-radius: 15px;
`;

const OKRTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.01em;
  color: #222f3c;
  display: inline-block;
  padding: 30px 0 12px 30px;
`;

const Index = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const okrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const Base = styled.div``;

  const NavButton = styled.button`
    width: 4px;
    height: 4px;
    background-color: #000;
    opacity: ${({ isActive }) => (isActive ? 0.3 : 0.1)};
  `;

  const NavItem = styled.li`
    display: inline-block;
  `;

  const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    ${NavItem} + ${NavItem} {
      margin-left: 4px;
    }
  `;

  const Container = styled.div`
    position: relative;
  `;

  const CarouselList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    overflow: hidden;
  `;

  const CarouselListItem = styled.li`
    width: 100%;
    flex: 1 0 100%;
    transform: translate(-${({ activeIndex }) => activeIndex * 100}%);
    transition: 200ms ease;
    > img {
      width: 100%;
      height: fit-content;
    }
  `;

  const handleMounseEnter = () => setIsFocused(true);

  const handleMounseLeave = () => setIsFocused(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % okrs.length);
  };

  const goTo = (idx) => {
    setActiveIndex(idx);
  };

  useEffect(() => {
    let intervalId;

    if (!isFocused) {
      intervalId = setInterval(handleNext, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);

  return (
    <BoardLeftOKR>
      <OKRTitle>식스샵의 OKR👊</OKRTitle>
      <Base onMouseEnter={handleMounseEnter} onMouseLeave={handleMounseLeave}>
        <Container>
          <CarouselList>
            {okrs.map((okr, idx) => (
              <CarouselListItem activeIndex={activeIndex} key={idx}>
                <div>{okr}</div>
              </CarouselListItem>
            ))}
          </CarouselList>
        </Container>
        <Nav>
          {Array.from({ length: okrs.length }).map((_, idx) => (
            <NavItem key={idx} onClick={() => goTo(idx)}>
              <NavButton isActive={activeIndex === idx} />
            </NavItem>
          ))}
        </Nav>
      </Base>
    </BoardLeftOKR>
  );
};

export default Index;
