import React from "react";

const Table = ({data}) => {
    return (
        <main className='container'>
            <table border={2} className='table'>
                <thead className='table_col'>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Release</th>
                </tr>
                </thead>
                <tbody>
                {data.map(el => {
                    const dated = new Date(el.release.seconds * 1000);

                    return (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{dated.toISOString()}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button className='add_row'>+</button>
        </main>
    )
}

export {Table}