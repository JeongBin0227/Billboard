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

  const okrs = [
    '식스샵3의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
    '스프셀의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
    'PCM통합셀의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
    '마케팅팀의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
    '경영지원팀의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
    '서비스운영팀의 2022년 6월 런칭을 목표로 로드맵/인수조건을 명확히 정의하고, 본격적인 햅 구현 및 연동을 위한 코어 앱 시스템 및 API 구현을 완료한다.',
  ];

  const Base = styled.div``;

  const NavButton = styled.button`
    width: 120px;
    height: 28px;
    padding: 5px 12px 5px 12px;
    border-radius: 6px;
    border: none;
    color: #bfbfcc;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    background-color: ${({ isActive }) =>
      isActive ? '#F2F2F2' : 'transparent'};
  `;

  const NavItem = styled.li`
    display: inline-block;
  `;

  const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto 0 30px;
    display: flex;
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
        <Nav>
          {[
            '식스샵2 코어셀',
            '스토어 프론트셀',
            'PCM 통합셀',
            '마케팅팀',
            '경영지원팀',
            '서비스운영팀',
          ].map((_, idx) => (
            <NavItem key={idx} onClick={() => goTo(idx)}>
              <NavButton isActive={activeIndex === idx}>{_}</NavButton>
            </NavItem>
          ))}
        </Nav>
        <div
          style={{
            backgroundColor: '#F3F5F6',
            height: '1px',
            width: '100%',
            margin: '15px 0',
          }}
        ></div>
        <Container>
          <CarouselList>
            {okrs.map((okr, idx) => (
              <CarouselListItem activeIndex={activeIndex} key={idx}>
                <div
                  style={{
                    padding: '0 32px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                      lineHeight: '20.03px',
                      color: '#667381',
                      fontWeight: 700,
                    }}
                  >
                    {okr}
                  </span>
                </div>
              </CarouselListItem>
            ))}
          </CarouselList>
        </Container>
      </Base>
    </BoardLeftOKR>
  );
};

export default Index;
