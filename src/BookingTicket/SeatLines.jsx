import React, { Component } from "react";
import { connect } from "react-redux";

class SeatLines extends Component {
  renderSeat = () => {
    let { line, seatLineIndex } = this.props;
    // render seatLineIndex = 0 (hàng số ghế mẫu)
    if (seatLineIndex == 0) {
      return line.danhSachGhe.map((seat, index) => {
        return (
          <span className="rowNumber" key={index}>
            {seat.soGhe}
          </span>
        );
      });
    }
    return line.danhSachGhe.map((seatNumber, seatIndex) => {
      //render ghế đã được đặt
      if (seatNumber.daDat == true) {
        return (
          <button className="gheDuocChon" key={seatIndex}>
            {seatIndex + 1}
          </button>
        );
      }
      //return ghế bình thường (còn đang trống)
      else {
        // console.log("hello",seatNumber.soGhe);
        return (
          <button
            className="ghe"
            key={seatIndex}
            onClick={() => {
              // if (this.className === "ghe") {
              //   this.className === "gheDangChon";
              // }
              const action = {
                type: "HANDLE_CLICK_SEAT",
                payload: {
                  seatName: seatNumber.soGhe,
                  seatPrice: seatNumber.gia,
                },
              };
              this.props.dispatch(action);
            }}
          >
            {seatIndex + 1}
          </button>
        );
      }
    });
  };

  render() {
    let { line } = this.props;
    return (
      <div>
        <div className="seatLine">
          <span className="firstChar">{line.hang}</span>
          {this.renderSeat()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SeatLines);
