import React from 'react';

class Edit extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Edit component</h1>
            <div className="form-group">
                <br />
                <form>
                    <label>
                        Movie Name:
                        <input className='form-control' type="text" />
                    </label>
                    <br />
                    <label>
                        Release Year:
                        <input className='form-control' type="text" />
                    </label>
                    <br />
                    <label>
                        Poster Url:
                        <textarea className='form-control' type="text" />
                    </label>
                    <br />
                    <input type="submit" value="Edit movie" />
                </form>
            </div>
            </div>
        );
    }
}

export default Edit;
