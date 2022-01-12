import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './table.css'

const PrintTable = (props) => {
    const problemsArray = props.array;
    return (
        <div className="tabl pt-2 container">

            <table className="table table-light table" style={{ backgroundColor: "#" }}>
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
                        problemsArray.map((item, i) => {
                            const cla = "link-primary "
                            const alreadysolved = item.solved && item.lock;
                            const openacc = item.solved && !item.lock;
                            const openaccClass = openacc ? "text-center table-success" : "text-center table-default";
                            return (
                                <>
                                    <tr className={openaccClass} style={openacc ? { backgroundColor: '#fff', borderTop: 'none' } : { backgroundColor: "#fff" }}>
                                        <td scope="row" >
                                            <p>{i + 1}</p></td>
                                        <td> <p> {item.rating}</p></td>
                                        <th >
                                            {item.lock ? <p >{item.name}</p> : <a className={cla} href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank">{item.name}</a>}
                                        </th>
                                        {item.solved ?

                                            <td style={openacc ? { borderTop: 'none', backgroundColor: "#86fa86" } : { borderTop: 'none' }} >
                                                {alreadysolved ? <div className="font-weight-bold" style={{ color: '#7cf07c', fontWeight: '900' }} >Accepted </div> : <div className="tick" style={{ backgroundColor: '#86fa86' }} >Accepted</div>}
                                            </td>
                                            :
                                            <td  >— </td>
                                        }
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )


}

export default PrintTable;