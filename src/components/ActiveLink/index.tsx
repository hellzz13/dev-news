import Link, {LinkProps} from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...otherProps}: ActiveLinkProps){

    const { asPath } = useRouter();
    const className = asPath === otherProps.href ? activeClassName : '';
    
    return(
        <Link {... otherProps}>
            {/* clona o children e atribui um valor da variavel que será passada como propriedade*/}
            {cloneElement(children, {
                className,
                })}
            
        </Link>
    );

}