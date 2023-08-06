import React, { useEffect } from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    const pageX = document.documentElement.clientWidth;
    const pageY = document.documentElement.clientHeight;
    let mouseY = 0;
    let mouseX = 0;

    const moveGhostEyes = (event) => {
      // verticalAxis
      mouseY = event.pageY;
      const yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
      // horizontalAxis
      mouseX = event.pageX / -pageX;
      const xAxis = -mouseX * 100 - 100;

      document.querySelector('.box__ghost-eyes').style.transform = `translate(${xAxis}%, -${yAxis}%)`;

      // console.log('X: ' + xAxis);
    };
    document.addEventListener('mousemove', moveGhostEyes);

    return () => {
      document.removeEventListener('mousemove', moveGhostEyes);
    };
  }, []);

  return (
    <main className="notfound" id="notfound">
      <div className="box">
        <div className="box__ghost">
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="box__ghost-container">
            <div className="box__ghost-eyes">
              <div className="box__eye-left" />
              <div className="box__eye-right" />
            </div>
            <div className="box__ghost-bottom">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="box__ghost-shadow" />
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Whoops!</div>
            <div className="box__description-text">It seems that the page you&#39;re looking for could not be found</div>
          </div>

          <Link to="/" className="box__button" rel="noreferrer">Go Home</Link>

        </div>

      </div>
    </main>
  );
};

export default NotFound;
