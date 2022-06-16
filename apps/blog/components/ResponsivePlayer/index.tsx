import ReactPlayer, { ReactPlayerProps } from "react-player";
import { FC } from "react";

const ResponsivePlayer: FC<ReactPlayerProps> = (props) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        {...props}
      />
    </div>
  );
};

export { ResponsivePlayer };
