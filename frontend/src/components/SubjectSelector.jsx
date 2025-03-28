const SubjectSelector = ({ setSubject }) => {
    return (
        <select className="dropdown" onChange={(e) => setSubject(e.target.value)}>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="literature">Literature</option>
            <option value="geography">Geography</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="computer-science">Computer Science</option>
        </select>
    );
};

export default SubjectSelector;
