import React, { Component } from "react";
import { connect } from "react-redux";

class BookingTicket extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
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
            height: "100%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8 d-flex flex-column align-item-center justify-content-center">
                <h3 className="text-warning text-center">
                  ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN
                </h3>
                <span className="text-light text-center mt-3">Màn hình</span>
                <div className="d-flex flex-column align-items-center">
                <div className="screen"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BookingTicket);
