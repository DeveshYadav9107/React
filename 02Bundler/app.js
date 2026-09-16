// createElement("tag","property","children")

const element1 = React.createElement("h1",{id : "first", className : "firstClass" ,style : {backgroundColor : "blue", color : "pink"}},"This is First");
const element2 = React.createElement("h2",{id : "second", className : "secondClass",style : {backgroundColor : "black", color : "pink"}},"This is Second");

// Till react 17-18 we do like this
// ReactDOM.render(element1,document.getElementById('root'));
// But the issue with this is like mein kisi site ko visit kr rha hu and uske nav bar mein multiple options hai and mne ek option select kra toh yeh kya krta hai ki phle uss page me jitna bhi hai sb render krega and then fir ham next option select kr skte hai nav bar mein 
// iss issue ko solve krne ke lie 'createRoot' aya in react 19

const ReactRoot = ReactDOM.createRoot(document.getElementById('root')); 

// ReactRoot.render(element1);
// ReactRoot.render(element2);

// Here is a small issue with this code that is when we render element1 and then render element2 it will replace the element1 with element2 because we are using the same root for both elements. So if you want to render both elements then you have to use a parent element like div or fragment.

const div1 = React.createElement('div',{}, [element1,element2]);  // By doing this ham ek div create kr rhe hai jisme jitne bhi children chate hai vo append kr rhe hai and fir iss div ko main root mein append kr denge jisse replace nhi hoga kuch bhi

ReactRoot.render(div1);