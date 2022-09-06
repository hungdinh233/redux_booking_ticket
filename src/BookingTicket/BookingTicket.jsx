import React, { Component } from "react";
import { connect } from "react-redux";
import BookingInfo from "./BookingInfo";
import SeatLines from "./SeatLines";

class BookingTicket extends Component {
  renderSeatLine = () => {
    let { seatLine } = this.props;
    return seatLine.map((line, index) => {
      return (
        <div key={index}>
          <SeatLines line={line} seatLineIndex={index} className="seatLine" />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          overflow: "auto",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            width: "100%",
            height: "100vw",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-7 d-flex flex-column me-5">
                <h3 className="text-warning text-center">
                  ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN
                </h3>
                <span className="text-light text-center mt-3">Màn hình</span>
                <div className="d-flex flex-column align-items-center">
                  <div className="screen"></div>
                  {this.renderSeatLine()}
                </div>
              </div>
              <div className="col-4">
                <h3 className="text-white text-center mt-5">
                  DANH SÁCH GHẾ BẠN CHỌN
                </h3>
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  seatLine: state.bookingTicketReducer.seatInfo,
});

export default connect(mapStateToProps)(BookingTicket);
