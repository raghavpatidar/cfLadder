import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./useFetchProblem";
import { Table } from 'react-bootstrap'
import prob from '../que'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './table.css'
import PrintTable from "./PrintTable";


const url = "https://codeforces.com/api/problemset.problems";

const Tablex = () => {
    return (
        <>
            <Problem />
        </>
    )
}

const Problem = () => {
    const { handel, ladder } = useParams();
    console.log(ladder);
    // const ladder = 2;
    // if (!ladder) {
    //     ladder = 0;
    // }
    const userurl = `https://codeforces.com/api/user.status?handle=${handel}`;
    const { loading, products } = useFetch(userurl);
    const items = [];
    const prob1 = prob.result.problems;
    prob1.map((single) => {
        if (single.index !== 'A' && single.index !== 'B' && single.rating <= 1500 && single.rating > 1000) {
            items.push({ ...single, solved: false });
        }
    })
    const usersolver = [];
    let ctr = 0;

    // calculating user problems solved and checking if he solved ladder quesstion or
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


    //slicing according to ladder 1 , 2 , 3;
    let que = [];
    let array = items.slice(0, 100);
    array.sort((a, b) => (a.rating) - (b.rating));
    if (ladder == 1) {
        que = array.slice(0, 40);
    } else if (ladder == 2) {
        que = array.slice(40, 70);
    }
    else if (ladder == 3) {
        que = array.slice(70, 100);
    } else {
        que = array.slice(0, 100);
    }



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
    return (
        <div className=" container">

            {products.status === 'OK' ?
                <div className="container item" >
                    <h2 className="">
                        Welcome : {handel}
                        <p className="pt-5 fm-bold text-dark fs-4">
                            solved : {ctr} / {problemsArray.length}
                        </p>
                    </h2>
                </div>
                : <h1 className="text-center pt-5 ">Welcome </h1>
            }
            {
                loading ? <h1 className="text-center text-primary ">Loading...</h1> :
                    <div className=" container">
                        <PrintTable array={problemsArray} key={problemsArray.length}></PrintTable>
                    </div>
            }


        </div >
    )
}

export default Tablex

