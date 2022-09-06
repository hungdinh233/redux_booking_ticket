import React, { Component } from "react";
import { connect } from "react-redux";

class SeatLines extends Component {
  renderSeat = () => {
    let { line, seatLineIndex, bookedSeat } = this.props;
    // render seatLineIndex = 0 (hàng số ghế mẫu)
    if (seatLineIndex == 0) {
      return line.danhSachGhe.map((seatObject, index) => {
        return (
          <span className="rowNumber" key={index}>
            {seatObject.soGhe}
          </span>
        );
      });
    }
    return line.danhSachGhe.map((seatObject, seatIndex) => {
      //render ghế đã được đặt
      if (seatObject.daDat == true) {
        return (
          <button className="gheDuocChon" key={seatIndex}>
            {seatIndex + 1}
          </button>
        );
      }
      //return ghế bình thường (còn đang trống) và xử lý click biến ghế từ trắng => xanh (trạng thái ghế đang đặt)
      else {
        let cssGreenSeat = "";
        //biến bookingSeat là ghế ĐANG đặt, ta tìm index của nó trong danh sách ghế đã đặt. Nếu có thì sẽ css thành màu xanh, còn chưa thì css màu trắng
        let bookingSeatIndex = bookedSeat.find(
          (bookingSeat) => bookingSeat.soGhe === seatObject.soGhe
        );
        if (bookingSeatIndex) {
          cssGreenSeat = "gheDangChon";
        }
        return (
          <button
            className={`ghe ${cssGreenSeat}`}
            key={seatIndex}
            onClick={() => {
              const action = {
                type: "HANDLE_CLICK_SEAT",
                payload: {
                  seatName: seatObject.soGhe,
                  seatPrice: seatObject.gia,
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

const mapStateToProps = (state) => ({
  bookedSeat: state.bookingTicketReducer.bookedSeat,
});

export default connect(mapStateToProps)(SeatLines);
