import React, { Component } from "react";
import { connect } from "react-redux";

class BookingInfo extends Component {
  renderBookedSeatOnTable = () => {
    let { bookedSeat } = this.props;
    return bookedSeat.map((seatObject, index) => {
      // return về rỗng cho giá trị state mặc định ko hiển thị lên giao diện
      if (seatObject.soGhe === "") {
        return "";
      }
      return (
        <tr className="text-warning text-center" key={index}>
          <td style={{ fontSize: 20 }}>{seatObject.soGhe}</td>
          <td style={{ fontSize: 20 }}>{seatObject.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              style={{ borderRadius: 30 }}
              onClick={() => {
                const action = {
                  type: "HANDLE_DELETE_BOOKING",
                  payload: {
                    seatName: seatObject.soGhe,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="d-flex flex-column mt-5">
        <div>
          <button className="gheDuocChon"></button>
          <span
            className="text-white ms-4"
            style={{
              fontSize: 20,
              WebkitTextStrokeWidth: 0.5,
              WebkitTextStrokeColor: "orange",
            }}
          >
            Ghế đã đặt
          </span>
        </div>
        <div>
          <button className="gheDangChon"></button>
          <span
            className="text-white ms-4"
            style={{
              fontSize: 20,
              WebkitTextStrokeWidth: 0.5,
              WebkitTextStrokeColor: "green",
            }}
          >
            Ghế đang chọn
          </span>
        </div>
        <div>
          <button className="ghe"></button>
          <span
            className="text-white ms-4"
            style={{
              fontSize: 20,
            }}
          >
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr
                className=" text-center"
                style={{
                  fontSize: 24,
                  color: "#fb0000",
                  WebkitTextStrokeWidth: 0.1,
                  WebkitTextStrokeColor: "#fabebe",
                }}
              >
                <th>Vị trí ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>{this.renderBookedSeatOnTable()}</tbody>
            <tfoot>
              <tr>
                <td
                  className="text-white"
                  style={{ fontSize: 23 }}
                  colSpan={2}
                  align="right"
                >
                  Tổng tiền:{" "}
                  {this.props.bookedSeat
                    .reduce((totalPrice, seatObject, index) => {
                      return (totalPrice += seatObject.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bookedSeat: state.bookingTicketReducer.bookedSeat,
});

export default connect(mapStateToProps)(BookingInfo);
