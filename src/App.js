//import ComEx01 from "./components/ex02/ComEx01";
//import FnComponentEx from "./components/ex02/FnComponentEx";
//import FnComEx01 from "./components/ex02/ComEx01";
//import { ComEx01, ComEx02 } from "./components/ex02/ComEx01";
// import PropsEx from "./components/ex03/PropsEx";
// import { MapFnEx } from "./components/ex04/MapnFnEx";
//import { ProblemEx04 } from "./components/ex04/ProblemEx04";
//import { Ex05 } from "./components/ex05/Ex05";
//import { Ex06 } from "./components/ex06/Ex06";
//import { Ex07 } from "./components/ex07/Ex07";
import { Ex08 } from "./components/ex08/Ex08";

const App = () => {
  return (
    <div>
      {/* 2일차 Components
      <div>
        <h3>prettier setting</h3>
      </div>
      <FnComponentEx></FnComponentEx>
      <ComEx01 />
      <ComEx02 />
      */}
      {/*3일차  Props */}
      {/*  <PropsEx /> */}

      {/* 4일차  Maps*/}
      {/* <MapFnEx /> */}
      {/* <IntroEx04 /> */}
      {/* <ProblemEx04 /> */}

      {/* 5일차 CSS*/}
      {/* <Ex05 /> */}

      {/* 6일차 GlobalStyled + webfont */}
      {/* <Ex06 /> */}

      {/* 7일차 Hook + Event*/}
      {/* <Ex07 /> */}

      {/* 8일차 */}
      <Ex08 />
    </div>
  );
};

export default App;

//jsx grammar rule
//if there are more than one tag, you should add a parent tag
//parent tag == instead of div(extra tag) use <fragment> tag
//single tag ex: <br> <img> -- should be close <br/> <img/> ...

//component
//=> represent a part of the layout
//=> the name of the const of the component
// should be the same as the name of the file
//=> you should always add export at the end of the component function

//import the different components in the App file
//if there are more than one component tag,
// you should add a parent tag (ex: div)