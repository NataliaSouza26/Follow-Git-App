import React from 'react';
import errorGif from '../../assets/error.gif';

type HocProps = {

};
type HocState = {
    readonly hasError: string | null | undefined;
};

class ErrorSystem extends React.Component<HocProps, HocState> {

    readonly state: HocState = {
        hasError: undefined,
    };

    constructor(props) {
        super(props);
        this.state = { hasError: undefined };
    }

    static getDerivedStateFromError(error) {
        return { hasError: 'Algo deu errado' };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
                <div>
                    <h1>{hasError}</h1>
                    <img src={errorGif} alt='Erro' />
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorSystem; 