import styled from 'styled-components';

export const ContactMe = styled.form`
    width: 40%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 90%;
        padding: 0 5%;
        margin: auto;
    }
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
    box-sizing: border-box;

    &::placeholder {
        color: ${({ theme }) => theme.colors.para_text_color};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 10px;
        font-size: 0.9rem;
    }
`;
