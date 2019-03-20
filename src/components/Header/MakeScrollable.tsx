import * as React from "react";
import Headroom from "react-headroom";

interface InjectedProps {
  pinned: boolean;
  fixed: boolean;
}

interface MakeMenuProps {
  children(props: InjectedProps): React.ReactNode;
}

interface State {
  pinned: boolean;
  fixed: boolean;
}

class MakeScrollable extends React.Component<MakeMenuProps, {}> {
  state: State = {
    pinned: false,
    fixed: true,
  };

  handleUnpin = () => {
    this.setState({ pinned: false, fixed: false });
  };

  handlePin = () => {
    this.setState({ pinned: true });
  };

  handleUnfix = () => {
    this.setState({ fixed: true });
  };

  render() {
    return (
      <Headroom
        onUnpin={this.handleUnpin}
        onPin={this.handlePin}
        onUnfix={this.handleUnfix}
      >
        {this.props.children({
          pinned: this.state.pinned,
          fixed: this.state.fixed,
        })}
      </Headroom>
    );
  }
}

export { MakeScrollable };
