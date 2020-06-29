/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import SlickSlider from 'react-slick';

export const Wrapper = styled.div`
  margin: 5rem 0 3rem;
  overflow: hidden;
`;

export const Slider = styled(SlickSlider)``;

export const CardBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transition: 1s ease-in-out;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(3600deg, #000, transparent);

    opacity: 0.6;

    transition: 1s ease-in-out;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;

  border-radius: 50px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  padding: 2rem;
  min-height: 425px;

  &:hover,
  &:focus,
  &:focus-within {
    ${CardBg} {
      transform: scale(1.4);

      &:after {
        opacity: 1;
      }
    }
  }
`;

export const Slide = styled.div`
  width: ${(props) => props.size || 10}vw !important;

  max-width: 60vw;
  padding: 0 2rem;

  @media (max-width: 992px) {
    width: ${(props) => (props.size || 10) * 2}vw !important;
  }

  @media (max-width: 768px) {
    width: 350px !important;
    max-width: none;
  }

  .slick-slide:first-of-type & {
    padding-left: 0;
  }

  &,
  *,
  a {
    user-select: none !important;
    user-drag: none !important;
  }
`;