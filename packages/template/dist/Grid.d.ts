/// <reference types="react" />
/**
 * Grid properties.
 */
export interface IGridProps {
    /** prop1 description */
    prop1?: string;
    /** prop2 description */
    prop2?: number;
    /**
     * prop3 description
     */
    prop3?: () => void;
    /** Working grid description */
    prop4?: 'option1' | 'option2' | 'option3';
}
/**
 * Form Grid.
 */
export declare const Grid: (props: IGridProps) => JSX.Element;
