import React from 'react';

export default class Learner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { added: false };
        const tsks = [  { id: 0, name: "Waleed"},
                        { id: 1, name: "Ahmed"},
                        { id: 2, name: "Malik"},
                        { id: 3, name: "Muhammad"},
                        { id: 4, name: "Umair"},
                        { id: 5, name: "Khalid"},
                        { id: 6, name: "Awan"}
                    ];
        this.state = { tasks: tsks }
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    onAdd() {
        let iD = prompt("Enter id (must be unique)", 7);
        let n = prompt("Enter name", "Ali");

        const idkValue = { id: iD, name: n};
        console.log(idkValue)
        this.setState({ tasks: [...this.state.tasks, idkValue] })
        console.log(this.state.tasks)
    }

    onRemove(){
        let iD = prompt("Enter Name(ID) to remove it", 0);
        let temp = this.state.tasks;
        let filtered_temp = temp.filter( (e) => e.id !== parseInt(iD));
        console.log(filtered_temp);
        console.log(this.state.tasks);
        this.setState({ tasks: filtered_temp });
    }
    
    render() {

        let projectValueTable = this.state.tasks.map((row) => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td className={'tdbrow'}>{row.name}</td>
                </tr>
            )
        })

        return (

            <div>
                <table className="tableDashboard">
                    <thead className="tdHead">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectValueTable}
                    </tbody>
                </table>
                <button start='button' id='add-btn' onClick={this.onAdd}>Add Learner</button>
                <button start='button' id='rm-btn' onClick={this.onRemove}>Remove Learner</button>
            </div>
        );
    }

}
