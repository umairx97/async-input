import * as React from "react";

declare class AsyncInput extends React.Component<AsyncInputProps, any> {}

declare interface AsyncInputProps { 
    elementType?: string, 
    nativeProps?: object, 
    value: string
    debounceTime?: number, 
    onChange?(): string;
}

export default AsyncInput