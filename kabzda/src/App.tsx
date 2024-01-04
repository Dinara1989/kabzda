import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/raiting/Rating";

function App() {
  return (
    <div>
        <PageTitle title={"This is App component"}/>
        <PageTitle title={"My friends"}/>
        <Rating value={3}/>
        <Accordion titleValue={'First'} collapsed={true}/>
        <Accordion titleValue={'Second'} collapsed={false}/>
        <Rating value={4}/>
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}
export default App;
