import "./App.css";
import ExampleFunctions from "./components/ExampleFunctions";
import { API_BASE_URL } from "./paths/paths";

function App() {
  console.log("Node enviroment =", process.env.NODE_ENV);
  return (
    <div className="App">
      <header className="App-header">
        <h4>Server Details</h4>
        <table width="50%" style={{ border: "1pt solid darkblue" }}>
          <tr>
            <th style={{ backgroundColor: "darkblue", color: "white" }}>
              Node Env
            </th>
            <th style={{ backgroundColor: "darkblue", color: "white" }}>
              API BASE URL
            </th>
          </tr>
          <tr>
            <td style={{ backgroundColor: "lightblue", color: "black" }}>
              {process.env.NODE_ENV}
            </td>
            <td style={{ backgroundColor: "lightblue", color: "black" }}>
              {API_BASE_URL}
            </td>
          </tr>
        </table>
        <h4> Responses</h4>

        <ExampleFunctions />
      </header>
    </div>
  );
}

export default App;
