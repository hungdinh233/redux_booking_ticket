import BookingTicket from "./BookingTicket/BookingTicket";
import { Provider } from "react-redux";
import {store} from "./redux/configStore"

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BookingTicket />
      </Provider>
    </div>
  );
}

export default App;
