// import { useRef, useEffect } from 'react';

// const TestAnimation = () => {
//   const imgRef = useRef();
//   //   const img = document.getElementById('img');

//   const delay = 0;
//   const imgCount = 122;

//   const animation = i => {
//     if (i === imgCount) {
//       animation(0);
//       return;
//     }

//     // img.src = require(`../assets/test/JP_dragon_idle00000.png`);
//     imgRef.current.src = require(`../assets/test/JP_dragon_idle0000${i}.png`).default;

//     imgRef.current.onload = () => {
//       console.log('img onload......');
//       setTimeout(() => {
//         animation(i + 1);
//       }, delay);
//     };
//   };

//   useEffect(() => {
//     if (imgRef) animation(0);
//   }, [imgRef]);

//   return (
//     <div>
//       <h1>test</h1>
//       <img alt="1234" ref={imgRef} />
//     </div>
//   );
// };

// export default TestAnimation;
