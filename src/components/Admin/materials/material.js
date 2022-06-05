import React from 'react';

export default class Assessment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { added: false };
        const tsks = [  { id: 0, name: "file1.txt"},
                        { id: 1, name: "file2.pdf"},
                    ];
        this.state = { tasks: tsks }
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    onAdd() {
        let iD = prompt("Enter id (must be unique)", 2);
        let n = prompt("Enter filename", "file3.txt");

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
                    <td className={'tdbrow'}><a href={"./src/components/Admin/materials/" + row.name}>File {row.id+1}</a></td>
                </tr>
            )
        })

        return (

            <div>
                <table className="tableDashboard">
                    <thead className="tdHead">
                        <tr>
                            <th>ID</th>
                            <th>File</th>
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
