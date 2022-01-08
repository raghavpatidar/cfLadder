import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetchProblem";
import { Table } from 'react-bootstrap'
import prob from '../que'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './table.css'

const url = "https://codeforces.com/api/problemset.problems";

const Tablex = () => {
    const { handel } = useParams();

    // console.log(handel);
    return (
        <>
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
    let ctr = 0;
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
        items.map((problem, i) => {
            var __FOUND = usersolver.find(function (post, index) {
                if (post.index === problem.index && post.contestId === problem.contestId) {
                    problem.solved = true;
                    // ctr++;
                    return true;
                }
            });
        })
    }
    let que = items.slice(0, 100);
    // console.log(usersolver);
    que.sort((a, b) => (a.rating) - (b.rating));
    // console.log(items);
    let flag = false;
    const problemsArray = []
    for (let i = 0; i < que.length; i++) {
        if (flag === false) {
            if (que[i].solved === false) {
                flag = true;
                problemsArray.push({ ...que[i], lock: false });
            } else {
                problemsArray.push({ ...que[i], lock: false });
            }
        } else {
            problemsArray.push({ ...que[i], lock: true });
        }
    }
    for (let i = 0; i < problemsArray.length; i++) {
        if (problemsArray[i].solved === true) {
            ctr++;
        }

    }

    // console.log(problemsArray);

    return (
        <div className="tabl pt-2">

            {products.status === 'OK' ?
                <div className="text-center" >
                    <h1 className="">Welcome {handel}
                        <p className="pt-5 fm-bold text-dark fs-4">solved : {ctr} / 100</p>
                    </h1>
                </div>
                : <h1 className="text-center pt-5">Welcome </h1>}

            {loading ? <h1 className="text-center text-primary">Loading...</h1> :
                <center>
                    <table className="table table-light table-hover" style={{ backgroundColor: "#" }}>
                        <thead>
                            <tr className="text-center">
                                <th scope="col">#</th>
                                <th scope="col">rating </th>
                                <th scope="col">Name</th>
                                <th scope="col">status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                problemsArray.slice(0, 100).map((item, i) => {


                                    const cla = "link-primary "
                                    const alreadysolved = item.solved && item.lock;
                                    const openacc = item.solved && !item.lock;
                                    const openaccClass = openacc ? "text-center table-success" : "text-center table-default";
                                    return (
                                        <tr className={openaccClass}>
                                            <td scope="row" >{i + 1}</td>
                                            <th  >{item.rating}</th>
                                            <th  >
                                                {item.lock ? <a>{item.name}</a> : <a className={cla} href={`https://codeforces.com/contest/${item.contestId}/problem/B`} target="_blank">{item.name}</a>}

                                            </th>
                                            {item.solved ?

                                                <td  >
                                                    {alreadysolved ? <div className="font-weight-bold" style={{ color: '#7cf07c', fontWeight: '900' }} > Accepted</div> : <div style={{ backgroundColor: '#86fa86' }} >Accepted</div>}
                                                </td>
                                                :
                                                <td  >— </td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            }
        </div >
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

