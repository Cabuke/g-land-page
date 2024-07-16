declare module "*.svg" {
    const content: string;
    export default content;
}
// Adicionando declarações para `react-spring`
declare module 'react-spring' {
    import { HTMLAttributes } from 'react';

    export function useSpring(props: any): any;

    export const animated: {
        div: React.ComponentType<HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }>;
    };
}