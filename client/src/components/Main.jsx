import { useState, useContext } from "react";
import BarChart from "./BarChart";
import { GobalState } from "../GobalState"

function App() {
    const state = useContext(GobalState)
    const [post] = state.PostApi.post;
    const userData = {
        labels: post.map((data) => data.name),
        datasets: [
            {
                label: "Thống kê số lượng post trong 1 ngày",
                data: post.map((data) => data.post),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                    "#5b80b1",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    };
    console.log("🚀 ~ file: Main.jsx ~ line 26 ~ App ~ userData", userData)
    return (
        <div style={{ width: 1000 }}>
            <BarChart chartData={userData} />
        </div>
    );
}

export default App;