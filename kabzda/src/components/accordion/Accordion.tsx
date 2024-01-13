import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}
const Accordion = (props: AccordionPropsType) => {
        //так писати небажано
        // if(props.collapsed === true) {
        //     return <div>
        //         <AccordionTitle title={props.titleValue}/>
        //         <AccordionBody/>
        //     </div>
        // } else {
        //     return <div></div>
        // }
    //рефакторінг, коротка версія
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {/*//якщо не collapsed, тоді покажи*/}
        { !props.collapsed && <AccordionBody/> }
    </div>
};

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;