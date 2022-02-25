import classNames from 'classnames';
import { elapsed, formatTime } from 'lib/time';
import StopwatchSVG from 'public/svg/stopwatch.svg';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { GameStateContext } from 'src/contexts/gameState.context';

const Stopwatch: React.FC = () => {
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date>();
  const outputRef = useRef<HTMLOutputElement>(null);
  const { gameState, setGameState } = useContext(GameStateContext);
  const updateOutput = useCallback((start: Date) => {
    outputRef.current!.value = formatTime(elapsed(start, new Date()));
  }, []);

  useEffect(() => {
    if (gameState.startTime) {
      // set the startTime to be the saved one
      setStartTime(new Date(gameState.startTime));
      // and resume the stopwatch from it
      setStopwatchRunning(true);
    }
  }, [gameState]);

  useEffect(() => {
    if (stopwatchRunning) {
      // take the saved startTime or the current time
      const start: Date = startTime || new Date();

      // immediately populate the output
      updateOutput(start);

      setTimeout(() => {
        // update the output again once the timeout has passed
        updateOutput(start);

        setInterval(() => {
          // and then keep updating it every second
          updateOutput(start);
        }, 1000);
        // ensure proper interval start
      }, 1000 - new Date().getMilliseconds());

      // save the startTime in the local storage if it doesn't exist
      if (!startTime) {
        setGameState((gameState) => ({
          ...gameState,
          startTime: new Date().toISOString(),
        }));
      }
    }
  }, [stopwatchRunning, startTime, setGameState, updateOutput]);

  return (
    <div className="flex gap-2">
      <button type="button" tabIndex={-1} className="" onClick={() => setStopwatchRunning(true)}>
        <StopwatchSVG className="text-xl" />
      </button>

      <output
        ref={outputRef}
        className={classNames({
          'text-nwordle-green-50': stopwatchRunning,
        })}
      >
        00:00:00
      </output>
    </div>
  );
};

export default Stopwatch;
