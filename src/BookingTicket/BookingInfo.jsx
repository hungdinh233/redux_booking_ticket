import React, { Component } from "react";
import { connect } from "react-redux";

class BookingInfo extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-5">
        <div>
          <button className="gheDuocChon"></button>
          <span className="text-white ms-4" style={{ fontSize: 20 }}>
            Ghế đã đặt
          </span>
        </div>
        <div>
          <button className="gheDangChon"></button>
          <span className="text-white ms-4" style={{ fontSize: 20 }}>
            Ghế đang chọn
          </span>
        </div>
        <div>
          <button className="ghe"></button>
          <span className="text-white ms-4" style={{ fontSize: 20 }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-white text-center" style={{ fontSize: 19 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-warning text-center">
                <td>1</td>
                <td>50000</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BookingInfo);
