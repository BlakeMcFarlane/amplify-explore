/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GitUserCreateFormInputValues = {
    name?: string;
    score?: number;
    description?: string;
};
export declare type GitUserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GitUserCreateFormOverridesProps = {
    GitUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GitUserCreateFormProps = React.PropsWithChildren<{
    overrides?: GitUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GitUserCreateFormInputValues) => GitUserCreateFormInputValues;
    onSuccess?: (fields: GitUserCreateFormInputValues) => void;
    onError?: (fields: GitUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GitUserCreateFormInputValues) => GitUserCreateFormInputValues;
    onValidate?: GitUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function GitUserCreateForm(props: GitUserCreateFormProps): React.ReactElement;
