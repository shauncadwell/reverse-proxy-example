import React, { useEffect, useCallback } from "react";
import api from "../api/api";
import { API_BASE_URL } from "../paths/paths";

function ExampleFunctions() {
  const [isLoading, setLoading] = React.useState({
    data: undefined,
    otherData: undefined,
  });

  async function postData() {
    const response = api
      .post()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return "Error getting data";
      });

    return response;
  }

  async function getOtherData() {
    const response = api
      .get()
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return "Error getting otherData";
      });

    return response;
  }

  const fetch = useCallback(async () => {
    return {
      data: await postData(),
      otherData: await getOtherData(),
    };
  }, []);

  useEffect(() => {
    if (!isLoading.data && !isLoading.otherData) {
      fetch().then((res) => {
        setLoading(res);
      });
    }
  }, [isLoading, fetch]);

  return (
    <>
      <table width="50%" style={{ border: "1pt solid darkblue" }}>
        <tr>
          <th style={{ backgroundColor: "darkblue", color: "white" }}>
            METHOD
          </th>
          <th style={{ backgroundColor: "darkblue", color: "white" }}>
            RESPONSE
          </th>
        </tr>
        <tr>
          <td style={{ backgroundColor: "lightblue", color: "black" }}>POST</td>
          <td style={{ backgroundColor: "lightblue", color: "black" }}>
            {isLoading.data ? isLoading.data : <>Loading... data</>}
          </td>
        </tr>

        <tr>
          <td style={{ backgroundColor: "lightblue", color: "black" }}>GET</td>
          <td style={{ backgroundColor: "lightblue", color: "black" }}>
            {isLoading.otherData ? isLoading.otherData : <>Loading... data</>}
          </td>
        </tr>
      </table>
    </>
  );
}

ExampleFunctions.propTypes = {};

export default ExampleFunctions;
