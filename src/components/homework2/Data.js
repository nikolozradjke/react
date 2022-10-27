import Loop from './Loop.js';

function Data(){
    const data = [
        {
            title: 'Title 1',
            description: 'Description 1'
        },
        {
            title: 'Title 2',
            description: 'Description 2'
        },
        {
            title: 'Title 3',
            description: 'Description 3'
        },
        {
            title: 'Title 4',
            description: 'Description 4'
        }
    ];
    
    return (
        <div>
            <Loop data={data}/>
        </div>
        
    );
}

export default Data;