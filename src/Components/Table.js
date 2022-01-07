import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetchProblem";
import { Table } from 'react-bootstrap'
import prob from '../question'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './table.css'

const url = "https://codeforces.com/api/problemset.problems";

const Tablex = () => {
    const { handel } = useParams();

    // console.log(handel);
    return (
        <>
            <h1>Codeforces Handel :{handel}</h1>
            <Problem />
        </>
    )
}

const Problem = () => {
    const { handel } = useParams();
    const userurl = `https://codeforces.com/api/user.status?handle=${handel}`;
    const { loading, products } = useFetch(userurl);
    const items = [];
    const prob1 = prob.result.problems;
    prob1.map((single) => {
        if (single.index === 'B' && single.rating <= 1500 && single.rating > 1000) {
            items.push({ ...single, solved: false });
        }
    })
    const usersolver = [];
    if (!loading) {
        if (products.status === 'OK') {
            products.result.map((item, i) => {
                if (item.verdict === 'OK') {
                    const temp = {
                        contestId: item.problem.contestId,
                        index: item.problem.index
                    }
                    usersolver.push(temp);
                }
            })
        }
        let ctr = 0;
        items.map((problem, i) => {
            var __FOUND = usersolver.find(function (post, index) {
                if (post.index === problem.index && post.contestId === problem.contestId) {
                    problem.solved = true;
                    return true;
                }
            });
        })
    }
    let que = items.slice(0, 100);
    console.log(usersolver);
    que.sort((a, b) => (a.rating) - (b.rating));
    console.log(items);

    return (
        <div className="tabl">
            {loading ? '<h1>loading...</h1>' :
                <center>
                    <table className="table  table-light  ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">rating </th>
                                <th scope="col">Name</th>
                                <th scope="col">status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                que.slice(0, 100).map((item, i) => {

                                    return (
                                        <tr>
                                            <th scope="row" >{i + 1}</th>
                                            <td>{item.rating}</td>
                                            <td >
                                                <a href={`https://codeforces.com/contest/${item.contestId}/problem/B`}>{item.name}</a>
                                            </td>
                                            {item.solved ?
                                                <td className="bgc">
                                                    <p>ture</p>
                                                </td>
                                                :
                                                <td >
                                                </td>
                                            }
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
//    
//     const { loading, products } = useFetch(userurl);
//     console.log(loading);

//     return [0, 2, 5];
// }
export default Tablex

