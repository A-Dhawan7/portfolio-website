import styled from 'styled-components';

export const ContactMe = styled.form`
    width: 40%;
`;

export const FormLabel = styled.p`
    color: ${({ theme }) => theme.colors.para_text_color};
    padding-bottom: 10px;
`;

export const FormInput = styled.input.attrs(props => ({
    as: props.type === "textarea" ? "textarea" : "input"
}))`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    border: 1px solid ${({ theme }) => theme.colors.para_text_color};
    color: ${({ theme }) => theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;
    resize: ${({ type }) => (type === "textarea" ? "vertical" : "none")};
    min-height: ${({ type }) => (type === "textarea" ? "120px" : "auto")};

    &::placeholder {
        color: ${({ theme }) => theme.colors.para_text_color};
    }
`;