import React, {useState} from 'react';

const Accordion = ({items})=>{

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index)=>{
        setActiveIndex(index)
    }

    const renderItem = items.map( (item, index) => {

        const active = index === activeIndex ? 'active' : ''

        return  <React.Fragment key={item.title}>
            <div
                className={`title ${active}`}
                onClick ={()=>{onTitleClick(index)}} >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                {item.content}
            </div>
        </React.Fragment>
    })

    return(
        <div>
        <div className="ui styled accordion">{renderItem}</div>
        <div>{activeIndex}</div>
        </div>
    );
};

export default Accordion;
