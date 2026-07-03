// import { useState, useRef, useCallback } from 'react';

// const useNoButtonDodge = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [dodgeCount, setDodgeCount] = useState(0);
//   const [showHint, setShowHint] = useState(false);
//   const containerRef = useRef(null);

//   const moveButton = useCallback(() => {
//     const buttonWidth = 120;
//     const buttonHeight = 50;
//     const padding = 40;

//     const maxX = window.innerWidth - buttonWidth - padding;
//     const maxY = window.innerHeight - buttonHeight - padding;

//     const newX = Math.max(padding / 2, Math.random() * maxX);
//     const newY = Math.max(padding / 2, Math.random() * maxY);

//     setPosition({ x: newX, y: newY });
//     setDodgeCount(prev => {
//       const newCount = prev + 1;
//       if (newCount >= 3) {
//         setShowHint(true);
//       }
//       return newCount;
//     });
//   }, []);

//   const handleMouseEnter = useCallback(() => {
//     moveButton();
//   }, [moveButton]);

//   const handleClick = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     moveButton();
//   }, [moveButton]);

//   const handleTouchStart = useCallback((e) => {
//     e.preventDefault();
//     moveButton();
//   }, [moveButton]);

//   const reset = useCallback(() => {
//     setPosition({ x: 0, y: 0 });
//     setDodgeCount(0);
//     setShowHint(false);
//   }, []);

//   return {
//     position,
//     dodgeCount,
//     showHint,
//     containerRef,
//     handlers: {
//       onMouseEnter: handleMouseEnter,
//       onClick: handleClick,
//       onTouchStart: handleTouchStart
//     },
//     reset
//   };
// };

// export default useNoButtonDodge;


import { useState, useCallback, useEffect } from 'react';

// Grid configuration - divides card into cells
const GRID_COLS = 4;
const GRID_ROWS = 5;

const useNoButtonDodge = () => {
  const [cellIndex, setCellIndex] = useState(null);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Get random cell that's NOT the center area (where Yes button is)
  const getRandomSafeCell = useCallback(() => {
    const totalCells = GRID_COLS * GRID_ROWS;
    const centerCells = [6, 7, 10, 11]; // Center 2x2 area reserved for Yes button
    
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * totalCells);
    } while (centerCells.includes(newIndex));
    
    return newIndex;
  }, []);

  const moveButton = useCallback(() => {
    const newCell = getRandomSafeCell();
    setCellIndex(newCell);
    setDodgeCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 3 && !showHint) {
        setShowHint(true);
      }
      return newCount;
    });
  }, [getRandomSafeCell, showHint]);

  const handleMouseEnter = useCallback(() => {
    moveButton();
  }, [moveButton]);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    moveButton();
  }, [moveButton]);

  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  const reset = useCallback(() => {
    setCellIndex(null);
    setDodgeCount(0);
    setShowHint(false);
  }, []);

  // Calculate grid styles from cell index
  const getGridStyles = useCallback(() => {
    if (cellIndex === null) return {};
    
    const row = Math.floor(cellIndex / GRID_COLS);
    const col = cellIndex % GRID_COLS;
    
    return {
      gridColumn: `${col + 1}`,
      gridRow: `${row + 1}`,
    };
  }, [cellIndex]);

  return {
    isFloating: cellIndex !== null,
    gridStyles: getGridStyles(),
    dodgeCount,
    showHint,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onClick: handleClick,
      onTouchStart: handleTouchStart
    },
    reset
  };
};

export default useNoButtonDodge;