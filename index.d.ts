import * as React from "react";

declare class AsyncInput extends React.Component<AsyncInputProps, any> { }

declare interface AsyncInputProps {
    elementType?: ElementTypes,
    nativeProps?: object,
    value: any
    debounceTime?: number,
    onChange?(): any;
}

enum ElementTypes {
    input = 'input',
    textArea = 'textArea'
}

export default AsyncInput