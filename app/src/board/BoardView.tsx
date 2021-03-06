import "./BoardView.scss";
import React from "react";
import classNames from "classnames";
import { GridView } from "../grid/GridView";
import { Board } from "./model/Board";
import { BlockDebugView } from "./BlockDebugView";
import { RingColor } from "../ring/model/RingColor";
import { PlayerView } from "../player/PlayerView";

type Props = {
  board: Board;
  onPlayerJoinClick: (color: RingColor) => void;
  debugView?: boolean;
};

export const BoardView = ({
  board,
  onPlayerJoinClick,
  debugView = false,
}: Props) => {
  const className = classNames("Board", { debugView });
  const playerTop = board.players[RingColor.COLOR_1];
  const playerRight = board.players[RingColor.COLOR_2];
  const playerBottom = board.players[RingColor.COLOR_3];
  const playerLeft = board.players[RingColor.COLOR_4];

  return (
    <div className={className}>
      <div className="Board--Block--x1">
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Top Left Corner" />
        </div>
        <div className="Board--Block--x3">
          {playerTop !== undefined ? (
            <PlayerView player={playerTop} layout="Horizontal" />
          ) : null}
        </div>
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Top Right Corner" />
        </div>
      </div>

      <div className="Board--Block--x3">
        <div className="Board--Block--x1">
          {playerLeft !== undefined ? (
            <PlayerView player={playerLeft} layout="Vertical" />
          ) : null}
        </div>
        <div className="Board--Block--x3 Board--Grid">
          <GridView grid={board.grid} />
        </div>
        <div className="Board--Block--x1">
          {playerRight !== undefined ? (
            <PlayerView player={playerRight} layout="Vertical" />
          ) : null}
        </div>
      </div>

      <div className="Board--Block--x1">
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Bottom Left Corner" />
        </div>
        <div className="Board--Block--x3">
          {playerBottom !== undefined ? (
            <PlayerView player={playerBottom} layout="Horizontal" />
          ) : null}
        </div>
        <div className="Board--Block--x1">
          <BlockDebugView show={debugView} text="Bottom Right Corner" />
        </div>
      </div>
    </div>
  );
};
