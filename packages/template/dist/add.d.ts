/// <reference types="react" />
export declare const Button: (props: {
    label: string;
    children: React.ReactNode;
}) => JSX.Element;
export declare const List: (props: {
    str: string;
}) => JSX.Element;
export declare const Test: <T extends string | string[]>(props: {
    str: T;
}) => JSX.Element;
