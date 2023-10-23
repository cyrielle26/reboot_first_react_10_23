//import CSS.file (2nd way of using CSS on JSX : import link cf box_2
//import "./css/style.css";

//CSS component file about CSS
export const CssEx = () => {
  return (
    /*  1] first way of using CSS on JSX : writing in the tag*/
    <div>
      <div
        className="box"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "teal",
        }}
      >
        1번박스
      </div>

      {/* 2] 2nd way of using CSS on JSX : import link cf up|*/}
      <div className="box_2">2번박스</div>
    </div>
  );
};
