import {useState} from 'react';

function Loop({data}){

    const [inputLength, updateLength] = useState(0);

    const handleChange = event => {
        updateLength(event.target.value.length);
      };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control" onChange={handleChange}/>
                </div>
                <div className="col-md-4">
                    <p className="h5">{inputLength}</p>
                </div>
                {data.map((item, index) => (
                    
                    <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" alt="{item.title}"/>
                      <div className="card-body">
                        <h1>{item.title}</h1>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
}

export default Loop;