export interface ValidErrors{
    globalErrors: string[];
    fieldErrors: FieldErrors[];
}

interface FieldErrors {
    message: string;
    fieldName: string;
}