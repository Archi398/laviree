import React, { useEffect } from 'react';

export default function ScrollDown() {
  useEffect(() => {
    const element = document.querySelector('.p-introduction__follow');
    setTimeout(() => {
      element.classList.add('is-shown');
    }, 1000);
  }, []);

  return (
    <>
      <style>
        {`
          .p-introduction__follow {
            width: 15px;
            height: 10vh;
            overflow: hidden;
            position: relative;
            margin: 6vh auto 0;
            opacity: 0;
            transition-property: opacity;
          }

          .p-introduction__follow.is-shown {
            opacity: 1;
            transition-duration: 1s;
            transition-delay: 3s;
          }

          .p-introduction__follow-in {
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            background-color: rgb(0, 255, 170);
            animation-name: loopFollow;
            animation-duration: .8s;
            animation-iteration-count: infinite;
          }

          .p-introduction__follow-in--1 {
            left: 0;
          }

          .p-introduction__follow-in--2 {
            left: 50%;
            margin-left: -1px;
            animation-delay: .3s;
          }

          .p-introduction__follow-in--3 {
            right: 0;
            animation-delay: .15s;
          }

          @keyframes loopFollow {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}
      </style>
      <div style={{ position: 'absolute', bottom: '0', left: '50%' }}>
        <div className="p-introduction__follow is-shown">
          <div className="p-introduction__follow-in p-introduction__follow-in--1"></div>
          <div className="p-introduction__follow-in p-introduction__follow-in--2"></div>
          <div className="p-introduction__follow-in p-introduction__follow-in--3"></div>
        </div>
      </div>
    </>
  );
}
