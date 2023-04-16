import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 브라우저 히스토리에서 popstate 이벤트를 받아서 이전 스크롤 위치를 가져옴
    const handlePopState = () => {
      const { state } = window.history;
      if (state) {
        const { x, y } = state.scrollPosition || { x: 0, y: 0 };
        setScrollPosition({ x, y });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // 컴포넌트가 unmount될 때 스크롤 위치를 브라우저 히스토리에 저장함
    return () => {
      window.history.replaceState(
        { ...window.history.state, scrollPosition },
        ''
      );
    };
  }, [scrollPosition]);

  useEffect(() => {
    // 새로운 페이지로 이동할 때 스크롤 위치를 가져옴
    setScrollPosition({ x: 0, y: 0 });
  }, [pathname]);

  useEffect(() => {
    // 스크롤 위치를 이전 값으로 변경함
    window.scrollTo(scrollPosition.x, scrollPosition.y);
  }, [scrollPosition]);

  return null;
};

export default Scroll;