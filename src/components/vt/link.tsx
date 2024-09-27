import { LinkProps, NavLink as RRLink, useMatch, useResolvedPath } from 'react-router-dom';
import { Button } from '~/components/ui/button';

export namespace Dropecho {
  export function Link(props: LinkProps) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname + '/*', end: true });

    return (
      <RRLink {...props}>
        <Button variant={match ? 'default' : 'outline'}>{props.children}</Button>
      </RRLink>
    );
  }
}
