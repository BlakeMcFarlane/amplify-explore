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
export declare type GitUserUpdateFormInputValues = {
    name?: string;
    score?: number;
    description?: string;
};
export declare type GitUserUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GitUserUpdateFormOverridesProps = {
    GitUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GitUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: GitUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gitUser?: any;
    onSubmit?: (fields: GitUserUpdateFormInputValues) => GitUserUpdateFormInputValues;
    onSuccess?: (fields: GitUserUpdateFormInputValues) => void;
    onError?: (fields: GitUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GitUserUpdateFormInputValues) => GitUserUpdateFormInputValues;
    onValidate?: GitUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GitUserUpdateForm(props: GitUserUpdateFormProps): React.ReactElement;
