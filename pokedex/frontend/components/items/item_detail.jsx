import React from 'react';

export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }

  render() {
    // debugger;
    return (
      <div>
        {this.items}
      </div>
    );
  }


}
