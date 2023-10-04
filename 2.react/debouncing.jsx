import axios from "axios";
import React from "react";

export default function App () {
  const [pinCode, setPinCode] = React.useState ("");

  React.useEffect ( () => {
    const timer = setTimeout(() => {
      if (pinCode) {
        axios
          .get (`https://api.postalpincode.in/pincode/${pinCode}`)
          .then ( (response) => {
            console.log (response.data[0]?.PostOffice[0]);
          });
      }
    }, 2000); // delay of 2 seconds

    return () => clearTimeout(timer); // cleanup on unmount or pinCode change
  }, [pinCode]);

  return (
    <div className="app">
      <input
        placeholder="Search Input.."
        onChange= { (e) => setPinCode(e.target.value)}
      />
    </div>
  );
}
