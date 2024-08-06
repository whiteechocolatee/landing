'use client';

import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
} from 'react';
import { Swiper as SwiperType } from 'swiper';

interface SliderContextType {
  swiperRef: React.MutableRefObject<SwiperType | null>;
  slideNext: () => void;
  slidePrev: () => void;
}

const SliderContext = createContext<
  SliderContextType | undefined
>(undefined);

export const useSlider = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error(
      'useSlider должен использоваться внутри SliderProvider',
    );
  }
  return context;
};

interface SliderProviderProps {
  children: ReactNode;
}

export const SliderProvider = ({
  children,
}: SliderProviderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideNext = () => {
    swiperRef.current?.slideNext();
  };

  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <SliderContext.Provider
      value={{ swiperRef, slideNext, slidePrev }}>
      {children}
    </SliderContext.Provider>
  );
};
