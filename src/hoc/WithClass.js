import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );


// need to pass props to the WrappedComponent, if use props = {props}, will just add props to props
//{...props} will pull out all the properties that are inside this prop object and distribute them as
//new key-value paris on this wrapped component


const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
    );
};

export default withClass;
