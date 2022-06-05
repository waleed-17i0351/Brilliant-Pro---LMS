import React from 'react';

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = { added: false };
        const tsks = [{ id: 0, name: "English", course_desc: "Teaches english", start: "1-1-2022", end: "6-1-2022", link: "www.dummy1.com"},
        { id: 1, name: "Calculus", course_desc: "Basic calculus", start: "2-1-2022", end: "6-2-2022", link: "www.dummy1.com"},
        { id: 2, name: "Marketing", course_desc: "Professional Marketing", start: "2-1-2022", end: "6-1-2022", link: "www.dummy1.com"},
        { id: 3, name: "Web Programming", course_desc: "In's and out's of web", start: "1-1-2022", end: "6-2-2022", link: "www.dummy1.com"}];
        this.state = { tasks: tsks }
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    onAdd() {
        let iD = prompt("Enter id (must be unique)", 5);
        let cname = prompt("Enter course name", "course name");
        let s = prompt("Enter course start", "1-4-2022");
        let e = prompt("Enter course end", "5-30-2022");
        let desc = prompt("Enter course description", "descriptionA");
        let l = prompt("Enter link", 7);

        const idkValue = { id: iD, name: cname, course_desc: desc, start: s, end: e, link: l};
        console.log(idkValue)
        this.setState({ tasks: [...this.state.tasks, idkValue] })
        console.log(this.state.tasks)
    }

    onRemove(){
        let iD = prompt("Enter Course(ID) to remove it", 5);
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
                    <td>{row.start}</td>
                    <td>{row.end}</td>
                    <td><a href={row.link}>Dummy {row.id+1}</a></td>
                    <td>{row.course_desc}</td>
                </tr>
            )
        })

        return (

            <div>
                <table className="tableDashboard">
                    <thead className="tdHead">
                        <tr>
                            <th>ID</th>
                            <th>Course</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Link</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectValueTable}
                    </tbody>
                </table>
                <button start='button' id='add-btn' onClick={this.onAdd}>Add Course</button>
                <button start='button' id='rm-btn' onClick={this.onRemove}>Remove Course</button>
            </div>
        );
    }

}
