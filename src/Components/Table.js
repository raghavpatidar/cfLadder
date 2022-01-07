import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetchProblem";
import { Table } from 'react-bootstrap'
// import prob from '../question'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const url = "https://codeforces.com/api/problemset.problems";
// const userurl = "https://codeforces.com/api/user.status?handle=";
const Tablex = () => {
    const { handel } = useParams();

    // console.log(handel);
    return (
        <>
            <h1>Codeforces Handel :{handel}</h1>
            <Problem ></Problem>
        </>
    )
}

const Problem = () => {
    const { handel } = useParams();
    const { loading, products } = useFetch(url);
    const items = [];
    if (!loading) {
        const prob = products.result.problems;
        const loading = false;
        prob.map((single) => {
            if (single.index === 'B' && single.rating <= 1500 && single.rating > 1000) {
                items.push(single);
            }
        })
        console.log(prob);
    }
    return (
        <div>
            {loading ? '<h1>loading...</h1>' :
                <center>
                    <table className="table table-hover table-light ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">rating </th>
                                <th scope="col">Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.slice(0, 100).map((item, i) => {

                                    return (
                                        <tr>
                                            <th scope="row" >{i + 1}</th>
                                            <td>{item.rating}</td>
                                            <td>
                                                <a href={`https://codeforces.com/contest/${item.contestId}/problem/B`}>{item.name}</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            }
        </div>
    )
}

// const getuser = (handel) => {
//     console.log(handel)
//     const userurl = `https://codeforces.com/api/user.status?handle=${handel}`;
//     const { loading, products } = useFetch(userurl);
//     console.log(loading);

//     return [0, 2, 5];
// }
export default Tablex

